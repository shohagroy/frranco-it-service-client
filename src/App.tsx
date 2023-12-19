import ClientsSection from "./components/section/ClientsSection";
import HeroSection from "./components/section/HeroSection";
import ProjectSection from "./components/section/ProjectSection";
import ServicesSection from "./components/section/ServicesSection";
import TestimonialsSection from "./components/section/TestimonialsSection";
import WorkWithSection from "./components/section/WorkWithSection";

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
