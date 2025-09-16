import { Card, CardContent } from "@/components/ui/card";
import { Code, Coffee, Lightbulb } from "lucide-react";

export function About() {
  const highlights = [
    {
      icon: Code,
      title: "Clean Code Advocate",
      description: "Passionate about writing maintainable, scalable code that stands the test of time."
    },
    {
      icon: Lightbulb,
      title: "Problem Solver",
      description: "I love tackling complex challenges and finding innovative solutions."
    },
    {
      icon: Coffee,
      title: "Continuous Learner",
      description: "Always staying up-to-date with the latest technologies and best practices."
    }
  ];

  return (
    <section id="about" className="py-20 bg-background-secondary">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
              About Me
            </h2>
            <div className="w-24 h-1 bg-gradient-primary mx-auto mb-8"></div>
          </div>

            <div className="text-center">
              <p className="text-lg text-foreground-muted leading-relaxed mb-6">
                I'm an entry-level full-stack developer currently pursuing my Master's in Computer Science 
                in Software Engineering at the University of Tennessee. My passion 
                lies in building cloud-based applications, AI-powered tools, and scalable backend systems.
              </p>
              <p className="text-lg text-foreground-muted leading-relaxed mb-6">
                I specialize in Java, Python, React, Spring Boot, and AWS technologies. What excites me 
                most about development is the ability to integrate AI into practical 
                applications that solve real business problems.
              </p>
            </div>
        </div>
      </div>
    </section>
  );
}