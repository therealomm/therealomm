import { useEffect, useRef, useState } from "react";
import { Briefcase, Award, Calendar } from "lucide-react";

interface Experience {
  title: string;
  company: string;
  period: string;
  type: "work" | "certification";
  description: string;
  details?: string[];
}

const experiences: Experience[] = [
  {
    title: "Cybersecurity Intern",
    company: "Prodigy Infotech",
    period: "Apr 2024 – May 2024",
    type: "work",
    description:
      "Gained practical exposure to cybersecurity principles, tools, and practices.",
    details: [
      "Hands-on experience with security tools",
      "Real-world vulnerability assessment",
      "CIN: PIT/APR24/5933",
    ],
  },
  {
    title: "Zero Trust Cloud Security",
    company: "Zscaler (AICTE)",
    period: "Jan 2024 – Mar 2024",
    type: "work",
    description:
      "Virtual internship focused on Zero Trust Architecture and cloud security.",
  },
  {
    title: "Network Security Associate",
    company: "Fortinet (AICTE)",
    period: "Sep 2023 – Nov 2023",
    type: "work",
    description:
      "Comprehensive training on network security fundamentals and Fortinet solutions.",
  },
  {
    title: "Cyber Security Internship",
    company: "Palo Alto Networks (AICTE)",
    period: "May 2023 – Jun 2023",
    type: "work",
    description:
      "Foundation in cybersecurity concepts and Palo Alto security solutions.",
  },
];

const certifications = [
  { name: "Zscaler Zero Trust Cyber Associate (ZTCA)", issuer: "Zscaler" },
  { name: "Ethical Hacking Essentials", issuer: "EC-Council CodeRed" },
  { name: "Fundamentals of Digital Marketing", issuer: "Google" },
  { name: "The Foundations of Cyber Security", issuer: "Coursera" },
  { name: "Microsoft Gen AI Foundations", issuer: "Upgrad" },
];

const ExperienceSection = () => {
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

  return (
    <section
      id="experience"
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
            &lt;experience&gt;
          </span>
          <h2 className="text-3xl md:text-5xl font-bold mt-2 mb-4">
            Professional <span className="text-gradient">Journey</span>
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Timeline */}
          <div className="lg:col-span-2">
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-4 md:left-8 top-0 bottom-0 w-0.5 bg-primary/30" />

              {experiences.map((exp, index) => (
                <div
                  key={index}
                  className={`relative pl-12 md:pl-20 pb-10 transition-all duration-700 ${
                    isVisible
                      ? "opacity-100 translate-x-0"
                      : "opacity-0 -translate-x-10"
                  }`}
                  style={{ transitionDelay: `${index * 150}ms` }}
                >
                  {/* Timeline dot */}
                  <div className="absolute left-2 md:left-6 w-4 h-4 bg-primary rounded-full border-4 border-background glow" />

                  <div className="glass p-6 rounded-xl hover:border-primary/50 transition-all duration-300 group">
                    <div className="flex flex-wrap items-start justify-between gap-2 mb-3">
                      <div>
                        <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                          {exp.title}
                        </h3>
                        <p className="text-primary font-medium">{exp.company}</p>
                      </div>
                      <span className="flex items-center gap-1 text-muted-foreground text-sm font-mono bg-secondary px-3 py-1 rounded-full">
                        <Calendar className="w-3 h-3" />
                        {exp.period}
                      </span>
                    </div>
                    <p className="text-muted-foreground">{exp.description}</p>
                    {exp.details && (
                      <ul className="mt-3 space-y-1">
                        {exp.details.map((detail, i) => (
                          <li
                            key={i}
                            className="text-muted-foreground text-sm flex items-center gap-2"
                          >
                            <span className="w-1 h-1 bg-primary rounded-full" />
                            {detail}
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div
            className={`transition-all duration-700 delay-300 ${
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 translate-x-10"
            }`}
          >
            <div className="glass p-6 rounded-xl sticky top-24">
              <div className="flex items-center gap-2 mb-6">
                <Award className="w-6 h-6 text-primary" />
                <h3 className="text-xl font-bold">Certifications</h3>
              </div>
              <div className="space-y-4">
                {certifications.map((cert, index) => (
                  <div
                    key={index}
                    className="p-4 bg-secondary/50 rounded-lg border border-transparent hover:border-primary/30 transition-all duration-300 group"
                  >
                    <p className="font-medium text-foreground group-hover:text-primary transition-colors text-sm">
                      {cert.name}
                    </p>
                    <p className="text-muted-foreground text-xs mt-1">
                      {cert.issuer}
                    </p>
                  </div>
                ))}
              </div>
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
        <span className="font-mono text-primary/50 text-sm">
          &lt;/experience&gt;
        </span>
      </div>
    </section>
  );
};

export default ExperienceSection;
