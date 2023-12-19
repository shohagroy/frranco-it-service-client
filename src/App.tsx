import ClientsSection from "./components/ClientsSection";
import HeroSection from "./components/HeroSection";
import ProjectSection from "./components/ProjectSection";
import ServicesSection from "./components/ServicesSection";
import TestimonialsSection from "./components/TestimonialsSection";

function App() {
  return (
    <>
      <main>
        <HeroSection />
        <ProjectSection />
        <ClientsSection />
        <ServicesSection />
        <TestimonialsSection />
      </main>
    </>
  );
}

export default App;
