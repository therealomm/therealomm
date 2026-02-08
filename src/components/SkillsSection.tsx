import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  Shield,
  Network,
  Search,
  Brain,
  Zap,
  FileText,
  TrendingUp,
  Lightbulb,
  MessageSquare,
  BarChart3,
  CheckCircle,
  Code,
  Wifi,
  Target,
  Bug,
  Radar,
  HardDrive,
  Activity,
  Database,
  Cloud,
  Github,
  Figma,
  Palette,
  Image,
  Wrench,
} from "lucide-react";

interface Skill {
  name: string;
  icon: React.ElementType;
  level: number;
  category: "technical" | "soft";
}

interface Tool {
  name: string;
  icon: React.ElementType;
}

const skills: Skill[] = [
  { name: "Cyber Security", icon: Shield, level: 85, category: "technical" },
  { name: "Network Security", icon: Network, level: 80, category: "technical" },
  { name: "Vulnerability Analysis", icon: Search, level: 75, category: "technical" },
  { name: "Python", icon: Code, level: 80, category: "technical" },
  { name: "Machine Learning", icon: Brain, level: 70, category: "technical" },
  { name: "AI Tools & Automation", icon: Zap, level: 85, category: "technical" },
  { name: "Technical Documentation", icon: FileText, level: 80, category: "soft" },
  { name: "Analytical Thinking", icon: TrendingUp, level: 90, category: "soft" },
  { name: "Problem Solving", icon: Lightbulb, level: 88, category: "soft" },
  { name: "Communication", icon: MessageSquare, level: 85, category: "soft" },
  { name: "Business Analytics", icon: BarChart3, level: 75, category: "soft" },
  { name: "Decision Making", icon: CheckCircle, level: 82, category: "soft" },
];

const cyberTools: Tool[] = [
  { name: "Wireshark", icon: Wifi },
  { name: "Nmap", icon: Target },
  { name: "Metasploit", icon: Bug },
  { name: "Burp Suite", icon: Radar },
  { name: "Autopsy", icon: Search },
  { name: "Volatility", icon: Activity },
  { name: "FTK Imager", icon: HardDrive },
  { name: "Splunk", icon: Database },
  { name: "AWS Sentinel", icon: Shield },
];

const otherTools: Tool[] = [
  { name: "AWS", icon: Cloud },
  { name: "GitHub", icon: Github },
  { name: "Figma", icon: Figma },
  { name: "Canva", icon: Palette },
  { name: "GIMP", icon: Image },
];

const SkillsSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  const technicalSkills = skills.filter((s) => s.category === "technical");
  const softSkills = skills.filter((s) => s.category === "soft");

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
  };

  return (
    <section id="skills" ref={sectionRef} className="py-24 relative overflow-hidden">
      {/* Background effects */}
      <motion.div
        className="absolute bottom-0 left-1/4 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[150px]"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{ duration: 8, repeat: Infinity }}
      />

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="text-primary text-sm tracking-wider uppercase font-medium">Skills</span>
          <h2 className="text-3xl md:text-5xl font-bold mt-2 mb-4 font-display">
            My <span className="text-gradient">Expertise</span>
          </h2>
          <motion.div
            className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full"
            initial={{ scaleX: 0 }}
            animate={isInView ? { scaleX: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Technical Skills */}
          <motion.div variants={containerVariants} initial="hidden" animate={isInView ? "visible" : "hidden"}>
            <h3 className="text-xl font-bold mb-6 flex items-center gap-2 font-display">
              <Shield className="w-5 h-5 text-primary" />
              Technical Skills
            </h3>
            <div className="space-y-4">
              {technicalSkills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  className="glass p-4 rounded-xl group hover:border-primary/50 transition-all duration-300 relative overflow-hidden"
                  variants={itemVariants}
                  whileHover={{ scale: 1.02, x: 10 }}
                >
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-primary/10 to-transparent"
                    initial={{ x: "-100%" }}
                    whileHover={{ x: "0%" }}
                    transition={{ duration: 0.3 }}
                  />
                  <div className="flex items-center justify-between mb-2 relative z-10">
                    <div className="flex items-center gap-3">
                      <motion.div whileHover={{ rotate: 360, scale: 1.2 }} transition={{ duration: 0.5 }}>
                        <skill.icon className="w-5 h-5 text-primary" />
                      </motion.div>
                      <span className="font-medium">{skill.name}</span>
                    </div>
                    <motion.span
                      className="text-primary text-sm"
                      initial={{ opacity: 0 }}
                      animate={isInView ? { opacity: 1 } : {}}
                      transition={{ delay: 0.5 + index * 0.1 }}
                    >
                      {skill.level}%
                    </motion.span>
                  </div>
                  <div className="h-2 bg-secondary rounded-full overflow-hidden relative z-10">
                    <motion.div
                      className="h-full rounded-full relative"
                      initial={{ width: 0 }}
                      animate={isInView ? { width: `${skill.level}%` } : {}}
                      transition={{ duration: 1, delay: 0.3 + index * 0.1, ease: "easeOut" }}
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-primary via-accent to-primary bg-[length:200%_100%] animate-shimmer" />
                    </motion.div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Soft Skills */}
          <motion.div variants={containerVariants} initial="hidden" animate={isInView ? "visible" : "hidden"}>
            <h3 className="text-xl font-bold mb-6 flex items-center gap-2 font-display">
              <Brain className="w-5 h-5 text-primary" />
              Soft Skills
            </h3>
            <div className="grid grid-cols-2 gap-4">
              {softSkills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  className="glass p-4 rounded-xl group hover:border-primary/50 transition-all duration-300 text-center relative overflow-hidden"
                  variants={itemVariants}
                  whileHover={{ scale: 1.05, y: -5 }}
                >
                  <div className="relative w-20 h-20 mx-auto mb-3">
                    <svg className="w-full h-full -rotate-90">
                      <circle cx="40" cy="40" r="36" className="fill-none stroke-secondary" strokeWidth="4" />
                      <motion.circle
                        cx="40"
                        cy="40"
                        r="36"
                        className="fill-none stroke-primary"
                        strokeWidth="4"
                        strokeLinecap="round"
                        strokeDasharray={2 * Math.PI * 36}
                        initial={{ strokeDashoffset: 2 * Math.PI * 36 }}
                        animate={isInView ? { strokeDashoffset: 2 * Math.PI * 36 * (1 - skill.level / 100) } : {}}
                        transition={{ duration: 1.5, delay: 0.3 + index * 0.1, ease: "easeOut" }}
                        style={{
                          filter: "drop-shadow(0 0 6px hsl(var(--primary)))",
                        }}
                      />
                    </svg>
                    <motion.div
                      className="absolute inset-0 flex items-center justify-center"
                      whileHover={{ rotate: 360, scale: 1.2 }}
                      transition={{ duration: 0.5 }}
                    >
                      <skill.icon className="w-6 h-6 text-primary" />
                    </motion.div>
                    <motion.div
                      className="absolute inset-0 rounded-full bg-primary/20 blur-lg"
                      animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    />
                  </div>
                  <p className="font-medium text-sm">{skill.name}</p>
                  <motion.p
                    className="text-primary text-xs"
                    initial={{ opacity: 0 }}
                    animate={isInView ? { opacity: 1 } : {}}
                    transition={{ delay: 0.5 + index * 0.1 }}
                  >
                    {skill.level}%
                  </motion.p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Tools Section */}
        <motion.div
          className="mt-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <h3 className="text-2xl font-bold mb-8 flex items-center gap-2 font-display">
            <Wrench className="w-6 h-6 text-primary" />
            Tools
          </h3>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Cybersecurity Tools */}
            <motion.div variants={containerVariants} initial="hidden" animate={isInView ? "visible" : "hidden"}>
              <h4 className="text-lg font-semibold mb-4 flex items-center gap-2 text-primary/90">
                <Shield className="w-4 h-4" />
                Cybersecurity Tools
              </h4>
              <div className="grid grid-cols-3 gap-3">
                {cyberTools.map((tool, index) => (
                  <motion.div
                    key={tool.name}
                    className="glass p-4 rounded-xl group hover:border-primary/50 transition-all duration-300 text-center relative overflow-hidden"
                    variants={itemVariants}
                    whileHover={{ scale: 1.05, y: -5 }}
                  >
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100"
                      transition={{ duration: 0.3 }}
                    />
                    <motion.div
                      className="w-10 h-10 mx-auto mb-2 flex items-center justify-center"
                      whileHover={{ rotate: 360, scale: 1.2 }}
                      transition={{ duration: 0.5 }}
                    >
                      <tool.icon className="w-6 h-6 text-primary" />
                    </motion.div>
                    <p className="font-medium text-xs relative z-10">{tool.name}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Other Tools */}
            <motion.div variants={containerVariants} initial="hidden" animate={isInView ? "visible" : "hidden"}>
              <h4 className="text-lg font-semibold mb-4 flex items-center gap-2 text-primary/90">
                <Palette className="w-4 h-4" />
                Other Tools
              </h4>
              <div className="grid grid-cols-3 gap-3">
                {otherTools.map((tool, index) => (
                  <motion.div
                    key={tool.name}
                    className="glass p-4 rounded-xl group hover:border-primary/50 transition-all duration-300 text-center relative overflow-hidden"
                    variants={itemVariants}
                    whileHover={{ scale: 1.05, y: -5 }}
                  >
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-br from-accent/10 to-transparent opacity-0 group-hover:opacity-100"
                      transition={{ duration: 0.3 }}
                    />
                    <motion.div
                      className="w-10 h-10 mx-auto mb-2 flex items-center justify-center"
                      whileHover={{ rotate: 360, scale: 1.2 }}
                      transition={{ duration: 0.5 }}
                    >
                      <tool.icon className="w-6 h-6 text-primary" />
                    </motion.div>
                    <p className="font-medium text-xs relative z-10">{tool.name}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;
