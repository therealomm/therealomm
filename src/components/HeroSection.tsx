import { useEffect, useState } from "react";
import { ChevronDown, Github, Linkedin, Mail, FileText } from "lucide-react";
import { Button } from "./ui/button";

const roles = [
  "Cybersecurity Enthusiast",
  "Network Security Specialist",
  "Zero Trust Architect",
  "Ethical Hacker",
];

const HeroSection = () => {
  const [currentRole, setCurrentRole] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

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

  const scrollToAbout = () => {
    document.querySelector("#about")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-primary/5 rounded-full blur-3xl animate-float" style={{ animationDelay: "1s" }} />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Terminal-style intro */}
          <div className="inline-block mb-6 animate-fade-up opacity-0 stagger-1">
            <span className="font-mono text-primary/80 text-sm md:text-base bg-primary/10 px-4 py-2 rounded-full border border-primary/30">
              &gt; system.initialize("portfolio")_
            </span>
          </div>

          {/* Name */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4 animate-fade-up opacity-0 stagger-2">
            <span className="text-foreground">Hi, I'm </span>
            <span className="text-gradient glow-text">Om Jagtap</span>
          </h1>

          {/* Animated role */}
          <div className="h-12 md:h-16 flex items-center justify-center mb-8 animate-fade-up opacity-0 stagger-3">
            <p className="text-xl md:text-3xl font-mono text-muted-foreground">
              {displayText}
              <span className="inline-block w-0.5 h-6 md:h-8 bg-primary ml-1 animate-pulse" />
            </p>
          </div>

          {/* Description */}
          <p className="text-muted-foreground text-base md:text-lg max-w-2xl mx-auto mb-10 animate-fade-up opacity-0 stagger-4 leading-relaxed">
            B.Tech CSE student specializing in Cybersecurity & Forensics. 
            Passionate about securing digital systems through Zero Trust Architecture, 
            network security, and ethical hacking.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12 animate-fade-up opacity-0 stagger-5">
            <Button
              variant="glow"
              size="lg"
              onClick={() =>
                document
                  .querySelector("#contact")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            >
              <Mail className="w-5 h-5" />
              Get In Touch
            </Button>
            <Button
              variant="outline"
              size="lg"
              onClick={() =>
                document
                  .querySelector("#projects")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            >
              <FileText className="w-5 h-5" />
              View Projects
            </Button>
          </div>

          {/* Social Links */}
          <div className="flex items-center justify-center gap-4 animate-fade-up opacity-0 stagger-6">
            <a
              href="https://github.com/therealomm"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full border border-primary/30 text-muted-foreground hover:text-primary hover:border-primary hover:bg-primary/10 transition-all duration-300 hover:scale-110"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href="https://www.linkedin.com/in/therealomm"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full border border-primary/30 text-muted-foreground hover:text-primary hover:border-primary hover:bg-primary/10 transition-all duration-300 hover:scale-110"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href="mailto:omjagtap21@gmail.com"
              className="p-3 rounded-full border border-primary/30 text-muted-foreground hover:text-primary hover:border-primary hover:bg-primary/10 transition-all duration-300 hover:scale-110"
            >
              <Mail className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <button
        onClick={scrollToAbout}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-primary/60 hover:text-primary transition-colors duration-300 animate-bounce"
      >
        <ChevronDown className="w-8 h-8" />
      </button>
    </section>
  );
};

export default HeroSection;
