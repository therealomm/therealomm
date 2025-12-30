import { Shield, Github, Linkedin, Mail, Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 border-t border-primary/20 bg-secondary/20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo & Copyright */}
          <div className="flex flex-col items-center md:items-start gap-2">
            <a
              href="#"
              className="flex items-center gap-2 text-primary font-mono font-bold text-lg"
            >
              <Shield className="w-5 h-5" />
              OM.SEC
            </a>
            <p className="text-muted-foreground text-sm flex items-center gap-1">
              © {currentYear} Om Jagtap. Built with{" "}
              <Heart className="w-4 h-4 text-destructive fill-destructive inline" />{" "}
              and React
            </p>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            <a
              href="https://github.com/therealomm"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-muted-foreground hover:text-primary transition-colors"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href="https://www.linkedin.com/in/therealomm"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-muted-foreground hover:text-primary transition-colors"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href="mailto:omjagtap21@gmail.com"
              className="p-2 text-muted-foreground hover:text-primary transition-colors"
            >
              <Mail className="w-5 h-5" />
            </a>
          </div>
        </div>

        {/* Terminal-style tagline */}
        <div className="text-center mt-8">
          <p className="font-mono text-xs text-primary/50">
            &gt; console.log("Securing the digital world, one line at a time...");
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
