import { useEffect, useRef, useState } from "react";
import { Award, Calendar, ExternalLink } from "lucide-react";
import { Button } from "./ui/button";

interface Experience {
  title: string;
  company: string;
  companyLink?: string;
  period: string;
  type: "work" | "certification";
  description: string;
  details?: string[];
  verifyLink?: string;
  employmentType?: "full-time" | "part-time";
}

const experiences: Experience[] = [
  {
    title: "Project Intern",
    company: "Road2Tech",
    companyLink: "https://www.road2tech.in",
    period: "Dec 2024 – Dec 2025",
    type: "work",

    description:
      "Contributing to project development and implementation under senior guidance, supporting research, Reporting, documentation, and data analysis tasks.",
  },
  {
    title: "Cybersecurity Intern",
    company: "Prodigy Infotech",
    companyLink: "https://prodigyinfotech.dev/",
    period: "Apr 2024 – May 2024",
    type: "work",
    description: "Gained practical exposure to cybersecurity principles, tools, and practices.",
    details: ["Hands-on experience with security tools", "Real-world cybersecurity projects", "CIN: PIT/APR24/5933"],
  },
  {
    title: "Zero Trust Cloud Security Virtual Internship",
    company: "Zscaler (AICTE)",
    period: "Jan 2024 – Mar 2024",
    type: "work",
    description: "Virtual internship focused on Zero Trust Architecture and cloud security practices.",
    verifyLink: "https://aictecert.eduskillsfoundation.org/pages/home/verify.php?cert=e474774b4df6795f24493dcda06c33a3",
  },
  {
    title: "Network Security Associate Virtual Internship",
    company: "Fortinet (AICTE)",
    period: "Sep 2023 – Nov 2023",
    type: "work",
    description: "Comprehensive training on network security fundamentals and infrastructure.",
    verifyLink: "https://aictecert.eduskillsfoundation.org/pages/home/verify.php?cert=deec718fb18fd3f6b13e6a149f69bb26",
  },
  {
    title: "Cyber Security Virtual Internship",
    company: "Palo Alto Networks (AICTE)",
    period: "May 2023 – Jun 2023",
    type: "work",
    description: "Foundation in cybersecurity concepts and modern security solutions.",
    verifyLink: "https://aictecert.eduskillsfoundation.org/pages/home/verify.php?cert=022d0f668b7a9c977cce768b6b4d2fb6",
  },
];

const certifications: { name: string; issuer: string; verifyLink?: string; status?: string }[] = [
  {
    name: "Zscaler Zero Trust Cyber Associate (ZTCA)",
    issuer: "Zscaler",
    verifyLink: "https://verify.skilljar.com/c/nxpb6s6itnrz",
  },
  {
    name: "Ethical Hacking Essentials",
    issuer: "EC-Council CodeRed",
    verifyLink: "https://learn.eccouncil.org/certificate/4f955121-53c4-4bc0-876a-9549a3031642",
  },
  {
    name: "The Foundations of Cyber Security",
    issuer: "Coursera",
    verifyLink: "https://www.coursera.org/account/accomplishments/verify/34D26BYJD9L2",
  },
  { name: "Microsoft Gen AI Foundations Certificate Program", issuer: "Upgrad", status: "Ongoing" },
  {
    name: "Fundamentals of Digital Marketing",
    issuer: "Google",
    verifyLink: "https://drive.google.com/file/d/1TAnAHvCD_DPraBSHtXmnrWlqCTle5VHC/view?usp=drivesdk",
  },
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
      { threshold: 0.1 },
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="experience" ref={sectionRef} className="py-24 relative bg-secondary/20">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div
          className={`text-center mb-16 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <span className="text-primary text-sm tracking-wider uppercase font-medium">Experience</span>
          <h2 className="text-3xl md:text-5xl font-bold mt-2 mb-4 font-display">
            My <span className="text-gradient">Journey</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full" />
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Timeline */}
          <div className="lg:col-span-2">
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-4 md:left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-accent to-primary/30" />

              {experiences.map((exp, index) => (
                <div
                  key={index}
                  className={`relative pl-12 md:pl-20 pb-10 transition-all duration-700 ${
                    isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
                  }`}
                  style={{ transitionDelay: `${index * 150}ms` }}
                >
                  {/* Timeline dot */}
                  <div className="absolute left-2 md:left-6 w-4 h-4 bg-primary rounded-full border-4 border-background glow" />

                  <div className="glass p-6 rounded-xl hover:border-primary/50 transition-all duration-300 group">
                    <div className="flex flex-wrap items-start justify-between gap-2 mb-3">
                      <div>
                        <div className="flex items-center gap-2">
                          <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors font-display">
                            {exp.title}
                          </h3>
                          {exp.employmentType && (
                            <span className="text-[10px] px-2 py-0.5 bg-accent/20 text-accent rounded-full font-medium uppercase tracking-wide">
                              {exp.employmentType}
                            </span>
                          )}
                        </div>
                        {exp.companyLink ? (
                          <a
                            href={exp.companyLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-primary font-medium hover:underline flex items-center gap-1"
                          >
                            {exp.company}
                            <ExternalLink className="w-3 h-3" />
                          </a>
                        ) : (
                          <p className="text-primary font-medium">{exp.company}</p>
                        )}
                      </div>
                      <span className="flex items-center gap-1 text-muted-foreground text-sm bg-secondary px-3 py-1 rounded-full">
                        <Calendar className="w-3 h-3" />
                        {exp.period}
                      </span>
                    </div>
                    <p className="text-muted-foreground">{exp.description}</p>
                    {exp.details && (
                      <ul className="mt-3 space-y-1">
                        {exp.details.map((detail, i) => (
                          <li key={i} className="text-muted-foreground text-sm flex items-center gap-2">
                            <span className="w-1 h-1 bg-primary rounded-full" />
                            {detail}
                          </li>
                        ))}
                      </ul>
                    )}
                    {exp.verifyLink && (
                      <Button
                        size="sm"
                        variant="outline"
                        className="mt-3 h-8 px-3 text-xs gap-1.5"
                        onClick={() => window.open(exp.verifyLink, "_blank")}
                      >
                        <ExternalLink className="w-3 h-3" />
                        Verify Certificate
                      </Button>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div
            className={`transition-all duration-700 delay-300 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
            }`}
          >
            <div className="glass p-6 rounded-xl sticky top-24">
              <div className="flex items-center gap-2 mb-6">
                <Award className="w-6 h-6 text-primary" />
                <h3 className="text-xl font-bold font-display">Certifications</h3>
              </div>
              <div className="space-y-4">
                {certifications.map((cert, index) => (
                  <div
                    key={index}
                    className="p-4 bg-secondary/50 rounded-lg border border-transparent hover:border-primary/30 transition-all duration-300 group"
                  >
                    <div className="flex items-start justify-between gap-2">
                      <div>
                        <div className="flex items-center gap-2">
                          <p className="font-medium text-foreground group-hover:text-primary transition-colors text-sm">
                            {cert.name}
                          </p>
                          {cert.status && (
                            <span className="text-[10px] px-2 py-0.5 bg-accent/20 text-accent rounded-full font-medium">
                              {cert.status}
                            </span>
                          )}
                        </div>
                        <p className="text-muted-foreground text-xs mt-1">{cert.issuer}</p>
                      </div>
                      {cert.verifyLink && (
                        <Button
                          size="sm"
                          variant="outline"
                          className="h-7 px-2 text-xs gap-1 shrink-0"
                          onClick={() => window.open(cert.verifyLink, "_blank")}
                        >
                          <ExternalLink className="w-3 h-3" />
                          Verify
                        </Button>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
