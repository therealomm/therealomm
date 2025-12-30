import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { GraduationCap, MapPin, Target, Code } from "lucide-react";

const AboutSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  const stats = [
    { icon: GraduationCap, label: "Education", value: "B.Tech CSE", color: "from-violet-500 to-purple-500" },
    { icon: MapPin, label: "Location", value: "Pune, India", color: "from-pink-500 to-rose-500" },
    { icon: Code, label: "Focus", value: "Full Stack", color: "from-blue-500 to-cyan-500" },
    { icon: Target, label: "Goal", value: "Innovation", color: "from-orange-500 to-amber-500" },
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
            className="text-primary text-sm tracking-wider uppercase font-medium"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.2 }}
          >
            About Me
          </motion.span>
          <h2 className="text-3xl md:text-5xl font-bold mt-2 mb-4 font-display">
            Who <span className="text-gradient">I Am</span>
          </h2>
          <motion.div
            className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full"
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
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl blur-2xl" />
              
              {/* Main card */}
              <div className="relative glass rounded-2xl p-8 border border-border/50">
                {/* Corner accents */}
                <div className="absolute top-0 left-0 w-10 h-10 border-t-2 border-l-2 border-primary rounded-tl-2xl" />
                <div className="absolute top-0 right-0 w-10 h-10 border-t-2 border-r-2 border-accent rounded-tr-2xl" />
                <div className="absolute bottom-0 left-0 w-10 h-10 border-b-2 border-l-2 border-accent rounded-bl-2xl" />
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
                    className="w-24 h-24 mx-auto mb-6 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center"
                  >
                    <span className="text-4xl font-bold text-primary-foreground font-display">O</span>
                  </motion.div>
                  <motion.p
                    className="text-xl font-medium text-gradient font-display"
                    animate={{ opacity: [0.7, 1, 0.7] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    Building the Future
                  </motion.p>
                  <p className="text-muted-foreground mt-4 text-sm">
                    One project at a time
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right - Content */}
          <motion.div variants={itemVariants}>
            <motion.p
              className="text-muted-foreground text-lg leading-relaxed mb-6"
              variants={itemVariants}
            >
              I'm a <span className="text-primary font-semibold">passionate developer</span> pursuing 
              a B.Tech in Computer Science at MIT ADT University, Pune.
            </motion.p>
            <motion.p
              className="text-muted-foreground text-lg leading-relaxed mb-8"
              variants={itemVariants}
            >
              My interests span across <span className="text-primary font-semibold">web development</span>, 
              <span className="text-primary font-semibold"> machine learning</span>, and 
              <span className="text-primary font-semibold"> building creative solutions</span> that make a difference.
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
                  <div className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />
                  
                  <motion.div
                    whileHover={{ rotate: 360, scale: 1.2 }}
                    transition={{ duration: 0.5 }}
                  >
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
    </section>
  );
};

export default AboutSection;