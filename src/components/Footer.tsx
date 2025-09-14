import { Github, Linkedin, Mail, Heart } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-background-secondary border-t border-border py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h3 className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-2">
              Alex Johnson
            </h3>
            <p className="text-foreground-muted">
              Full-Stack Developer passionate about creating amazing web experiences
            </p>
          </div>

          <div className="flex items-center space-x-6">
            <a
              href="https://github.com/alexjohnson"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground-muted hover:text-primary transition-smooth hover:scale-110"
              aria-label="GitHub"
            >
              <Github className="h-6 w-6" />
            </a>
            <a
              href="https://linkedin.com/in/alexjohnson"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground-muted hover:text-primary transition-smooth hover:scale-110"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-6 w-6" />
            </a>
            <a
              href="mailto:alex.johnson@email.com"
              className="text-foreground-muted hover:text-primary transition-smooth hover:scale-110"
              aria-label="Email"
            >
              <Mail className="h-6 w-6" />
            </a>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-border text-center">
          <p className="text-foreground-muted flex items-center justify-center">
            © {currentYear} Alex Johnson. Built with
            <Heart className="h-4 w-4 mx-2 text-red-500" />
            and modern web technologies.
          </p>
        </div>
      </div>
    </footer>
  );
}