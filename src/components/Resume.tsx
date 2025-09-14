import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Download, FileText, Award, GraduationCap } from "lucide-react";

export function Resume() {
  const education = [
    {
      degree: "Bachelor of Science in Computer Science",
      school: "University of Technology",
      year: "2014 - 2018",
      gpa: "3.8/4.0"
    }
  ];

  const certifications = [
    "AWS Certified Solutions Architect",
    "Google Cloud Professional Developer",
    "MongoDB Certified Developer",
    "React Developer Certification"
  ];

  const skills = {
    "Programming Languages": ["JavaScript", "TypeScript", "Python", "Go", "Java"],
    "Frontend": ["React", "Vue.js", "Next.js", "Tailwind CSS", "SCSS"],
    "Backend": ["Node.js", "Express", "Django", "FastAPI", "GraphQL"],
    "Databases": ["PostgreSQL", "MongoDB", "Redis", "MySQL"],
    "Cloud & DevOps": ["AWS", "Docker", "Kubernetes", "CI/CD", "Terraform"]
  };

  return (
    <section id="resume" className="py-20 bg-background-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
            Resume
          </h2>
          <div className="w-24 h-1 bg-gradient-primary mx-auto mb-8"></div>
          <p className="text-xl text-foreground-muted max-w-2xl mx-auto mb-8">
            A comprehensive overview of my qualifications and achievements
          </p>
          <Button size="lg" className="transition-smooth hover:scale-105">
            <Download className="h-5 w-5 mr-2" />
            Download Resume PDF
          </Button>
        </div>

        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-8">
          {/* Education & Certifications */}
          <div className="space-y-8">
            <Card className="shadow-card">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <GraduationCap className="h-6 w-6 mr-3 text-primary" />
                  Education
                </CardTitle>
              </CardHeader>
              <CardContent>
                {education.map((edu, index) => (
                  <div key={index} className="border-l-4 border-primary-muted pl-6 pb-6 last:pb-0">
                    <h3 className="text-xl font-bold mb-2">{edu.degree}</h3>
                    <p className="text-foreground-muted mb-1">{edu.school}</p>
                    <div className="flex justify-between text-sm text-foreground-muted">
                      <span>{edu.year}</span>
                      <span>GPA: {edu.gpa}</span>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            <Card className="shadow-card">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Award className="h-6 w-6 mr-3 text-primary" />
                  Certifications
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {certifications.map((cert, index) => (
                    <li key={index} className="flex items-center">
                      <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                      <span className="text-foreground-muted">{cert}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>

          {/* Skills */}
          <Card className="shadow-card">
            <CardHeader>
              <CardTitle className="flex items-center">
                <FileText className="h-6 w-6 mr-3 text-primary" />
                Technical Skills
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {Object.entries(skills).map(([category, skillList]) => (
                  <div key={category}>
                    <h4 className="font-semibold text-lg mb-3 text-primary">{category}</h4>
                    <div className="flex flex-wrap gap-2">
                      {skillList.map((skill, index) => (
                        <span
                          key={index}
                          className="px-3 py-2 bg-muted text-muted-foreground rounded-full text-sm font-medium hover:bg-primary-muted hover:text-primary transition-smooth cursor-default"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="text-center mt-12">
          <div className="inline-flex items-center space-x-2 text-foreground-muted">
            <FileText className="h-5 w-5" />
            <span>Last updated: December 2024</span>
          </div>
        </div>
      </div>
    </section>
  );
}