import { Button } from "@/components/ui/button";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import profilePic from "@/assets/profile.png";

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
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-hero opacity-40"></div>
      </div>

      {/* Content */}
       <div className="relative z-10 container mx-auto px-4 text-center text-white">
        <div className="animate-fade-in flex flex-col items-center">
          
          <img
            src={profilePic}
            alt="Taha Khan"
            className="w-40 h-40 md:w-48 md:h-48 rounded-full border-4 border-white shadow-lg mb-6 object-cover object-top"
          />

          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent">Taha Khan</span>
          </h1>
          <p className="text-xl md:text-2xl mb-4 text-blue-100">Software Engineer</p>
          <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto text-blue-50 leading-relaxed">
            Building cloud-based applications, AI-powered tools, and scalable backend systems. 
            Currently pursuing Master's in Computer Science.
          </p>

          <div className="flex justify-center space-x-6 mb-16">
            <Button 
              variant="secondary" 
              size="sm" 
              className="bg-white/10 text-white border-white/20 hover:bg-white/20 rounded-full p-3"
              onClick={() => window.open('https://github.com/taha59', '_blank')}
            >
              <Github className="h-5 w-5" />
            </Button>
            <Button 
              variant="secondary" 
              size="sm" 
              className="bg-white/10 text-white border-white/20 hover:bg-white/20 rounded-full p-3"
              onClick={() => window.open('https://www.linkedin.com/in/taha-khan-/', '_blank')}
            >
              <Linkedin className="h-5 w-5" />
            </Button>
            <Button 
              variant="secondary" 
              size="sm" 
              className="bg-white/10 text-white border-white/20 hover:bg-white/20 rounded-full p-3"
              onClick={() => window.open('mailto:tkhan7@vols.utk.edu', '_blank')}
            >
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