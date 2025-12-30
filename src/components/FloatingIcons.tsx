import { motion } from "framer-motion";
import { Shield, Lock, Key, Fingerprint, Eye, Wifi, Server, Database } from "lucide-react";

const icons = [
  { Icon: Shield, delay: 0 },
  { Icon: Lock, delay: 0.2 },
  { Icon: Key, delay: 0.4 },
  { Icon: Fingerprint, delay: 0.6 },
  { Icon: Eye, delay: 0.8 },
  { Icon: Wifi, delay: 1 },
  { Icon: Server, delay: 1.2 },
  { Icon: Database, delay: 1.4 },
];

const FloatingIcons = () => {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden -z-5">
      {icons.map(({ Icon, delay }, index) => {
        const randomX = Math.random() * 100;
        const randomY = Math.random() * 100;
        const size = 20 + Math.random() * 20;
        
        return (
          <motion.div
            key={index}
            className="absolute text-primary/10"
            style={{
              left: `${randomX}%`,
              top: `${randomY}%`,
            }}
            initial={{ opacity: 0, scale: 0 }}
            animate={{
              opacity: [0.05, 0.15, 0.05],
              scale: [1, 1.2, 1],
              y: [0, -30, 0],
              rotate: [0, 10, -10, 0],
            }}
            transition={{
              duration: 8 + Math.random() * 4,
              delay,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <Icon size={size} />
          </motion.div>
        );
      })}
    </div>
  );
};

export default FloatingIcons;
