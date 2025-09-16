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
      title: "AI Timecard Calculator",
      description: "A full-stack timecard application with Flask REST API and React/TypeScript frontend. Features AI-powered parsing of handwritten timecards using Groq AI, automated calculations, and human-in-the-loop review workflow for payroll processing.",
      image: project1Image,
      technologies: ["Flask", "React", "TypeScript", "Groq AI", "Python"],
      liveUrl: "#",
      githubUrl: "https://github.com/taha59/AI-Timecard-Calculator",
      featured: true
    },
    {
      title: "Video Streaming Webapp",
      description: "A comprehensive video streaming platform built with Spring Boot backend and Angular frontend. Features secure authentication via Auth0, AWS S3 integration for video storage, and an AI chatbot using Llama AI and Amazon Transcribe.",
      image: project2Image,
      technologies: ["Spring Boot", "Angular", "Auth0", "AWS S3", "MongoDB", "Llama AI"],
      liveUrl: "#",
      githubUrl: "https://github.com/taha59/Video-Streaming-app",
      featured: true
    },
    {
      title: "GrAPPA Rebuild (Senior Design)",
      description: "Upgraded and rigorously tested 5 GrAPPA bioinformatics tools in a Docker environment. Enhanced Python and R scripts for compatibility, implemented graph visualization with Graphviz, and created comprehensive documentation.",
      image: project3Image,
      technologies: ["Docker", "Python", "R", "Graphviz", "Bioinformatics"],
      liveUrl: "#",
      githubUrl: "#",
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