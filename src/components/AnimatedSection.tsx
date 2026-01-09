import { motion, useInView, useScroll, useTransform } from 'framer-motion';
import { useRef, ReactNode } from 'react';

interface AnimatedSectionProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  direction?: 'up' | 'down' | 'left' | 'right' | 'none' | 'scale' | 'rotate';
}

export const AnimatedSection = ({ 
  children, 
  className = '', 
  delay = 0,
  direction = 'up' 
}: AnimatedSectionProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const getInitial = () => {
    switch (direction) {
      case 'up': return { opacity: 0, y: 60 };
      case 'down': return { opacity: 0, y: -60 };
      case 'left': return { opacity: 0, x: 60 };
      case 'right': return { opacity: 0, x: -60 };
      case 'scale': return { opacity: 0, scale: 0.8 };
      case 'rotate': return { opacity: 0, rotateX: 45, y: 60 };
      case 'none': return { opacity: 0 };
      default: return { opacity: 0, y: 60 };
    }
  };

  const getAnimate = () => {
    switch (direction) {
      case 'up':
      case 'down': return { opacity: 1, y: 0 };
      case 'left':
      case 'right': return { opacity: 1, x: 0 };
      case 'scale': return { opacity: 1, scale: 1 };
      case 'rotate': return { opacity: 1, rotateX: 0, y: 0 };
      case 'none': return { opacity: 1 };
      default: return { opacity: 1, y: 0 };
    }
  };

  return (
    <motion.div
      ref={ref}
      initial={getInitial()}
      animate={isInView ? getAnimate() : getInitial()}
      transition={{
        duration: 0.8,
        delay,
        ease: [0.21, 0.47, 0.32, 0.98]
      }}
      style={{ transformStyle: 'preserve-3d', perspective: '1000px' }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

interface StaggerContainerProps {
  children: ReactNode;
  className?: string;
  staggerDelay?: number;
}

export const StaggerContainer = ({
  children,
  className = '',
  staggerDelay = 0.1
}: StaggerContainerProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      variants={{
        hidden: {},
        visible: {
          transition: {
            staggerChildren: staggerDelay
          }
        }
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

interface StaggerItemProps {
  children: ReactNode;
  className?: string;
  enable3D?: boolean;
}

export const StaggerItem = ({ children, className = '', enable3D = false }: StaggerItemProps) => {
  return (
    <motion.div
      variants={{
        hidden: { 
          opacity: 0, 
          y: 40,
          rotateX: enable3D ? 15 : 0,
          scale: enable3D ? 0.95 : 1
        },
        visible: { 
          opacity: 1, 
          y: 0,
          rotateX: 0,
          scale: 1,
          transition: {
            duration: 0.6,
            ease: [0.21, 0.47, 0.32, 0.98]
          }
        }
      }}
      style={{ transformStyle: 'preserve-3d' }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

interface ParallaxSectionProps {
  children: ReactNode;
  className?: string;
  speed?: number;
}

export const ParallaxSection = ({ children, className = '', speed = 0.5 }: ParallaxSectionProps) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start']
  });
  
  const y = useTransform(scrollYProgress, [0, 1], [100 * speed, -100 * speed]);
  
  return (
    <motion.div
      ref={ref}
      style={{ y }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

interface FloatingElementProps {
  children?: ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  distance?: number;
}

export const FloatingElement = ({
  children,
  className = '',
  delay = 0,
  duration = 6,
  distance = 20
}: FloatingElementProps) => {
  return (
    <motion.div
      animate={{
        y: [0, -distance, 0]
      }}
      transition={{
        duration,
        delay,
        repeat: Infinity,
        ease: 'easeInOut'
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

interface ScaleOnHoverProps {
  children: ReactNode;
  className?: string;
  scale?: number;
}

export const ScaleOnHover = ({
  children,
  className = '',
  scale = 1.05
}: ScaleOnHoverProps) => {
  return (
    <motion.div
      whileHover={{ scale }}
      whileTap={{ scale: 0.98 }}
      transition={{ type: 'spring', stiffness: 400, damping: 17 }}
      className={className}
    >
      {children}
    </motion.div>
  );
};
