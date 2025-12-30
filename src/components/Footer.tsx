import { Sparkles, Github, Linkedin, Mail, Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 border-t border-border bg-secondary/20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo & Copyright */}
          <div className="flex flex-col items-center md:items-start gap-2">
            <a
              href="#"
              className="flex items-center gap-2 text-primary font-display font-bold text-lg"
            >
              <Sparkles className="w-5 h-5" />
              Om.
            </a>
            <p className="text-muted-foreground text-sm flex items-center gap-1">
              © {currentYear} Om Jagtap. Built with{" "}
              <Heart className="w-4 h-4 text-accent fill-accent inline" />{" "}
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

        {/* Tagline */}
        <div className="text-center mt-8">
          <p className="text-xs text-muted-foreground">
            Building the future, one project at a time.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;