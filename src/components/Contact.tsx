
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Mail, Contact as ContactIcon } from "lucide-react";
import axios from "axios"

// import Spline from '@splinetool/react-spline';

export default function Contact() {
  const apiBase = import.meta.env.DEV ? '/api' : (import.meta.env.VITE_API_URL || '');
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();
  useEffect(()=>{
    startServer(apiBase);
  },[])

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

 
const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();

  if (!formData.name || !formData.email || !formData.message) {
    toast({
      title: "Missing Information",
      description: "Please fill in all required fields.",
      variant: "destructive"
    });
    return;
  }

  if (!formData.email.includes("@")) {
    toast({
      title: "Invalid Email",
      description: "Please enter a valid email address.",
      variant: "destructive"
    });
    return;
  }

  setIsSubmitting(true);

  // Use proxy in development, full URL in production
  
  try {
    const res = await axios.post(`${apiBase}/sendmessage`, formData);
    toast({
      title: "Message Sent!",
      description: res.data.message || "Thank you for reaching out!",
    });
    setFormData({ name: "", email: "", message: "" });
  } catch (error) {
    console.log('error', error)
    toast({
      title: "Error",
      description:
        (axios.isAxiosError(error) && error.response?.status === 429)
          ? "You have already submitted a message recently. Please try again later."
          : "Failed to send message",
      variant: "destructive"
    });
  } finally {
    setIsSubmitting(false);
  }
};


  return (
    <section id="contact" className="py-20 bg-muted/30">
      <div className="container mx-auto px-6 relative">

        <div className="max-w-4xl mx-auto z-50 border bg-transparent">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Let's Work Together</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Have a project in mind? I'd love to hear about it and discuss how we can bring your ideas to life.
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-blue-600 mx-auto mt-6"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Info */}

            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-semibold mb-6">Get In Touch</h3>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Whether you're looking to create a new digital experience, improve an existing product,
                  or just want to chat about design, I'm always excited to connect with new people and explore new opportunities.
                </p>
              </div>

              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Mail className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-medium">Email</h4>
                    <p className="text-muted-foreground">jayeshpandhare733@gmail.com</p>
                  </div>
                  <div>
                    <h4 className="font-medium">Mobile Number</h4>
                    <p className="text-muted-foreground">9309839597</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <ContactIcon className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-medium">Response Time</h4>
                    <p className="text-muted-foreground">Usually within 24 hours</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-background p-8 rounded-xl border border-border shadow-sm">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">
                    Name *
                  </label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Your full name"
                    className="w-full"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    Email *
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="your.email@example.com"
                    className="w-full"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Message *
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Tell me about your project..."
                    className="w-full min-h-[120px]"
                    required
                  />
                </div>

                <Button
                  type="submit"
                  size="lg"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-primary to-blue-600 hover:from-primary/90 hover:to-blue-600/90 transition-all duration-300">
                  {isSubmitting ? "Sending..." : "Send Message"}
                
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}



async function startServer(baseUrl:string){
  try {
    const response =await axios.get(`${baseUrl}/health`);
    if(response.data){
      console.log("Conected with sever success")
    }
  } catch (error) {
    // toast.error("Error")
    console.error("Error starting server", error)
  }
}