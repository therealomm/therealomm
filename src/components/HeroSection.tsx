import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Github, Linkedin, Mail, FileText, Terminal } from "lucide-react";
import { Button } from "./ui/button";
import GlitchText from "./GlitchText";

const roles = [
  "Cybersecurity Enthusiast",
  "Network Security Specialist",
  "Zero Trust Architect",
  "Ethical Hacker",
];

const codeLines = [
  "$ initializing_security_protocols...",
  "$ scanning_vulnerabilities...",
  "$ encrypting_data_streams...",
  "$ establishing_zero_trust...",
  "$ system_secure ✓",
];

const HeroSection = () => {
  const [currentRole, setCurrentRole] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [currentCodeLine, setCurrentCodeLine] = useState(0);

  useEffect(() => {
    const role = roles[currentRole];
    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          if (displayText.length < role.length) {
            setDisplayText(role.slice(0, displayText.length + 1));
          } else {
            setTimeout(() => setIsDeleting(true), 2000);
          }
        } else {
          if (displayText.length > 0) {
            setDisplayText(displayText.slice(0, -1));
          } else {
            setIsDeleting(false);
            setCurrentRole((prev) => (prev + 1) % roles.length);
          }
        }
      },
      isDeleting ? 50 : 100
    );
    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, currentRole]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentCodeLine((prev) => (prev + 1) % codeLines.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const scrollToAbout = () => {
    document.querySelector("#about")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      {/* Animated gradient orbs */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[100px]"
          animate={{
            scale: [1, 1.2, 1],
            x: [0, 50, 0],
            y: [0, -30, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-cyan-500/10 rounded-full blur-[100px]"
          animate={{
            scale: [1.2, 1, 1.2],
            x: [0, -30, 0],
            y: [0, 50, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px]"
          animate={{
            scale: [1, 1.3, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      </div>

      {/* Scan line effect */}
      <motion.div
        className="absolute left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-primary/50 to-transparent"
        initial={{ top: "-100%" }}
        animate={{ top: "100%" }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "linear",
        }}
      />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Terminal-style intro with animation */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-6"
          >
            <div className="inline-flex items-center gap-2 font-mono text-primary/80 text-sm md:text-base bg-primary/10 px-4 py-2 rounded-full border border-primary/30 backdrop-blur-sm">
              <Terminal className="w-4 h-4" />
              <AnimatePresence mode="wait">
                <motion.span
                  key={currentCodeLine}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                >
                  {codeLines[currentCodeLine]}
                </motion.span>
              </AnimatePresence>
            </div>
          </motion.div>

          {/* Name with glitch effect */}
          <motion.h1
            className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <span className="text-foreground">Hi, I'm </span>
            <GlitchText className="text-gradient">Om Jagtap</GlitchText>
          </motion.h1>

          {/* Animated role */}
          <motion.div
            className="h-12 md:h-16 flex items-center justify-center mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <p className="text-xl md:text-3xl font-mono text-muted-foreground">
              {displayText}
              <motion.span
                className="inline-block w-0.5 h-6 md:h-8 bg-primary ml-1"
                animate={{ opacity: [1, 0, 1] }}
                transition={{ duration: 0.8, repeat: Infinity }}
              />
            </p>
          </motion.div>

          {/* Description */}
          <motion.p
            className="text-muted-foreground text-base md:text-lg max-w-2xl mx-auto mb-10 leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            B.Tech CSE student specializing in Cybersecurity & Forensics. 
            Passionate about securing digital systems through Zero Trust Architecture, 
            network security, and ethical hacking.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <Button
              variant="glow"
              size="lg"
              onClick={() =>
                document
                  .querySelector("#contact")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="group"
            >
              <motion.span
                className="flex items-center gap-2"
                whileHover={{ scale: 1.05 }}
              >
                <Mail className="w-5 h-5 group-hover:rotate-12 transition-transform" />
                Get In Touch
              </motion.span>
            </Button>
            <Button
              variant="outline"
              size="lg"
              onClick={() =>
                document
                  .querySelector("#projects")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="group"
            >
              <motion.span
                className="flex items-center gap-2"
                whileHover={{ scale: 1.05 }}
              >
                <FileText className="w-5 h-5 group-hover:rotate-12 transition-transform" />
                View Projects
              </motion.span>
            </Button>
          </motion.div>

          {/* Social Links */}
          <motion.div
            className="flex items-center justify-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1 }}
          >
            {[
              { href: "https://github.com/therealomm", icon: Github },
              { href: "https://www.linkedin.com/in/therealomm", icon: Linkedin },
              { href: "mailto:omjagtap21@gmail.com", icon: Mail },
            ].map(({ href, icon: Icon }, index) => (
              <motion.a
                key={href}
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                className="p-3 rounded-full border border-primary/30 text-muted-foreground hover:text-primary hover:border-primary hover:bg-primary/10 transition-all duration-300"
                whileHover={{ scale: 1.2, rotate: 10 }}
                whileTap={{ scale: 0.9 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1 + index * 0.1 }}
              >
                <Icon className="w-5 h-5" />
              </motion.a>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.button
        onClick={scrollToAbout}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-primary/60 hover:text-primary transition-colors duration-300"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <ChevronDown className="w-8 h-8" />
      </motion.button>
    </section>
  );
};

export default HeroSection;
