import { useEffect, useRef, useState } from "react";
import { ExternalLink, Github, Shield, Brain, Lock, Gamepad2 } from "lucide-react";
import { Button } from "./ui/button";

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
    title: "PhishGuard",
    description:
      "AI-powered phishing detection system for emails and SMS using Machine Learning and Large Language Models.",
    tech: ["Python", "Flask", "React/Next.js", "MongoDB", "LLM"],
    icon: Shield,
    color: "from-cyan-500 to-blue-500",
    github: "https://github.com/therealomm",
  },
  {
    title: "Sentiment Analysis Using NLP",
    description:
      "Deep learning-based natural language processing system for sentiment classification and analysis.",
    tech: ["Python", "NLP", "Deep Learning", "TensorFlow"],
    icon: Brain,
    color: "from-purple-500 to-pink-500",
    github: "https://github.com/therealomm",
  },
  {
    title: "Image Based Steganography",
    description:
      "Secure data hiding tool that embeds secret messages within images using steganographic techniques.",
    tech: ["Python", "TKinter", "Cryptography"],
    icon: Lock,
    color: "from-green-500 to-emerald-500",
    github: "https://github.com/therealomm",
  },
  {
    title: "Egg Catcher Game",
    description:
      "Interactive desktop game built with Python and TKinter featuring engaging gameplay mechanics.",
    tech: ["Python", "TKinter", "Game Dev"],
    icon: Gamepad2,
    color: "from-orange-500 to-yellow-500",
    github: "https://github.com/therealomm",
  },
];

const ProjectsSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
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

  return (
    <section
      id="projects"
      ref={sectionRef}
      className="py-24 relative bg-secondary/20"
    >
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div
          className={`text-center mb-16 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <span className="font-mono text-primary text-sm tracking-wider uppercase">
            &lt;projects&gt;
          </span>
          <h2 className="text-3xl md:text-5xl font-bold mt-2 mb-4">
            Featured <span className="text-gradient">Work</span>
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className={`group relative transition-all duration-700 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div className="glass p-6 rounded-xl h-full hover:border-primary/50 transition-all duration-300 relative overflow-hidden">
                {/* Gradient overlay on hover */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}
                />

                {/* Icon */}
                <div
                  className={`w-14 h-14 rounded-xl bg-gradient-to-br ${project.color} p-3 mb-4 group-hover:scale-110 transition-transform duration-300`}
                >
                  <project.icon className="w-full h-full text-white" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {project.description}
                </p>

                {/* Tech stack */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-secondary text-xs font-mono text-muted-foreground rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex gap-3">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button variant="outline" size="sm">
                        <Github className="w-4 h-4" />
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
                      <Button variant="cyber" size="sm">
                        <ExternalLink className="w-4 h-4" />
                        Demo
                      </Button>
                    </a>
                  )}
                </div>

                {/* Corner accent */}
                <div className="absolute top-0 right-0 w-16 h-16 overflow-hidden">
                  <div
                    className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${project.color} opacity-20 -translate-y-16 translate-x-16 rotate-45 group-hover:scale-150 transition-transform duration-500`}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View more */}
        <div
          className={`text-center mt-12 transition-all duration-700 delay-500 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <a
            href="https://github.com/therealomm"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button variant="cyber" size="lg">
              <Github className="w-5 h-5" />
              View All Projects on GitHub
            </Button>
          </a>
        </div>
      </div>

      {/* Closing tag */}
      <div
        className={`text-center mt-16 transition-all duration-700 delay-500 ${
          isVisible ? "opacity-100" : "opacity-0"
        }`}
      >
        <span className="font-mono text-primary/50 text-sm">
          &lt;/projects&gt;
        </span>
      </div>
    </section>
  );
};

export default ProjectsSection;
