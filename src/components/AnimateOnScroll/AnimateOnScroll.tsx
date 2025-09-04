import React, { useRef, ReactNode } from 'react';
import { useAnimateOnScroll } from '../../hooks/useAnimateOnScroll';
import { gsap } from 'gsap';

export interface AnimateOnScrollProps {
  children: ReactNode;
  threshold?: number;
  rootMargin?: string;
  animation?: gsap.TweenVars;
  once?: boolean;
  className?: string;
}

/**
 * Component that animates its children when they enter the viewport
 */
export const AnimateOnScroll: React.FC<AnimateOnScrollProps> = ({
  children,
  threshold = 0.1,
  rootMargin = '0px',
  animation = {
    opacity: 1,
    y: 0,
    duration: 0.8,
    ease: 'power2.out'
  },
  once = true,
  className = ''
}) => {
  const elementRef = useRef<HTMLDivElement>(null);
  
  useAnimateOnScroll(elementRef, {
    threshold,
    rootMargin,
    animation,
    once
  });
  
  return (
    <div ref={elementRef} className={className}>
      {children}
    </div>
  );
};

export default AnimateOnScroll;