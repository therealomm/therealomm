import { useEffect, useRef, useState } from "react";
import { GraduationCap, MapPin, Shield, Target } from "lucide-react";

const AboutSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const stats = [
    { icon: GraduationCap, label: "B.Tech CSE", value: "Cybersecurity" },
    { icon: MapPin, label: "Location", value: "Pune, India" },
    { icon: Shield, label: "Focus", value: "Zero Trust" },
    { icon: Target, label: "Goal", value: "CompTIA Security+" },
  ];

  return (
    <section id="about" ref={sectionRef} className="py-24 relative">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div
          className={`text-center mb-16 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <span className="font-mono text-primary text-sm tracking-wider uppercase">
            &lt;about&gt;
          </span>
          <h2 className="text-3xl md:text-5xl font-bold mt-2 mb-4">
            Who <span className="text-gradient">I Am</span>
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left - Image/Visual */}
          <div
            className={`relative transition-all duration-700 delay-200 ${
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 -translate-x-10"
            }`}
          >
            <div className="relative aspect-square max-w-md mx-auto">
              {/* Decorative elements */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-primary/10 rounded-2xl" />
              <div className="absolute inset-4 border-2 border-primary/30 rounded-2xl" />
              <div className="absolute inset-8 glass rounded-xl flex items-center justify-center">
                <div className="text-center p-6">
                  <Shield className="w-24 h-24 mx-auto text-primary mb-4 animate-float" />
                  <p className="font-mono text-primary text-lg">
                    Securing the Digital World
                  </p>
                </div>
              </div>
              {/* Corner accents */}
              <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-primary" />
              <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-primary" />
              <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-primary" />
              <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-primary" />
            </div>
          </div>

          {/* Right - Content */}
          <div
            className={`transition-all duration-700 delay-300 ${
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 translate-x-10"
            }`}
          >
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              I'm a <span className="text-primary font-semibold">Cybersecurity enthusiast</span> pursuing 
              a B.Tech in Computer Science with a focus on <span className="text-primary font-semibold">Cybersecurity and Forensics</span> at 
              MIT ADT University, Pune.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              My expertise spans across <span className="text-primary font-semibold">network security</span>, 
              <span className="text-primary font-semibold"> vulnerability analysis</span>, and 
              <span className="text-primary font-semibold"> Zero Trust Architecture</span>. Currently preparing 
              for CompTIA Security+ to strengthen my foundational security knowledge.
            </p>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, index) => (
                <div
                  key={stat.label}
                  className="glass p-4 rounded-xl group hover:border-primary/50 transition-all duration-300"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <stat.icon className="w-6 h-6 text-primary mb-2 group-hover:scale-110 transition-transform duration-300" />
                  <p className="text-muted-foreground text-sm">{stat.label}</p>
                  <p className="text-foreground font-semibold">{stat.value}</p>
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
        <span className="font-mono text-primary/50 text-sm">&lt;/about&gt;</span>
      </div>
    </section>
  );
};

export default AboutSection;
