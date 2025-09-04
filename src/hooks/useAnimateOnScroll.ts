import { useEffect, useRef, RefObject } from 'react';
import { gsap } from 'gsap';

interface AnimationOptions {
  threshold?: number;
  rootMargin?: string;
  animation?: gsap.TweenVars;
  once?: boolean;
}

/**
 * Hook to animate elements when they enter the viewport
 * @param elementRef - Reference to the element to animate
 * @param options - Animation options
 */
export const useAnimateOnScroll = (
  elementRef: RefObject<HTMLElement>,
  options: AnimationOptions = {}
): void => {
  const {
    threshold = 0.1,
    rootMargin = '0px',
    animation = {
      opacity: 1,
      y: 0,
      duration: 0.8,
      ease: 'power2.out'
    },
    once = true
  } = options;

  const animationRef = useRef<gsap.core.Tween | null>(null);
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    const element = elementRef.current;
    
    if (!element) return;
    
    // Set initial state
    gsap.set(element, { opacity: 0, y: 30 });
    
    // Create animation but don't play it yet
    animationRef.current = gsap.to(element, {
      ...animation,
      paused: true
    });
    
    // Create intersection observer
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Play animation when element enters viewport
            animationRef.current?.play();
            
            // Unobserve if animation should only play once
            if (once && observerRef.current) {
              observerRef.current.unobserve(element);
            }
          } else if (!once) {
            // Reverse animation when element leaves viewport (if not once)
            animationRef.current?.reverse();
          }
        });
      },
      { threshold, rootMargin }
    );
    
    // Start observing
    observerRef.current.observe(element);
    
    // Cleanup
    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
      if (animationRef.current) {
        animationRef.current.kill();
      }
    };
  }, [elementRef, threshold, rootMargin, animation, once]);
};

export default useAnimateOnScroll;