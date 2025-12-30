import { useEffect, useRef, useState } from "react";
import {
  Shield,
  Network,
  Search,
  Code,
  Brain,
  Zap,
  FileText,
  TrendingUp,
  Lightbulb,
  MessageSquare,
  BarChart3,
  CheckCircle,
} from "lucide-react";

interface Skill {
  name: string;
  icon: React.ElementType;
  level: number;
  category: "technical" | "soft";
}

const skills: Skill[] = [
  { name: "Cyber Security", icon: Shield, level: 90, category: "technical" },
  { name: "Network Security", icon: Network, level: 85, category: "technical" },
  { name: "Vulnerability Analysis", icon: Search, level: 80, category: "technical" },
  { name: "Java & Python", icon: Code, level: 75, category: "technical" },
  { name: "Machine Learning", icon: Brain, level: 70, category: "technical" },
  { name: "AI Tools & Automation", icon: Zap, level: 85, category: "technical" },
  { name: "Technical Documentation", icon: FileText, level: 80, category: "soft" },
  { name: "Analytical Thinking", icon: TrendingUp, level: 90, category: "soft" },
  { name: "Problem Solving", icon: Lightbulb, level: 88, category: "soft" },
  { name: "Communication", icon: MessageSquare, level: 85, category: "soft" },
  { name: "Business Analytics", icon: BarChart3, level: 75, category: "soft" },
  { name: "Decision Making", icon: CheckCircle, level: 82, category: "soft" },
];

const SkillsSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const technicalSkills = skills.filter((s) => s.category === "technical");
  const softSkills = skills.filter((s) => s.category === "soft");

  return (
    <section id="skills" ref={sectionRef} className="py-24 relative">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div
          className={`text-center mb-16 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <span className="font-mono text-primary text-sm tracking-wider uppercase">
            &lt;skills&gt;
          </span>
          <h2 className="text-3xl md:text-5xl font-bold mt-2 mb-4">
            My <span className="text-gradient">Arsenal</span>
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Technical Skills */}
          <div
            className={`transition-all duration-700 delay-200 ${
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 -translate-x-10"
            }`}
          >
            <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
              <Code className="w-5 h-5 text-primary" />
              Technical Skills
            </h3>
            <div className="space-y-4">
              {technicalSkills.map((skill, index) => (
                <div
                  key={skill.name}
                  className="glass p-4 rounded-xl group hover:border-primary/50 transition-all duration-300"
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-3">
                      <skill.icon className="w-5 h-5 text-primary group-hover:scale-110 transition-transform" />
                      <span className="font-medium">{skill.name}</span>
                    </div>
                    <span className="font-mono text-primary text-sm">
                      {skill.level}%
                    </span>
                  </div>
                  <div className="h-2 bg-secondary rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-primary to-accent rounded-full transition-all duration-1000 ease-out"
                      style={{
                        width: isVisible ? `${skill.level}%` : "0%",
                        transitionDelay: `${index * 100 + 300}ms`,
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Soft Skills */}
          <div
            className={`transition-all duration-700 delay-300 ${
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 translate-x-10"
            }`}
          >
            <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
              <Brain className="w-5 h-5 text-primary" />
              Soft Skills
            </h3>
            <div className="grid grid-cols-2 gap-4">
              {softSkills.map((skill, index) => (
                <div
                  key={skill.name}
                  className="glass p-4 rounded-xl group hover:border-primary/50 transition-all duration-300 text-center"
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <div className="relative w-20 h-20 mx-auto mb-3">
                    {/* Circular progress */}
                    <svg className="w-full h-full -rotate-90">
                      <circle
                        cx="40"
                        cy="40"
                        r="36"
                        className="fill-none stroke-secondary"
                        strokeWidth="4"
                      />
                      <circle
                        cx="40"
                        cy="40"
                        r="36"
                        className="fill-none stroke-primary transition-all duration-1000 ease-out"
                        strokeWidth="4"
                        strokeLinecap="round"
                        strokeDasharray={`${2 * Math.PI * 36}`}
                        strokeDashoffset={
                          isVisible
                            ? 2 * Math.PI * 36 * (1 - skill.level / 100)
                            : 2 * Math.PI * 36
                        }
                        style={{ transitionDelay: `${index * 100 + 300}ms` }}
                      />
                    </svg>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <skill.icon className="w-6 h-6 text-primary group-hover:scale-110 transition-transform" />
                    </div>
                  </div>
                  <p className="font-medium text-sm">{skill.name}</p>
                  <p className="font-mono text-primary text-xs">{skill.level}%</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Closing tag */}
      <div
        className={`text-center mt-16 transition-all duration-700 delay-500 ${
          isVisible ? "opacity-100" : "opacity-0"
        }`}
      >
        <span className="font-mono text-primary/50 text-sm">&lt;/skills&gt;</span>
      </div>
    </section>
  );
};

export default SkillsSection;
