import { Sparkles } from "lucide-react";

const Footer = () => (
  <footer className="border-t border-border py-12 bg-secondary/20">
    <div className="container mx-auto px-4">
      <div className="flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <div className="w-7 h-7 rounded-lg gradient-primary flex items-center justify-center">
            <Sparkles className="w-4 h-4 text-primary-foreground" />
          </div>
          <span className="font-heading text-lg font-bold gradient-text">EduPath</span>
        </div>
        <p className="text-sm text-muted-foreground">
          © 2026 EduPath. AI-powered education financing platform for Indian students.
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
