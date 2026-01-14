import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { ReactNode, useRef } from 'react';

interface Card3DProps {
  children: ReactNode;
  className?: string;
  depth?: number;
  glare?: boolean;
  perspective?: number;
}

export const Card3D = ({ 
  children, 
  className = '', 
  depth = 20,
  glare = true,
  perspective = 1000
}: Card3DProps) => {
  const ref = useRef<HTMLDivElement>(null);
  
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  
  const springConfig = { stiffness: 150, damping: 15 };
  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [depth, -depth]), springConfig);
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-depth, depth]), springConfig);
  
  const glareX = useTransform(x, [-0.5, 0.5], [0, 100]);
  const glareY = useTransform(y, [-0.5, 0.5], [0, 100]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    
    const rect = ref.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    
    const mouseX = (e.clientX - centerX) / rect.width;
    const mouseY = (e.clientY - centerY) / rect.height;
    
    x.set(mouseX);
    y.set(mouseY);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      className={`relative ${className}`}
      style={{
        perspective,
        transformStyle: 'preserve-3d',
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <motion.div
        style={{
          rotateX,
          rotateY,
          transformStyle: 'preserve-3d',
        }}
        className="relative w-full h-full"
      >
        {children}
        
        {glare && (
          <motion.div
            className="absolute inset-0 pointer-events-none rounded-inherit overflow-hidden"
            style={{
              background: `radial-gradient(circle at ${glareX}% ${glareY}%, rgba(255,255,255,0.15) 0%, transparent 50%)`,
              borderRadius: 'inherit',
            }}
          />
        )}
      </motion.div>
    </motion.div>
  );
};

interface ParallaxCard3DProps {
  children: ReactNode;
  className?: string;
  layers?: number;
}

export const ParallaxCard3D = ({ 
  children, 
  className = '',
  layers = 3
}: ParallaxCard3DProps) => {
  const ref = useRef<HTMLDivElement>(null);
  
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  
  const springConfig = { stiffness: 100, damping: 20 };
  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [15, -15]), springConfig);
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-15, 15]), springConfig);
  
  const layerTransforms = Array.from({ length: layers }, (_, i) => ({
    translateZ: useSpring(useTransform(x, [-0.5, 0.5], [-(i + 1) * 20, (i + 1) * 20]), springConfig),
    translateX: useSpring(useTransform(x, [-0.5, 0.5], [-(i + 1) * 10, (i + 1) * 10]), springConfig),
  }));

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    
    const rect = ref.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    
    x.set((e.clientX - centerX) / rect.width);
    y.set((e.clientY - centerY) / rect.height);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      className={`relative ${className}`}
      style={{ perspective: 1000 }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <motion.div
        style={{
          rotateX,
          rotateY,
          transformStyle: 'preserve-3d',
        }}
        className="relative w-full h-full"
      >
        {children}
      </motion.div>
    </motion.div>
  );
};

interface TiltCardProps {
  children: ReactNode;
  className?: string;
  maxTilt?: number;
  scale?: number;
  speed?: number;
}

export const TiltCard = ({ 
  children, 
  className = '',
  maxTilt = 20,
  scale = 1.05,
  speed = 400
}: TiltCardProps) => {
  const ref = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    
    const rect = ref.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    const rotateX = ((y - centerY) / centerY) * -maxTilt;
    const rotateY = ((x - centerX) / centerX) * maxTilt;
    
    ref.current.style.transform = `
      perspective(1000px) 
      rotateX(${rotateX}deg) 
      rotateY(${rotateY}deg) 
      scale3d(${scale}, ${scale}, ${scale})
    `;
  };

  const handleMouseLeave = () => {
    if (!ref.current) return;
    ref.current.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)';
  };

  return (
    <div
      ref={ref}
      className={`${className}`}
      style={{
        transformStyle: 'preserve-3d',
        transition: `transform ${speed}ms cubic-bezier(0.03, 0.98, 0.52, 0.99)`,
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {children}
    </div>
  );
};

export default Card3D;
