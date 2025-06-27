
import { Code, Pencil, Users, Settings } from "lucide-react";

export default function Services() {
  const services = [
    {
      icon: Pencil,
      title: "UI Design",
      description: "Creating beautiful, intuitive interfaces that delight users and drive engagement through thoughtful visual design.",
      features: ["Visual Design", "Design Systems", "Prototyping", "Brand Integration"]
    },
    {
      icon: Users,
      title: "UX Research",
      description: "Understanding user needs through research, testing, and data analysis to inform design decisions.",
      features: ["User Interviews", "Usability Testing", "Journey Mapping", "Analytics Review"]
    },
    {
      icon: Settings,
      title: "Prototyping",
      description: "Building interactive prototypes to validate ideas and communicate design concepts effectively.",
      features: ["Interactive Mockups", "User Flow Testing", "Rapid Iteration", "Stakeholder Demos"]
    },
    {
      icon: Code,
      title: "Design to Code",
      description: "Seamless handoff from design to development with detailed specifications and ongoing collaboration.",
      features: ["Design Systems", "Component Libraries", "Developer Handoff", "Quality Assurance"]
    }
  ];

  return (
    <section id="services" className="py-20">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Services</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Comprehensive design solutions tailored to your business needs
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-blue-600 mx-auto mt-6"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div
                key={service.title}
                className="group p-6 bg-background rounded-xl border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:-translate-y-2"
              >
                <div className="mb-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                    <service.icon className="h-6 w-6 text-primary" />
                  </div>
                </div>
                
                <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors duration-300">
                  {service.title}
                </h3>
                
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {service.description}
                </p>
                
                <ul className="space-y-2">
                  {service.features.map((feature) => (
                    <li key={feature} className="text-sm text-muted-foreground flex items-center">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full mr-2"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
