import Hero from "@/components/Hero";
import About from "@/components/About";
import Education from "@/components/Education";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import DevOpsShowcase from "@/components/DevOpsShowcase";
import GitHubSection from "@/components/GitHub";
import Footer from "@/components/Footer";
import ParticleBackground from "@/components/ParticleBackground";

export default function Home() {
  return (
    <main className="relative min-h-screen">
      <ParticleBackground />
      <Hero />
      <About />
      <Experience />
      <Education />
      <Projects />
      <Skills />
      <DevOpsShowcase />
      <GitHubSection />
      <Footer />
    </main>
  );
}
