
export default function About() {
  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">About Me</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-blue-600 mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="space-y-4">
                <h3 className="text-2xl font-semibold text-primary">
                  Passionate About Design That Makes a Difference
                </h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  With over 5 years of experience in UI/UX design, I specialize in creating 
                  digital experiences that are not only visually stunning but also intuitive 
                  and user-centered. My approach combines design thinking with technical expertise 
                  to deliver solutions that drive real business results.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  I believe great design is invisible – it should feel natural and effortless 
                  to the user while solving complex problems behind the scenes. Every pixel, 
                  every interaction, and every decision is made with the user's journey in mind.
                </p>
              </div>

              <div className="p-6 bg-background rounded-lg border border-border shadow-sm">
                <blockquote className="text-lg italic text-muted-foreground mb-4">
                  "Design is not just what it looks like and feels like. Design is how it works."
                </blockquote>
                <cite className="text-sm text-primary font-medium">— Steve Jobs</cite>
              </div>

              <div className="grid grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-primary mb-2">Years of Experience</h4>
                  <p className="text-3xl font-bold">5+</p>
                </div>
                <div>
                  <h4 className="font-semibold text-primary mb-2">Projects Completed</h4>
                  <p className="text-3xl font-bold">50+</p>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="relative z-10">
                <img
                  src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=500&h=600&fit=crop"
                  alt="Alex Chen working"
                  className="rounded-2xl shadow-2xl w-full object-cover h-96"
                />
                <div className="absolute -bottom-6 -right-6 w-full h-full bg-gradient-to-br from-primary/20 to-blue-600/20 rounded-2xl -z-10"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
