import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Mail, Phone, MapPin, Send, Github, Linkedin, ExternalLink } from "lucide-react";
import { Button } from "./ui/button";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";

const ContactSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = `Portfolio Contact from ${formData.name}`;
    const body = `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`;
    window.location.href = `mailto:omjagtap21@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    
    toast({
      title: "Opening email client...",
      description: "Your default email application will open with the message.",
    });
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "omjagtap21@gmail.com",
      href: "mailto:omjagtap21@gmail.com",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+91 9370354481",
      href: "tel:+919370354481",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Pune, Maharashtra, India",
      href: "#",
    },
  ];

  const socialLinks = [
    { icon: Github, label: "GitHub", href: "https://github.com/therealomm" },
    { icon: Linkedin, label: "LinkedIn", href: "https://www.linkedin.com/in/therealomm" },
    { icon: ExternalLink, label: "Portfolio", href: "https://therealomm.github.io/portfolio/" },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <section id="contact" ref={sectionRef} className="py-24 relative overflow-hidden">
      {/* Background effects */}
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[150px]"
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{ duration: 10, repeat: Infinity }}
      />

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="font-mono text-primary text-sm tracking-wider uppercase">
            &lt;contact&gt;
          </span>
          <h2 className="text-3xl md:text-5xl font-bold mt-2 mb-4">
            Get In <span className="text-gradient">Touch</span>
          </h2>
          <motion.div
            className="w-20 h-1 bg-primary mx-auto rounded-full"
            initial={{ scaleX: 0 }}
            animate={isInView ? { scaleX: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          />
          <motion.p
            className="text-muted-foreground mt-6 max-w-xl mx-auto"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.4 }}
          >
            Have a project in mind or want to discuss cybersecurity? Feel free to
            reach out. I'm always open to new opportunities and collaborations.
          </motion.p>
        </motion.div>

        <motion.div
          className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {/* Contact Form */}
          <motion.div variants={itemVariants}>
            <form onSubmit={handleSubmit} className="space-y-6">
              {[
                { name: "name", label: "Your Name", type: "text", placeholder: "John Doe" },
                { name: "email", label: "Your Email", type: "email", placeholder: "john@example.com" },
              ].map((field) => (
                <motion.div
                  key={field.name}
                  whileHover={{ scale: 1.01 }}
                  whileFocus={{ scale: 1.01 }}
                >
                  <label className="block text-sm font-medium mb-2">
                    {field.label}
                  </label>
                  <motion.input
                    type={field.type}
                    required
                    value={formData[field.name as keyof typeof formData]}
                    onChange={(e) =>
                      setFormData({ ...formData, [field.name]: e.target.value })
                    }
                    className="w-full px-4 py-3 bg-secondary/50 border border-primary/20 rounded-xl focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all duration-300 text-foreground placeholder:text-muted-foreground"
                    placeholder={field.placeholder}
                    whileFocus={{
                      boxShadow: "0 0 20px hsl(var(--primary) / 0.2)",
                    }}
                  />
                </motion.div>
              ))}
              <motion.div whileHover={{ scale: 1.01 }}>
                <label className="block text-sm font-medium mb-2">
                  Message
                </label>
                <motion.textarea
                  required
                  rows={5}
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  className="w-full px-4 py-3 bg-secondary/50 border border-primary/20 rounded-xl focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all duration-300 text-foreground placeholder:text-muted-foreground resize-none"
                  placeholder="Tell me about your project or opportunity..."
                  whileFocus={{
                    boxShadow: "0 0 20px hsl(var(--primary) / 0.2)",
                  }}
                />
              </motion.div>
              <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                <Button type="submit" variant="glow" size="lg" className="w-full group">
                  <Send className="w-5 h-5 group-hover:rotate-12 group-hover:translate-x-1 transition-transform" />
                  Send Message
                </Button>
              </motion.div>
            </form>
          </motion.div>

          {/* Contact Info */}
          <motion.div variants={itemVariants}>
            <div className="glass p-8 rounded-xl h-full relative overflow-hidden">
              {/* Animated border */}
              <motion.div
                className="absolute inset-0 rounded-xl"
                style={{
                  background: "linear-gradient(90deg, transparent, hsl(var(--primary) / 0.3), transparent)",
                  backgroundSize: "200% 100%",
                }}
                animate={{
                  backgroundPosition: ["200% 0", "-200% 0"],
                }}
                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
              />

              <h3 className="text-xl font-bold mb-6 relative z-10">Contact Information</h3>

              <div className="space-y-6 mb-8 relative z-10">
                {contactInfo.map((info, index) => (
                  <motion.a
                    key={info.label}
                    href={info.href}
                    className="flex items-start gap-4 group"
                    whileHover={{ x: 10 }}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.3 + index * 0.1 }}
                  >
                    <motion.div
                      className="p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors"
                      whileHover={{ rotate: 10, scale: 1.1 }}
                    >
                      <info.icon className="w-5 h-5 text-primary" />
                    </motion.div>
                    <div>
                      <p className="text-sm text-muted-foreground">
                        {info.label}
                      </p>
                      <p className="font-medium group-hover:text-primary transition-colors">
                        {info.value}
                      </p>
                    </div>
                  </motion.a>
                ))}
              </div>

              <div className="border-t border-primary/20 pt-6 relative z-10">
                <p className="text-sm text-muted-foreground mb-4">
                  Follow me on
                </p>
                <div className="flex gap-4">
                  {socialLinks.map((link, index) => (
                    <motion.a
                      key={link.label}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 bg-secondary rounded-lg hover:bg-primary/20 hover:text-primary transition-all duration-300"
                      title={link.label}
                      whileHover={{ scale: 1.2, rotate: 10 }}
                      whileTap={{ scale: 0.9 }}
                      initial={{ opacity: 0, y: 20 }}
                      animate={isInView ? { opacity: 1, y: 0 } : {}}
                      transition={{ delay: 0.5 + index * 0.1 }}
                    >
                      <link.icon className="w-5 h-5" />
                    </motion.a>
                  ))}
                </div>
              </div>

              {/* Availability indicator */}
              <motion.div
                className="mt-8 p-4 bg-background/50 rounded-lg font-mono text-sm relative z-10"
                animate={{
                  borderColor: ["hsl(var(--primary) / 0.3)", "hsl(var(--primary) / 0.6)", "hsl(var(--primary) / 0.3)"],
                }}
                transition={{ duration: 2, repeat: Infinity }}
                style={{ border: "1px solid" }}
              >
                <div className="flex items-center gap-2 text-muted-foreground">
                  <motion.span
                    className="w-2 h-2 bg-green-500 rounded-full"
                    animate={{
                      scale: [1, 1.2, 1],
                      boxShadow: ["0 0 0 0 rgba(34, 197, 94, 0.5)", "0 0 0 8px rgba(34, 197, 94, 0)", "0 0 0 0 rgba(34, 197, 94, 0.5)"],
                    }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                  Available for freelance & full-time opportunities
                </div>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Closing tag */}
      <motion.div
        className="text-center mt-16"
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ delay: 0.8 }}
      >
        <span className="font-mono text-primary/50 text-sm">
          &lt;/contact&gt;
        </span>
      </motion.div>
    </section>
  );
};

export default ContactSection;
