import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Download, FileText, Award, GraduationCap, Eye, X } from "lucide-react";

export function Resume() {
  const [showPreview, setShowPreview] = useState(false);
  const education = [
    {
      degree: "Master of Computer Science in Software Engineering",
      school: "University of Tennessee",
      year: "Expected Dec 2026",
      gpa: "4.0/4.0"
    },
    {
      degree: "Bachelor of Science in Computer Science",
      school: "University of Tennessee",
      year: "May 2023",
      gpa: "3.2/4.0"
    }
  ];

  const certifications = [
    "AWS Certified Solutions Architect – Associate (Expires: Jan 2027)"
  ];

  const skills = {
    "Programming Languages": ["Java", "Python", "JavaScript", "TypeScript", "C++", "C", "SQL"],
    "Frontend Frameworks": ["React", "Angular", "Vue.js"],
    "Backend & APIs": ["Spring Boot", "Flask", "RESTful APIs", "GraphQL", "Auth0"],
    "Cloud & DevOps": ["AWS", "Docker", "EC2", "S3", "CloudWatch", "Lambda"],
    "Tools & Databases": ["Git", "Eclipse", "MongoDB", "MySQL"],
    "AI & Methodologies": ["OpenAI", "Groq AI", "Amazon Transcribe", "Agile", "OOP"]
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
          <div className="flex gap-4 justify-center">
            <Button 
              size="lg" 
              className="transition-smooth hover:scale-105"
              onClick={() => {
                const link = document.createElement('a');
                link.href = '/Taha_Khan_resume.pdf';
                link.download = 'Taha_Khan_resume.pdf';
                link.click();
              }}
            >
              <Download className="h-5 w-5 mr-2" />
              Download Resume PDF
            </Button>
            <Button 
              size="lg" 
              variant="secondary"
              className="transition-smooth hover:scale-105"
              onClick={() => setShowPreview(true)}
            >
              <Eye className="h-5 w-5 mr-2" />
              Preview Resume
            </Button>
          </div>
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
            <span>Last updated: January 2025</span>
          </div>
        </div>
      </div>

      {/* Resume Preview Modal */}
      {showPreview && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-background rounded-lg shadow-xl max-w-4xl w-full max-h-[90vh] flex flex-col">
            <div className="flex items-center justify-between p-4 border-b">
              <h3 className="text-lg font-semibold">Resume Preview</h3>
              <Button 
                variant="ghost" 
                size="sm"
                onClick={() => setShowPreview(false)}
              >
                <X className="h-4 w-4" />
              </Button>
            </div>
            <div className="flex-1 overflow-hidden">
              <iframe 
                src="/Taha_Khan_resume.pdf" 
                className="w-full h-full"
                title="Resume Preview"
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
}