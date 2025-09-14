import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin } from "lucide-react";

export function Experience() {
  const experiences = [
    {
      title: "Senior Full-Stack Developer",
      company: "TechCorp Solutions",
      location: "San Francisco, CA",
      duration: "2022 - Present",
      description: [
        "Led development of a microservices architecture serving 100K+ daily users",
        "Reduced application load time by 40% through performance optimization",
        "Mentored junior developers and established coding standards",
        "Built CI/CD pipelines reducing deployment time from hours to minutes"
      ],
      technologies: ["React", "Node.js", "AWS", "PostgreSQL", "Docker"]
    },
    {
      title: "Full-Stack Developer",
      company: "StartupXYZ",
      location: "Austin, TX",
      duration: "2020 - 2022",
      description: [
        "Developed MVP from concept to launch in 6 months",
        "Implemented real-time features using WebSocket technology",
        "Collaborated with design team to create pixel-perfect interfaces",
        "Increased user engagement by 60% through A/B testing"
      ],
      technologies: ["Vue.js", "Express", "MongoDB", "Redis", "Stripe"]
    },
    {
      title: "Frontend Developer",
      company: "Digital Agency Pro",
      location: "Remote",
      duration: "2019 - 2020",
      description: [
        "Built responsive websites for 20+ clients across various industries",
        "Improved website accessibility scores by implementing WCAG guidelines",
        "Integrated third-party APIs and payment gateways",
        "Optimized websites for SEO resulting in 30% increase in organic traffic"
      ],
      technologies: ["JavaScript", "React", "SCSS", "WordPress", "PHP"]
    },
    {
      title: "Junior Web Developer",
      company: "Local Web Solutions",
      location: "Denver, CO",
      duration: "2018 - 2019",
      description: [
        "Assisted in developing e-commerce platforms for small businesses",
        "Fixed bugs and implemented new features in existing applications",
        "Learned version control and collaborative development practices",
        "Participated in code reviews and agile development processes"
      ],
      technologies: ["HTML", "CSS", "JavaScript", "jQuery", "Bootstrap"]
    }
  ];

  return (
    <section id="experience" className="py-20 bg-background-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
            Work Experience
          </h2>
          <div className="w-24 h-1 bg-gradient-primary mx-auto mb-8"></div>
          <p className="text-xl text-foreground-muted max-w-2xl mx-auto">
            My professional journey and the impact I've made along the way
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-4 md:left-1/2 transform md:-translate-x-px top-0 bottom-0 w-0.5 bg-gradient-primary"></div>

            {experiences.map((exp, index) => (
              <div key={index} className="relative mb-12 last:mb-0">
                {/* Timeline Dot */}
                <div className="absolute left-2 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 bg-primary rounded-full border-4 border-background shadow-lg"></div>

                {/* Content */}
                <div className={`ml-12 md:ml-0 md:w-1/2 ${index % 2 === 0 ? 'md:pr-8' : 'md:ml-auto md:pl-8'}`}>
                  <Card className="shadow-card hover:shadow-card-hover transition-smooth">
                    <CardContent className="p-8">
                      <div className="mb-4">
                        <h3 className="text-2xl font-bold text-foreground mb-2">{exp.title}</h3>
                        <h4 className="text-xl font-semibold text-primary mb-3">{exp.company}</h4>
                        
                        <div className="flex flex-wrap items-center gap-4 text-foreground-muted mb-4">
                          <div className="flex items-center">
                            <Calendar className="h-4 w-4 mr-2" />
                            {exp.duration}
                          </div>
                          <div className="flex items-center">
                            <MapPin className="h-4 w-4 mr-2" />
                            {exp.location}
                          </div>
                        </div>
                      </div>

                      <ul className="space-y-2 mb-6">
                        {exp.description.map((item, itemIndex) => (
                          <li key={itemIndex} className="text-foreground-muted flex items-start">
                            <span className="text-primary mr-2 mt-2">•</span>
                            {item}
                          </li>
                        ))}
                      </ul>

                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech, techIndex) => (
                          <Badge key={techIndex} variant="secondary" className="text-sm">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}