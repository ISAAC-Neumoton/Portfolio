import { useState, useEffect, useRef } from 'react';

/**
 * useCountUp
 * Animates a number from 0 to `target` when `trigger` becomes true.
 */
export function useCountUp(target, duration = 1800, trigger = true) {
  const [count, setCount] = useState(0);
  const raf = useRef(null);

  useEffect(() => {
    if (!trigger) return;
    const start = performance.now();

    const animate = (now) => {
      const elapsed = now - start;
      const progress = Math.min(elapsed / duration, 1);
      // easeOutQuart
      const eased = 1 - Math.pow(1 - progress, 4);
      setCount(Math.round(eased * target));
      if (progress < 1) raf.current = requestAnimationFrame(animate);
    };

    raf.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(raf.current);
  }, [target, duration, trigger]);

  return count;
}