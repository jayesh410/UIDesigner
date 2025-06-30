
import { Button } from "@/components/ui/button";
import { ArrowUp } from "lucide-react";

export default function Projects() {
  const projects = [
    {
      title: "E-Lerning Platform",
      description: "Complete mobile app redesign focused on improving user conversion and shopping experience.",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=600&h=400&fit=crop",
      tags: ["UI Design", "Mobile", "E-commerce"],
      link: "#"
    },
    {
      title: "Yatra Mitra",
      description: "Analytics dashboard design for B2B software with complex data visualization requirements.",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=600&h=400&fit=crop",
      tags: ["UX Design", "Dashboard", "Analytics"],
      link: "#"
    },
    {
      title: "Portfolio",
      description: "Patient management system focusing on accessibility and ease of use for medical professionals.",
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=600&h=400&fit=crop",
      tags: ["UX Research", "Healthcare", "Accessibility"],
      link: "#"
    },
     {
      title: "Portfolio",
      description: "Patient management system focusing on accessibility and ease of use for medical professionals.",
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=600&h=400&fit=crop",
      tags: ["UX Research", "Healthcare", "Accessibility"],
      link: "#"
    },
     {
      title: "Portfolio",
      description: "Patient management system focusing on accessibility and ease of use for medical professionals.",
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=600&h=400&fit=crop",
      tags: ["UX Research", "Healthcare", "Accessibility"],
      link: "#"
    },
     {
      title: "Portfolio",
      description: "Patient management system focusing on accessibility and ease of use for medical professionals.",
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=600&h=400&fit=crop",
      tags: ["UX Research", "Healthcare", "Accessibility"],
      link: "#"
    }
  ];

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Featured Projects</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              A selection of my recent work showcasing different aspects of design and problem-solving
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-blue-600 mx-auto mt-6"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div
                key={project.title}
                className="group bg-background rounded-xl overflow-hidden border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:-translate-y-2"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <Button
                    size="sm"
                    className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0"
                  >
                    <ArrowUp className="h-4 w-4 rotate-45" />
                  </Button>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors duration-300">
                    {project.title}
                  </h3>
                  
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 bg-muted text-muted-foreground text-sm rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button variant="outline" size="lg" className="text-lg px-8 py-3">
              View All Projects
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
