import React, { useEffect, useRef, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

export default function CursorTrail() {
  const [isVisible, setIsVisible] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  const trailRef = useRef([]);

  const springConfig = { damping: 25, stiffness: 200, mass: 0.5 };
  const springX = useSpring(cursorX, springConfig);
  const springY = useSpring(cursorY, springConfig);

  useEffect(() => {
    // Only show on desktop
    const isMobile = window.matchMedia('(max-width: 768px)').matches;
    if (isMobile) return;

    const handleMouseMove = (e) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseOver = (e) => {
      const target = e.target;
      if (
        target.tagName === 'A' ||
        target.tagName === 'BUTTON' ||
        target.closest('a') ||
        target.closest('button') ||
        target.classList.contains('cursor-pointer')
      ) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseover', handleMouseOver);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseover', handleMouseOver);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
    };
  }, [cursorX, cursorY, isVisible]);

  if (!isVisible) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-[9990] hidden md:block">
      {/* Main cursor dot */}
      <motion.div
        className="fixed top-0 left-0 rounded-full"
        style={{
          x: springX,
          y: springY,
          translateX: '-50%',
          translateY: '-50%',
          width: isHovering ? 48 : 8,
          height: isHovering ? 48 : 8,
          backgroundColor: isHovering ? 'transparent' : 'var(--accent-cyan)',
          border: isHovering ? '2px solid var(--accent-cyan)' : 'none',
          boxShadow: `0 0 ${isHovering ? 20 : 10}px var(--accent-cyan)`,
          transition: 'width 0.3s, height 0.3s, background-color 0.3s, border 0.3s',
        }}
      />
      {/* Trailing glow */}
      <motion.div
        className="fixed top-0 left-0 rounded-full opacity-20"
        style={{
          x: cursorX,
          y: cursorY,
          translateX: '-50%',
          translateY: '-50%',
          width: 40,
          height: 40,
          background: 'radial-gradient(circle, var(--accent-cyan) 0%, transparent 70%)',
          filter: 'blur(8px)',
        }}
      />
    </div>
  );
}
