import { Button } from "@/components/ui/button";
import { ArrowUp, ChevronLeft, ChevronRight } from "lucide-react";
import { useRef } from "react";

export default function Projects() {
  const projectCategories = [
    {
      title: "Mobile Applications",
      projects: [
        {
          title: "E-Learning Platform",
          description: "Mobile app to boost learning retention.",
          image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=600&h=400&fit=crop",
          tags: ["UI", "Mobile", "Learning"],
        },
        {
          title: "Fitness Tracker App",
          description: "Health tracking with real-time insights.",
          image: "https://images.unsplash.com/photo-1598970434795-0c54fe7c0642?w=600&h=400&fit=crop",
          tags: ["UX", "Health", "Tracker"],
        },
      ],
    },
    {
      title: "Web Applications",
      projects: [
        {
          title: "Library Management System",
          description: "Manage books, members, and returns.",
          image: "https://images.unsplash.com/photo-1519337265831-281ec6cc8514?w=600&h=400&fit=crop",
          tags: ["Web", "Admin", "Database"],
        },
        {
          title: "Yatra Mitra",
          description: "B2B travel dashboard analytics.",
          image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=600&h=400&fit=crop",
          tags: ["Dashboard", "Analytics"],
        },
      ],
    },
    {
      title: "Frame / Media Design",
      projects: [
        {
          title: "Event Posters",
          description: "Bold typography cultural posters.",
          image: "https://images.unsplash.com/photo-1611078489935-0cb9646c7584?w=600&h=400&fit=crop",
          tags: ["Poster", "Print", "Graphics"],
        },
        {
          title: "Social Media Kit",
          description: "Instagram and LinkedIn branding.",
          image: "https://images.unsplash.com/photo-1611076595425-df7f9c76f79c?w=600&h=400&fit=crop",
          tags: ["Branding", "Marketing"],
        },
      ],
    },
    {
      title: "Product Design",
      projects: [
        {
          title: "Smart Home UI",
          description: "IoT app UI for smart home devices.",
          image: "https://images.unsplash.com/photo-1603989501470-088d9f4f379d?w=600&h=400&fit=crop",
          tags: ["IoT", "Home", "UX"],
        },
        {
          title: "Medical Dashboard",
          description: "Accessibility-first patient system.",
          image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=600&h=400&fit=crop",
          tags: ["Healthcare", "Dashboard"],
        },
      ],
    },
  ];

  const scrollRefs = useRef([]);

  const scroll = (index: number, direction: "left" | "right") => {
    const scrollContainer = scrollRefs.current[index];
    if (!scrollContainer) return;
    const scrollAmount = 300;
    scrollContainer.scrollBy({
      left: direction === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    });
  };

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Projects by Category</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A curated collection categorized by platform and design style.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-blue-600 mx-auto mt-6" />
        </div>

        {projectCategories.map((section, idx) => (
          <div key={idx} className="mb-16">
            <h3 className="text-2xl font-semibold mb-4 text-primary">{section.title}</h3>
            <div className="relative">
              <button
                onClick={() => scroll(idx, "left")}
                className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white rounded-full shadow p-2"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>

              <div
                ref={(el) => (scrollRefs.current[idx] = el)}
                className="flex overflow-x-auto gap-6 scroll-smooth snap-x snap-mandatory scrollbar-hide py-4 px-1"
              >
                {section.projects.map((project, index) => (
                  <div
                    key={index}
                    className="snap-start min-w-[300px] max-w-[300px] flex-shrink-0 group bg-background rounded-xl overflow-hidden border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:-translate-y-2"
                  >
                    <div className="relative overflow-hidden">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      <Button
                        size="sm"
                        className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0"
                      >
                        <ArrowUp className="h-4 w-4 rotate-45" />
                      </Button>
                    </div>
                    <div className="p-4">
                      <h4 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors">
                        {project.title}
                      </h4>
                      <p className="text-muted-foreground mb-3 text-sm">{project.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {project.tags.map((tag) => (
                          <span
                            key={tag}
                            className="px-3 py-1 bg-muted text-muted-foreground text-xs rounded-full"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <button
                onClick={() => scroll(idx, "right")}
                className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white rounded-full shadow p-2"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>
          </div>
        ))}

        <div className="text-center mt-12">
          <Button variant="outline" size="lg" className="text-lg px-8 py-3">
            View All Projects
          </Button>
        </div>
      </div>
    </section>
  );
}
