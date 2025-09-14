import { Button } from "@/components/ui/button";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import heroImage from "@/assets/hero-background.jpg";

export function Hero() {
  const scrollToAbout = () => {
    const aboutSection = document.getElementById("about");
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${heroImage})`,
        }}
      >
        <div className="absolute inset-0 bg-gradient-hero opacity-90"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center text-white">
        <div className="animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            Hi, I'm <span className="bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent">Alex Johnson</span>
          </h1>
          <p className="text-xl md:text-2xl mb-4 text-blue-100">Full-Stack Developer</p>
          <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto text-blue-50 leading-relaxed">
            Passionate about crafting beautiful, scalable web applications with modern technologies.
            I turn ideas into digital reality.
          </p>

          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <Button size="lg" className="bg-white text-primary hover:bg-blue-50 transition-smooth">
              View My Work
            </Button>
            <Button variant="secondary" size="lg" className="bg-white/10 text-white border-white/20 hover:bg-white/20 transition-smooth">
              Download Resume
            </Button>
          </div>

          <div className="flex justify-center space-x-6 mb-16">
            <Button variant="secondary" size="sm" className="bg-white/10 text-white border-white/20 hover:bg-white/20 rounded-full p-3">
              <Github className="h-5 w-5" />
            </Button>
            <Button variant="secondary" size="sm" className="bg-white/10 text-white border-white/20 hover:bg-white/20 rounded-full p-3">
              <Linkedin className="h-5 w-5" />
            </Button>
            <Button variant="secondary" size="sm" className="bg-white/10 text-white border-white/20 hover:bg-white/20 rounded-full p-3">
              <Mail className="h-5 w-5" />
            </Button>
          </div>
        </div>

        <div className="animate-bounce cursor-pointer" onClick={scrollToAbout}>
          <ArrowDown className="h-8 w-8 mx-auto text-white/70 hover:text-white transition-smooth" />
        </div>
      </div>
    </section>
  );
}