
import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";

export default function Hero() {
  const scrollToProjects = () => {
    const element = document.getElementById("projects");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Spline 3D Animation Background */}
      <div className="absolute inset-0 -z-10">
        <spline-viewer 
          url="https://prod.spline.design/6Wq5h8KoLfg8dIJ6/scene.splinecode"
          className="w-full h-full"
        ></spline-viewer>
      </div>

      {/* Fallback Animated Background for older browsers */}
      <div className="absolute inset-0 -z-20">
        <div className="absolute top-20 left-20 w-72 h-72 bg-blue-300/20 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
        <div className="absolute top-40 right-20 w-72 h-72 bg-purple-300/20 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-300"></div>
        <div className="absolute -bottom-8 left-40 w-72 h-72 bg-pink-300/20 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-700"></div>
      </div>

      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="max-w-4xl mx-auto space-y-8">
          {/* Profile Image */}
          <div className="relative">
            <div className="w-32 h-32 mx-auto rounded-full overflow-hidden border-4 border-primary/20 shadow-2xl animate-fade-in backdrop-blur-sm bg-background/10">
              <img
                src="https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=300&h=300&fit=crop&crop=face"
                alt="Alex Chen"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -top-2 -right-2 w-8 h-8 bg-green-400 rounded-full border-4 border-background"></div>
          </div>

          {/* Main Heading with backdrop blur for better readability */}
          <div className="space-y-4 animate-fade-in backdrop-blur-sm bg-background/10 rounded-lg p-6">
            <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-primary via-blue-600 to-purple-600 bg-clip-text text-transparent leading-tight">
              Hi, I'm Alex Chen
            </h1>
            <h2 className="text-2xl md:text-3xl font-light text-foreground">
              UI/UX Designer & Creative Problem Solver
            </h2>
          </div>

          {/* Tagline */}
          <p className="text-lg md:text-xl text-foreground max-w-2xl mx-auto leading-relaxed animate-fade-in backdrop-blur-sm bg-background/10 rounded-lg p-4">
            I craft digital experiences that bridge the gap between user needs and business goals, 
            creating interfaces that are both beautiful and functional.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8 animate-fade-in">
            <Button 
              size="lg" 
              onClick={scrollToProjects}
              className="text-lg px-8 py-3 bg-gradient-to-r from-primary to-blue-600 hover:from-primary/90 hover:to-blue-600/90 transition-all duration-300 transform hover:scale-105 shadow-lg backdrop-blur-sm"
            >
              View My Work
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              onClick={scrollToContact}
              className="text-lg px-8 py-3 border-2 hover:bg-primary hover:text-primary-foreground transition-all duration-300 transform hover:scale-105 backdrop-blur-sm"
            >
              Get In Touch
            </Button>
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <ArrowDown className="h-6 w-6 text-foreground" />
          </div>
        </div>
      </div>
    </section>
  );
}
