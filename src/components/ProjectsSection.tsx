import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ExternalLink, Github, Brain, Lock, Gamepad2, Globe } from "lucide-react";
import { Button } from "./ui/button";
import AnimatedCard from "./AnimatedCard";

interface Project {
  title: string;
  description: string;
  tech: string[];
  icon: React.ElementType;
  color: string;
  github?: string;
  demo?: string;
}

const projects: Project[] = [
  {
    title: "Smart Detection App",
    description:
      "AI-powered detection system using Machine Learning and Large Language Models for intelligent classification.",
    tech: ["Python", "Flask", "React/Next.js", "MongoDB", "LLM"],
    icon: Globe,
    color: "from-violet-500 to-purple-500",
    github: "https://github.com/therealomm",
  },
  {
    title: "Sentiment Analysis Using NLP",
    description:
      "Deep learning-based natural language processing system for sentiment classification and analysis.",
    tech: ["Python", "NLP", "Deep Learning", "TensorFlow"],
    icon: Brain,
    color: "from-pink-500 to-rose-500",
    github: "https://github.com/therealomm",
  },
  {
    title: "Image Based Steganography",
    description:
      "Secure data hiding tool that embeds secret messages within images using advanced techniques.",
    tech: ["Python", "TKinter", "Cryptography"],
    icon: Lock,
    color: "from-blue-500 to-cyan-500",
    github: "https://github.com/therealomm",
  },
  {
    title: "Egg Catcher Game",
    description:
      "Interactive desktop game built with Python and TKinter featuring engaging gameplay mechanics.",
    tech: ["Python", "TKinter", "Game Dev"],
    icon: Gamepad2,
    color: "from-orange-500 to-amber-500",
    github: "https://github.com/therealomm",
  },
];

const ProjectsSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

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
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <section
      id="projects"
      ref={sectionRef}
      className="py-24 relative bg-secondary/20 overflow-hidden"
    >
      {/* Background effects */}
      <motion.div
        className="absolute top-1/4 right-0 w-[400px] h-[400px] bg-primary/10 rounded-full blur-[100px]"
        animate={{
          x: [50, 0, 50],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{ duration: 10, repeat: Infinity }}
      />

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="text-primary text-sm tracking-wider uppercase font-medium">
            Projects
          </span>
          <h2 className="text-3xl md:text-5xl font-bold mt-2 mb-4 font-display">
            Featured <span className="text-gradient">Work</span>
          </h2>
          <motion.div
            className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full"
            initial={{ scaleX: 0 }}
            animate={isInView ? { scaleX: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          />
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          className="grid md:grid-cols-2 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              variants={itemVariants}
              className="group"
            >
              <AnimatedCard>
                <div className="glass p-6 rounded-xl h-full hover:border-primary/50 transition-all duration-300 relative overflow-hidden">
                  {/* Animated gradient background */}
                  <motion.div
                    className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
                  />

                  {/* Glowing line on top */}
                  <motion.div
                    className={`absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r ${project.color}`}
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    transition={{ duration: 0.8, delay: index * 0.1 }}
                  />

                  {/* Icon with animation */}
                  <motion.div
                    className={`w-14 h-14 rounded-xl bg-gradient-to-br ${project.color} p-3 mb-4 relative`}
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ duration: 0.3 }}
                  >
                    <project.icon className="w-full h-full text-white" />
                    {/* Icon glow */}
                    <div className={`absolute inset-0 rounded-xl bg-gradient-to-br ${project.color} blur-lg opacity-50`} />
                  </motion.div>

                  {/* Content */}
                  <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors relative z-10 font-display">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground mb-4 leading-relaxed relative z-10">
                    {project.description}
                  </p>

                  {/* Tech stack */}
                  <div className="flex flex-wrap gap-2 mb-6 relative z-10">
                    {project.tech.map((tech, techIndex) => (
                      <motion.span
                        key={tech}
                        className="px-3 py-1 bg-secondary text-xs text-muted-foreground rounded-full border border-border"
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ delay: techIndex * 0.05 }}
                        whileHover={{ scale: 1.05, borderColor: "hsl(var(--primary) / 0.5)" }}
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>

                  {/* Links */}
                  <div className="flex gap-3 relative z-10">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Button variant="outline" size="sm" className="group/btn">
                          <Github className="w-4 h-4 group-hover/btn:rotate-12 transition-transform" />
                          Code
                        </Button>
                      </a>
                    )}
                    {project.demo && (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Button variant="default" size="sm" className="group/btn">
                          <ExternalLink className="w-4 h-4 group-hover/btn:rotate-12 transition-transform" />
                          Demo
                        </Button>
                      </a>
                    )}
                  </div>

                  {/* Decorative corner */}
                  <div className="absolute top-0 right-0 w-20 h-20 overflow-hidden">
                    <motion.div
                      className={`absolute top-0 right-0 w-40 h-40 bg-gradient-to-br ${project.color} opacity-10 -translate-y-20 translate-x-20 rotate-45`}
                      whileHover={{ scale: 2 }}
                      transition={{ duration: 0.5 }}
                    />
                  </div>
                </div>
              </AnimatedCard>
            </motion.div>
          ))}
        </motion.div>

        {/* View more */}
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <a
            href="https://github.com/therealomm"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button variant="default" size="lg" className="group">
              <motion.span
                className="flex items-center gap-2"
                whileHover={{ scale: 1.05 }}
              >
                <Github className="w-5 h-5 group-hover:rotate-12 transition-transform" />
                View All Projects on GitHub
              </motion.span>
            </Button>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;