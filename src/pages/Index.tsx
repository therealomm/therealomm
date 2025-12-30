import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ExperienceSection from "@/components/ExperienceSection";
import SkillsSection from "@/components/SkillsSection";
import ProjectsSection from "@/components/ProjectsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import ParticleField from "@/components/ParticleField";
import MatrixRain from "@/components/MatrixRain";
import CursorGlow from "@/components/CursorGlow";
import FloatingIcons from "@/components/FloatingIcons";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Om Jagtap | Cybersecurity Professional</title>
        <meta
          name="description"
          content="Om Jagtap - Cybersecurity enthusiast specializing in network security, Zero Trust Architecture, and ethical hacking. B.Tech CSE student at MIT ADT University, Pune."
        />
        <meta
          name="keywords"
          content="Om Jagtap, Cybersecurity, Network Security, Zero Trust, Ethical Hacking, Portfolio, Developer"
        />
        <meta property="og:title" content="Om Jagtap | Cybersecurity Professional" />
        <meta
          property="og:description"
          content="Cybersecurity enthusiast specializing in network security, Zero Trust Architecture, and ethical hacking."
        />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://therealomm.github.io/portfolio/" />
      </Helmet>

      {/* Visual Effects */}
      <MatrixRain />
      <ParticleField />
      <FloatingIcons />
      <CursorGlow />

      <main className="min-h-screen relative">
        <Navbar />
        <HeroSection />
        <AboutSection />
        <ExperienceSection />
        <SkillsSection />
        <ProjectsSection />
        <ContactSection />
        <Footer />
      </main>
    </>
  );
};

export default Index;
