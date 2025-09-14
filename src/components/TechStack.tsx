import { Card, CardContent } from "@/components/ui/card";
import { 
  Code2, 
  Database, 
  Globe, 
  Smartphone, 
  Cloud, 
  GitBranch,
  Terminal,
  Palette 
} from "lucide-react";

export function TechStack() {
  const technologies = [
    {
      category: "Frontend",
      icon: Globe,
      color: "text-blue-600",
      bgColor: "bg-blue-100 dark:bg-blue-900/20",
      skills: ["React", "TypeScript", "Next.js", "Tailwind CSS", "Vue.js"]
    },
    {
      category: "Backend",
      icon: Database,
      color: "text-green-600",
      bgColor: "bg-green-100 dark:bg-green-900/20",
      skills: ["Node.js", "Python", "PostgreSQL", "MongoDB", "Express"]
    },
    {
      category: "Mobile",
      icon: Smartphone,
      color: "text-purple-600",
      bgColor: "bg-purple-100 dark:bg-purple-900/20",
      skills: ["React Native", "Flutter", "iOS", "Android", "Expo"]
    },
    {
      category: "DevOps & Cloud",
      icon: Cloud,
      color: "text-orange-600",
      bgColor: "bg-orange-100 dark:bg-orange-900/20",
      skills: ["AWS", "Docker", "Kubernetes", "CI/CD", "Terraform"]
    },
    {
      category: "Tools & Version Control",
      icon: GitBranch,
      color: "text-red-600",
      bgColor: "bg-red-100 dark:bg-red-900/20",
      skills: ["Git", "GitHub", "VS Code", "Figma", "Postman"]
    },
    {
      category: "Languages",
      icon: Code2,
      color: "text-indigo-600",
      bgColor: "bg-indigo-100 dark:bg-indigo-900/20",
      skills: ["JavaScript", "TypeScript", "Python", "Go", "Rust"]
    }
  ];

  return (
    <section id="tech-stack" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
            Tech Stack
          </h2>
          <div className="w-24 h-1 bg-gradient-primary mx-auto mb-8"></div>
          <p className="text-xl text-foreground-muted max-w-2xl mx-auto">
            Here are the technologies and tools I use to bring ideas to life
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {technologies.map((tech, index) => (
            <Card 
              key={index} 
              className="shadow-card hover:shadow-card-hover transition-smooth hover:-translate-y-2 group"
            >
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <div className={`${tech.bgColor} rounded-xl p-3 mr-4 group-hover:scale-110 transition-smooth`}>
                    <tech.icon className={`h-8 w-8 ${tech.color}`} />
                  </div>
                  <h3 className="text-xl font-bold">{tech.category}</h3>
                </div>
                
                <div className="flex flex-wrap gap-2">
                  {tech.skills.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="px-3 py-2 bg-muted text-muted-foreground rounded-full text-sm font-medium hover:bg-primary-muted hover:text-primary transition-smooth cursor-default"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}