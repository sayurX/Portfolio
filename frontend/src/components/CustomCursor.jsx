import { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';
import { useCursor } from '../context/CursorContext';

export default function CustomCursor() {
  const { cursorType, cursorText, cursorLabel } = useCursor();
  const [isVisible, setIsVisible] = useState(false);

  // Mouse position
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Smooth spring configuration
  const springConfig = { damping: 25, stiffness: 150, mass: 0.5 };
  const cursorX = useSpring(mouseX, springConfig);
  const cursorY = useSpring(mouseY, springConfig);

  useEffect(() => {
    const updateMousePosition = (e) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    window.addEventListener('mousemove', updateMousePosition);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);

    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
    };
  }, [mouseX, mouseY, isVisible]);

  // Cursor variants based on type
  const variants = {
    default: {
      width: 24,
      height: 24,
      backgroundColor: '#eae5dd',
      opacity: isVisible ? 1 : 0,
      x: '-50%',
      y: '-50%',
      mixBlendMode: 'difference',
    },
    project: {
      width: 100,
      height: 100,
      backgroundColor: '#0055ff', // Blue color for "see more"
      opacity: isVisible ? 1 : 0,
      x: '-50%',
      y: '-50%',
      mixBlendMode: 'normal',
    },
  };

  if (typeof window === 'undefined') return null;

  return (
    <motion.div
      className="custom-cursor"
      style={{
        left: cursorX,
        top: cursorY,
        position: 'fixed',
        pointerEvents: 'none',
        zIndex: 9999,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: '50%',
        color: '#fff',
        fontFamily: 'var(--font-body)',
        fontSize: '14px',
        fontWeight: '500',
        textAlign: 'center',
      }}
      variants={variants}
      animate={cursorType}
      transition={{ type: 'spring', ...springConfig }}
    >
      {cursorType === 'project' && cursorText && (
        <motion.span
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.1 }}
        >
          {cursorText}
        </motion.span>
      )}

      {/* Tooltip Label (e.g. Mike Bennet) */}
      {cursorType === 'project' && cursorLabel && (
        <motion.div
          className="cursor-tooltip"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          style={{
            position: 'absolute',
            bottom: '-40px',
            right: '-20px',
            backgroundColor: 'rgba(50, 50, 50, 0.9)',
            padding: '6px 12px',
            borderRadius: '4px',
            fontSize: '12px',
            color: '#eae5dd',
            whiteSpace: 'nowrap',
            boxShadow: '0 4px 12px rgba(0,0,0,0.3)',
          }}
        >
          {cursorLabel}
        </motion.div>
      )}
    </motion.div>
  );
}
