import { gsap } from 'gsap';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';

// Register ScrollToPlugin
gsap.registerPlugin(ScrollToPlugin);

/**
 * Smoothly scrolls to the specified element with GSAP
 * @param target - The target element or selector to scroll to
 * @param duration - Duration of the scroll animation in seconds
 * @param offset - Offset from the top of the element in pixels
 */
export const scrollToElement = (
  target: string | Element,
  duration: number = 1,
  offset: number = 0
): void => {
  // Get the element if a selector was passed
  const element = typeof target === 'string' ? document.querySelector(target) : target;
  
  if (!element) {
    console.warn(`Element not found: ${target}`);
    return;
  }

  // Scroll to the element with GSAP
  gsap.to(window, {
    duration,
    scrollTo: {
      y: element,
      offsetY: offset,
      autoKill: false
    },
    ease: 'power2.inOut'
  });
};

/**
 * Animates elements on page load
 * @param elements - Array of elements or selectors to animate
 * @param staggerDelay - Delay between each element animation
 */
export const animateElementsOnLoad = (
  elements: string | string[] | Element | Element[],
  staggerDelay: number = 0.1
): gsap.core.Timeline => {
  const timeline = gsap.timeline();
  
  // Convert single element to array
  const elementsArray = Array.isArray(elements) ? elements : [elements];
  
  // Create a staggered animation for the elements
  timeline.from(elementsArray, {
    opacity: 0,
    y: 30,
    duration: 0.8,
    stagger: staggerDelay,
    ease: 'power2.out'
  });
  
  return timeline;
};

/**
 * Creates a reveal animation for elements when they enter the viewport
 * @param element - The element or selector to animate
 * @param animation - The animation properties
 */
export const createRevealAnimation = (
  element: string | Element,
  animation: gsap.TweenVars = {
    opacity: 0,
    y: 50,
    duration: 0.8,
    ease: 'power2.out'
  }
): gsap.core.Tween => {
  // Set initial state
  gsap.set(element, { opacity: 0, y: 50 });
  
  // Create and return the animation (paused)
  return gsap.to(element, {
    ...animation,
    paused: true
  });
};