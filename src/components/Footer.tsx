import { Sparkles, Github, Linkedin, Mail, Heart } from "lucide-react";
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
  const currentYear = 2026;
  const randomQuote = useMemo(() => quotes[Math.floor(Math.random() * quotes.length)], []);

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

        {/* Quote */}
        <div className="text-center mt-8">
          <p className="text-xs text-muted-foreground italic">
            "{randomQuote.text}"
          </p>
          <p className="text-xs text-muted-foreground mt-1">
            — {randomQuote.author}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;