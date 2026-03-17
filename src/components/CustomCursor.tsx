import { useEffect, useState } from 'react';
import { motion, useSpring, useMotionValue } from 'motion/react';

export default function CustomCursor() {
  const [isHovering, setIsHovering] = useState(false);

  // Motion values for direct updates (no React re-renders)
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Spring config for the outer circle
  const springConfig = { damping: 30, stiffness: 200 };
  const cursorX = useSpring(mouseX, springConfig);
  const cursorY = useSpring(mouseY, springConfig);

  useEffect(() => {
    const moveMouse = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    const handleHover = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const isClickable = 
        target.tagName === 'A' || 
        target.tagName === 'BUTTON' || 
        target.closest('a') || 
        target.closest('button') ||
        target.classList.contains('cursor-pointer');
      
      setIsHovering(!!isClickable);
    };

    window.addEventListener('mousemove', moveMouse);
    window.addEventListener('mouseover', handleHover);

    return () => {
      window.removeEventListener('mousemove', moveMouse);
      window.removeEventListener('mouseover', handleHover);
    };
  }, [cursorX, cursorY]);

  return (
    <>
      <style>
        {`
          * {
            cursor: none !important;
          }
          @media (max-width: 768px) {
            * {
              cursor: auto !important;
            }
            .custom-cursor {
              display: none !important;
            }
          }
        `}
      </style>
      <motion.div
        className="custom-cursor fixed top-0 left-0 w-6 h-6 bg-white rounded-full pointer-events-none z-[9999] mix-blend-difference"
        style={{
          x: cursorX,
          y: cursorY,
          translateX: '-50%',
          translateY: '-50%',
          scale: isHovering ? 2.5 : 1,
        }}
        transition={{
          scale: { duration: 0.2 }
        }}
      />
      <motion.div
        className="custom-cursor fixed top-0 left-0 w-2 h-2 bg-white rounded-full pointer-events-none z-[9999]"
        style={{
          x: mouseX,
          y: mouseY,
          translateX: '-50%',
          translateY: '-50%',
        }}
      />
    </>
  );
}
