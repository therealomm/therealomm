import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { GraduationCap, MapPin, Shield, Target } from "lucide-react";

const AboutSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  const stats = [
    { icon: GraduationCap, label: "B.Tech CSE", value: "Cybersecurity", color: "from-cyan-500 to-blue-500" },
    { icon: MapPin, label: "Location", value: "Pune, India", color: "from-green-500 to-emerald-500" },
    { icon: Shield, label: "Focus", value: "Cyber Security & AI", color: "from-purple-500 to-pink-500" },
    { icon: Target, label: "Goal", value: "Offensive & Defensive Security", color: "from-orange-500 to-red-500" },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <section id="about" ref={sectionRef} className="py-24 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-full">
        <motion.div
          className="absolute top-1/2 left-0 w-[300px] h-[300px] bg-primary/10 rounded-full blur-[100px]"
          animate={{
            x: [0, 50, 0],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ duration: 8, repeat: Infinity }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <motion.span
            className="font-mono text-primary text-sm tracking-wider uppercase"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.2 }}
          >
            &lt;about&gt;
          </motion.span>
          <h2 className="text-3xl md:text-5xl font-bold mt-2 mb-4">
            Who <span className="text-gradient">I Am</span>
          </h2>
          <motion.div
            className="w-20 h-1 bg-primary mx-auto rounded-full"
            initial={{ scaleX: 0 }}
            animate={isInView ? { scaleX: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          />
        </motion.div>

        <motion.div
          className="grid lg:grid-cols-2 gap-12 items-center"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {/* Left - Visual */}
          <motion.div variants={itemVariants} className="relative">
            <div className="relative max-w-md mx-auto">
              {/* Outer glow */}
              <div className="absolute inset-0 bg-primary/20 rounded-2xl blur-2xl" />

              {/* Main card */}
              <div className="relative glass rounded-2xl p-8 border border-primary/30">
                {/* Corner accents */}
                <div className="absolute top-0 left-0 w-10 h-10 border-t-2 border-l-2 border-primary rounded-tl-2xl" />
                <div className="absolute top-0 right-0 w-10 h-10 border-t-2 border-r-2 border-primary rounded-tr-2xl" />
                <div className="absolute bottom-0 left-0 w-10 h-10 border-b-2 border-l-2 border-primary rounded-bl-2xl" />
                <div className="absolute bottom-0 right-0 w-10 h-10 border-b-2 border-r-2 border-primary rounded-br-2xl" />

                {/* Content */}
                <div className="text-center py-8">
                  <motion.div
                    animate={{
                      y: [0, -10, 0],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  >
                    <Shield className="w-24 h-24 mx-auto text-primary mb-6" />
                  </motion.div>
                  <motion.p
                    className="font-mono text-primary text-xl font-medium"
                    animate={{ opacity: [0.7, 1, 0.7] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    Securing the Digital World
                  </motion.p>
                  <p className="text-muted-foreground mt-4 text-sm">One vulnerability at a time</p>
                </div>

                {/* Dot pattern background */}
                <div
                  className="absolute inset-0 opacity-10 rounded-2xl overflow-hidden"
                  style={{
                    backgroundImage: `radial-gradient(circle at 2px 2px, hsl(var(--primary)) 1px, transparent 0)`,
                    backgroundSize: "24px 24px",
                  }}
                />
              </div>
            </div>
          </motion.div>

          {/* Right - Content */}
          <motion.div variants={itemVariants}>
            <motion.p className="text-muted-foreground text-lg leading-relaxed mb-6" variants={itemVariants}>
              I'm a <span className="text-primary font-semibold">Cybersecurity enthusiast</span> pursuing a B.Tech in
              Computer Science with a focus on{" "}
              <span className="text-primary font-semibold">Cybersecurity and Forensics</span> at MIT ADT University,
              Pune.
            </motion.p>
            <motion.p className="text-muted-foreground text-lg leading-relaxed mb-8" variants={itemVariants}>
              My expertise spans across <span className="text-primary font-semibold">network security</span>,
              <span className="text-primary font-semibold"> vulnerability analysis</span>, and
              <span className="text-primary font-semibold"> Zero Trust Architecture</span>. Currently preparing for
              CompTIA Security+ to strengthen my foundational security knowledge.
            </motion.p>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  className="glass p-4 rounded-xl group hover:border-primary/50 transition-all duration-300 relative overflow-hidden"
                  variants={itemVariants}
                  whileHover={{ scale: 1.02, y: -5 }}
                >
                  {/* Gradient background on hover */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}
                  />

                  <motion.div whileHover={{ rotate: 360, scale: 1.2 }} transition={{ duration: 0.5 }}>
                    <stat.icon className="w-6 h-6 text-primary mb-2" />
                  </motion.div>
                  <p className="text-muted-foreground text-sm relative z-10">{stat.label}</p>
                  <p className="text-foreground font-semibold relative z-10">{stat.value}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Closing tag */}
      <motion.div
        className="text-center mt-16"
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ delay: 0.8 }}
      >
        <span className="font-mono text-primary/50 text-sm">&lt;/about&gt;</span>
      </motion.div>
    </section>
  );
};

export default AboutSection;
