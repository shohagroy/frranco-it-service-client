import ClientsSection from "./components/ClientsSection";
import HeroSection from "./components/HeroSection";
import ProjectSection from "./components/ProjectSection";
import ServicesSection from "./components/ServicesSection";
import TestimonialsSection from "./components/TestimonialsSection";
import WorkWithSection from "./components/WorkWithSection";

function App() {
  return (
    <>
      <main>
        <HeroSection />
        <ProjectSection />
        <ClientsSection />
        <ServicesSection />
        <TestimonialsSection />
        <WorkWithSection />
      </main>
    </>
  );
}

export default App;
