import { Sparkles, Github, Linkedin, Mail, Heart, Quote } from "lucide-react";
import { useMemo } from "react";

const quotes = [
  { text: "The only truly secure system is one that is powered off, cast in a block of concrete and sealed in a lead-lined room.", author: "Gene Spafford" },
  { text: "Security is not a product, but a process.", author: "Bruce Schneier" },
  { text: "In the digital age, privacy must be a priority.", author: "Al Gore" },
  { text: "There are only two types of companies: those that have been hacked, and those that will be.", author: "Robert Mueller" },
  { text: "If you think technology can solve your security problems, then you don't understand the problems and you don't understand the technology.", author: "Bruce Schneier" },
  { text: "Privacy is not something that I'm merely entitled to, it's an absolute prerequisite.", author: "Marlon Brando" },
  { text: "Passwords are like underwear: don't let people see it, change it very often, and you shouldn't share it with strangers.", author: "Chris Pirillo" },
  { text: "The Internet is becoming the town square for the global village of tomorrow.", author: "Bill Gates" },
  { text: "Information is power. But like all power, there are those who want to keep it for themselves.", author: "Aaron Swartz" },
  { text: "Technology is a useful servant but a dangerous master.", author: "Christian Lous Lange" },
  { text: "The advance of technology is based on making it fit in so that you don't really even notice it.", author: "Bill Gates" },
  { text: "It's not a faith in technology. It's faith in people.", author: "Steve Jobs" },
  { text: "The best way to predict the future is to create it.", author: "Peter Drucker" },
  { text: "Innovation distinguishes between a leader and a follower.", author: "Steve Jobs" },
  { text: "First, solve the problem. Then, write the code.", author: "John Johnson" },
];

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const randomQuote = useMemo(() => {
    return quotes[Math.floor(Math.random() * quotes.length)];
  }, []);

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

        {/* Tagline Box */}
        <div className="text-center mt-8">
          <div className="inline-block px-6 py-3 rounded-lg border border-border/50 bg-background/50 backdrop-blur-sm">
            <p className="text-sm font-medium text-foreground">
              Securing the Digital World One Vulnerability at a Time
            </p>
          </div>
        </div>

        {/* Quote Box */}
        <div className="text-center mt-6">
          <div className="max-w-2xl mx-auto px-6 py-4 rounded-lg border border-primary/20 bg-primary/5 backdrop-blur-sm">
            <div className="flex items-start justify-center gap-2">
              <Quote className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
              <div>
                <p className="text-sm italic text-muted-foreground leading-relaxed">
                  "{randomQuote.text}"
                </p>
                <p className="text-xs text-primary mt-2 font-medium">
                  — {randomQuote.author}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;