import { motion } from 'framer-motion';

interface Scene3DLoaderProps {
  className?: string;
}

const Scene3DLoader = ({ className = '' }: Scene3DLoaderProps) => {
  return (
    <div className={`flex items-center justify-center ${className}`}>
      <div className="relative">
        {/* Outer rotating ring */}
        <motion.div
          className="w-16 h-16 rounded-full border-2 border-primary/20"
          animate={{ rotate: 360 }}
          transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
        >
          <motion.div
            className="absolute top-0 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-primary"
            animate={{ scale: [1, 1.5, 1] }}
            transition={{ duration: 1, repeat: Infinity }}
          />
        </motion.div>
        
        {/* Middle ring */}
        <motion.div
          className="absolute inset-2 rounded-full border-2 border-accent/30"
          animate={{ rotate: -360 }}
          transition={{ duration: 1.5, repeat: Infinity, ease: 'linear' }}
        >
          <motion.div
            className="absolute top-0 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-accent"
          />
        </motion.div>
        
        {/* Inner pulsing core */}
        <motion.div
          className="absolute inset-4 rounded-full bg-gradient-to-br from-primary to-accent"
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.5, 1, 0.5]
          }}
          transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
        />
        
        {/* Orbiting particles */}
        {[0, 1, 2].map((i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 rounded-full bg-accent"
            style={{
              top: '50%',
              left: '50%',
            }}
            animate={{
              x: [0, Math.cos((i * 120 * Math.PI) / 180) * 30, 0],
              y: [0, Math.sin((i * 120 * Math.PI) / 180) * 30, 0],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              delay: i * 0.3,
              ease: 'easeInOut',
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default Scene3DLoader;
