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

          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <p className="text-lg text-foreground-muted leading-relaxed mb-6">
                I'm an entry-level full-stack developer currently pursuing my Master's in Computer Science 
                in Software Engineering at the University of Tennessee with a perfect 4.0 GPA. My passion 
                lies in building cloud-based applications, AI-powered tools, and scalable backend systems.
              </p>
              <p className="text-lg text-foreground-muted leading-relaxed mb-6">
                I specialize in Java, Python, React, Spring Boot, and AWS technologies. What excites me 
                most about development is the ability to integrate AI and machine learning into practical 
                applications that solve real business problems, like my timecard automation project that 
                improved payroll efficiency by 20%.
              </p>
              <p className="text-lg text-foreground-muted leading-relaxed">
                With experience in Agile methodologies and a proven ability to learn quickly and adapt 
                to new technologies, I'm passionate about collaborative development and building solutions 
                that make a meaningful impact. I'm AWS Certified and always eager to explore emerging 
                technologies in cloud computing and artificial intelligence.
              </p>
            </div>

            <div className="space-y-6">
              {highlights.map((highlight, index) => (
                <Card key={index} className="shadow-card hover:shadow-card-hover transition-smooth">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="bg-primary-muted rounded-lg p-3">
                        <highlight.icon className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-lg mb-2">{highlight.title}</h3>
                        <p className="text-foreground-muted">{highlight.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}