import { motion } from "framer-motion";

interface GlitchTextProps {
  children: string;
  className?: string;
}

const GlitchText = ({ children, className = "" }: GlitchTextProps) => {
  return (
    <motion.span
      className={`relative inline-block ${className}`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      whileHover="hover"
    >
      <span className="relative z-10">{children}</span>
      
      {/* Glitch layers */}
      <motion.span
        className="absolute top-0 left-0 -z-10 text-primary/80"
        variants={{
          hover: {
            x: [0, -3, 3, -3, 0],
            opacity: [0, 1, 1, 1, 0],
            transition: {
              duration: 0.3,
              repeat: Infinity,
              repeatType: "reverse" as const,
            },
          },
        }}
        aria-hidden
      >
        {children}
      </motion.span>
      
      <motion.span
        className="absolute top-0 left-0 -z-10 text-cyan-400/80"
        variants={{
          hover: {
            x: [0, 3, -3, 3, 0],
            opacity: [0, 1, 1, 1, 0],
            transition: {
              duration: 0.3,
              repeat: Infinity,
              repeatType: "reverse" as const,
              delay: 0.05,
            },
          },
        }}
        aria-hidden
      >
        {children}
      </motion.span>
    </motion.span>
  );
};

export default GlitchText;
