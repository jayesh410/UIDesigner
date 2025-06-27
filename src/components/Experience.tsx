
export default function Experience() {
  const experiences = [
    {
      title: "Senior UI/UX Designer",
      company: "TechCorp Inc.",
      period: "2022 - Present",
      description: "Lead design for multiple product teams, establishing design systems and improving user experience across web and mobile platforms.",
      achievements: ["Increased user engagement by 40%", "Led design system implementation", "Mentored 3 junior designers"]
    },
    {
      title: "UI/UX Designer",
      company: "Digital Solutions",
      period: "2020 - 2022",
      description: "Designed user interfaces for SaaS applications, conducted user research, and collaborated with development teams to implement designs.",
      achievements: ["Redesigned core product interface", "Reduced user onboarding time by 60%", "Conducted 50+ user interviews"]
    },
    {
      title: "Junior Designer",
      company: "Creative Agency",
      period: "2019 - 2020",
      description: "Created visual designs for various clients, developed brand identities, and worked on web design projects.",
      achievements: ["Completed 25+ client projects", "Developed 5 brand identities", "Improved design process efficiency"]
    }
  ];

  return (
    <section id="experience" className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Experience</h2>
            <p className="text-xl text-muted-foreground">
              My professional journey in design and technology
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-blue-600 mx-auto mt-6"></div>
          </div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary to-blue-600"></div>

            <div className="space-y-12">
              {experiences.map((exp, index) => (
                <div key={index} className="relative flex items-start gap-8">
                  {/* Timeline Dot */}
                  <div className="relative z-10 w-16 h-16 bg-background border-4 border-primary rounded-full flex items-center justify-center shadow-lg">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                  </div>

                  {/* Content */}
                  <div className="flex-1 bg-background p-6 rounded-xl border border-border shadow-sm hover:shadow-md transition-shadow duration-300">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                      <h3 className="text-xl font-semibold text-primary">{exp.title}</h3>
                      <span className="text-sm text-muted-foreground bg-muted px-3 py-1 rounded-full">
                        {exp.period}
                      </span>
                    </div>
                    
                    <h4 className="text-lg font-medium mb-3">{exp.company}</h4>
                    
                    <p className="text-muted-foreground mb-4 leading-relaxed">
                      {exp.description}
                    </p>
                    
                    <div className="space-y-2">
                      <h5 className="font-medium text-sm text-primary">Key Achievements:</h5>
                      <ul className="space-y-1">
                        {exp.achievements.map((achievement, i) => (
                          <li key={i} className="text-sm text-muted-foreground flex items-center">
                            <div className="w-1.5 h-1.5 bg-primary rounded-full mr-2 flex-shrink-0"></div>
                            {achievement}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
