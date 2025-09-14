import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github } from "lucide-react";
import project1Image from "@/assets/project1.jpg";
import project2Image from "@/assets/project2.jpg";
import project3Image from "@/assets/project3.jpg";

export function Projects() {
  const projects = [
    {
      title: "E-Commerce Platform",
      description: "A full-stack e-commerce solution with advanced product filtering, secure payments, and admin dashboard. Built with modern technologies for optimal performance and user experience.",
      image: project1Image,
      technologies: ["React", "Node.js", "PostgreSQL", "Stripe", "AWS"],
      liveUrl: "https://example-ecommerce.com",
      githubUrl: "https://github.com/alexjohnson/ecommerce-platform",
      featured: true
    },
    {
      title: "Task Management App",
      description: "A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features. Designed for productivity and ease of use.",
      image: project2Image,
      technologies: ["Vue.js", "Express", "MongoDB", "Socket.io", "Docker"],
      liveUrl: "https://example-taskmanager.com",
      githubUrl: "https://github.com/alexjohnson/task-manager",
      featured: true
    },
    {
      title: "Weather Forecast App",
      description: "A responsive weather application with location-based forecasts, interactive maps, and detailed weather analytics. Optimized for both web and mobile devices.",
      image: project3Image,
      technologies: ["React Native", "TypeScript", "Redux", "OpenWeather API"],
      liveUrl: "https://example-weather.com",
      githubUrl: "https://github.com/alexjohnson/weather-app",
      featured: false
    }
  ];

  return (
    <section id="projects" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <div className="w-24 h-1 bg-gradient-primary mx-auto mb-8"></div>
          <p className="text-xl text-foreground-muted max-w-2xl mx-auto">
            A showcase of my recent work and the technologies I've used to build them
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card 
              key={index} 
              className={`shadow-card hover:shadow-card-hover transition-smooth hover:-translate-y-2 group overflow-hidden ${
                project.featured ? 'lg:col-span-2' : ''
              }`}
            >
              <div className="aspect-video overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-smooth"
                />
              </div>
              
              <CardHeader className="pb-4">
                <div className="flex items-center justify-between">
                  <h3 className="text-2xl font-bold group-hover:text-primary transition-smooth">
                    {project.title}
                  </h3>
                  <div className="flex space-x-2">
                    <Button size="sm" variant="secondary" className="p-2">
                      <ExternalLink className="h-4 w-4" />
                    </Button>
                    <Button size="sm" variant="secondary" className="p-2">
                      <Github className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </CardHeader>

              <CardContent>
                <p className="text-foreground-muted mb-6 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, techIndex) => (
                    <Badge key={techIndex} variant="secondary" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>

                <div className="flex space-x-3">
                  <Button className="flex-1">
                    <ExternalLink className="h-4 w-4 mr-2" />
                    Live Demo
                  </Button>
                  <Button variant="secondary" className="flex-1">
                    <Github className="h-4 w-4 mr-2" />
                    Source Code
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button variant="secondary" size="lg" className="transition-smooth hover:scale-105">
            <Github className="h-5 w-5 mr-2" />
            View All Projects on GitHub
          </Button>
        </div>
      </div>
    </section>
  );
}