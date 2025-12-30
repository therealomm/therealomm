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

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Om Jagtap | Software Developer & Tech Enthusiast</title>
        <meta
          name="description"
          content="Om Jagtap - Software Developer and Tech Enthusiast. B.Tech CSE student passionate about building innovative solutions."
        />
        <meta
          name="keywords"
          content="Om Jagtap, Software Developer, Web Development, Portfolio, Developer, Tech"
        />
        <meta property="og:title" content="Om Jagtap | Software Developer" />
        <meta
          property="og:description"
          content="Software Developer and Tech Enthusiast passionate about building innovative solutions."
        />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://therealomm.github.io/portfolio/" />
      </Helmet>

      {/* Subtle background effects */}
      <ParticleField />

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