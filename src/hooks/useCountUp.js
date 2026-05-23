import { useState, useEffect, useRef } from 'react';

export function useCountUp(target, duration = 2000, suffix = '', prefix = '') {
  const [count, setCount] = useState(0);
  const elementRef = useRef(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const currentElement = elementRef.current;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
        }
      },
      { threshold: 0.1 }
    );

    if (currentElement) {
      observer.observe(currentElement);
    }

    return () => {
      if (currentElement) {
        observer.unobserve(currentElement);
      }
    };
  }, [hasAnimated]);

  useEffect(() => {
    if (!hasAnimated) return;

    let start = 0;
    const end = parseInt(target, 10);
    if (isNaN(end)) return;

    if (end === 0) {
      return;
    }

    const totalMiliseconds = duration;
    const incrementTime = Math.max(Math.floor(totalMiliseconds / end), 16); // cap at 60fps
    const step = end / (totalMiliseconds / incrementTime);
    let current = start;

    const timer = setInterval(() => {
      current += step;
      if (current >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, incrementTime);

    return () => clearInterval(timer);
  }, [hasAnimated, target, duration]);

  const displayValue = count.toLocaleString('en-IN');

  return [elementRef, `${prefix}${displayValue}${suffix}`];
}
