import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin } from "lucide-react";

export function Experience() {
  const experiences = [
    {
      title: "Software Developer (Freelance)",
      company: "Sneaky Squirrel (Retail)",
      location: "Remote",
      duration: "May 2024 – Aug 2024",
      description: [
        "Built and deployed a full-stack timecard application (Flask REST API + React/TypeScript) to digitize paper-based payroll tracking for a retail business",
        "Integrated Llama AI to parse scanned handwritten timecards into structured JSON, eliminating manual entry of shift data",
        "Automated daily/weekly hour calculations, replacing manual tallying and improving payroll preparation speed by ~20%",
        "Designed a human-in-the-loop review workflow where staff could edit parsed entries and trigger instant recalculations"
      ],
      technologies: ["Flask", "React", "TypeScript", "Llama AI", "Python"]
    },
    {
      title: "Software Engineer Intern",
      company: "Kindness Matters",
      location: "Remote",
      duration: "June 2024 – Aug 2024",
      description: [
        "Implemented monitoring with CloudWatch alarms and SNS to detect EC2 CPU spikes",
        "Built Lambda integration to trigger Slack alerts when thresholds were exceeded",
        "Improved system visibility and enabled prompt response to performance incidents",
        "Enhanced AWS infrastructure monitoring and alerting systems"
      ],
      technologies: ["AWS", "CloudWatch", "Lambda", "SNS", "Slack API"]
    },
    {
      title: "Software Engineer Intern",
      company: "For Students by Students",
      location: "Remote",
      duration: "Jan 2024 – April 2024",
      description: [
        "Developed and deployed an AI-powered tutoring chatbot using OpenAI's ChatGPT, integrated into an LMS discussion board",
        "Designed GraphQL APIs with a Spring Boot (Java) backend on AWS to enable seamless communication with a Vue.js frontend",
        "Implemented PII detection and a profanity filter to secure chat interactions",
        "Collaborated within a Scrum team and actively contributed to Sprint Planning, Daily Stand-ups, and Sprint Demos"
      ],
      technologies: ["Spring Boot", "Java", "Vue.js", "GraphQL", "OpenAI", "AWS"]
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