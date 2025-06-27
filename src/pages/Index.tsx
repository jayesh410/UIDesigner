
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Navigation from "@/components/Navigation";
import ThemeProvider from "@/components/ThemeProvider";

const Index = () => {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-background text-foreground transition-colors duration-300">
        <Navigation />
        <main>
          <Hero />
          <About />
          <Services />
          <Experience />
          <Projects />
          <Contact />
        </main>
      </div>
    </ThemeProvider>
  );
};

export default Index;
