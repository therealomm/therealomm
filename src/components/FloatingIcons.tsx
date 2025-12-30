import { motion } from "framer-motion";
import { Shield, Lock, Key, Bug, Wifi, Server } from "lucide-react";

const icons = [
  { Icon: Shield, delay: 0 },
  { Icon: Lock, delay: 0.5 },
  { Icon: Key, delay: 1 },
  { Icon: Bug, delay: 1.5 },
  { Icon: Wifi, delay: 2 },
  { Icon: Server, delay: 2.5 },
];

const FloatingIcons = () => {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {icons.map(({ Icon, delay }, index) => (
        <motion.div
          key={index}
          className="absolute text-primary/10"
          initial={{
            x: Math.random() * (typeof window !== "undefined" ? window.innerWidth : 1000),
            y: Math.random() * (typeof window !== "undefined" ? window.innerHeight : 800),
          }}
          animate={{
            x: [null, Math.random() * 200 - 100],
            y: [null, Math.random() * 200 - 100],
          }}
          transition={{
            duration: 20 + Math.random() * 10,
            repeat: Infinity,
            repeatType: "reverse",
            delay,
            ease: "easeInOut",
          }}
        >
          <Icon size={40 + Math.random() * 30} />
        </motion.div>
      ))}
    </div>
  );
};

export default FloatingIcons;
