import { ArrowRight, Brain, GraduationCap, TrendingUp, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import heroBg from "@/assets/hero-bg.jpg";

const stats = [
  { value: "50K+", label: "Students Guided" },
  { value: "500+", label: "Universities" },
  { value: "₹2000Cr+", label: "Loans Facilitated" },
  { value: "94%", label: "Approval Rate" },
];

const HeroSection = () => (
  <section className="relative min-h-screen flex items-center pt-16 overflow-hidden">
    <div
      className="absolute inset-0 opacity-40"
      style={{
        backgroundImage: `url(${heroBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    />
    <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/80 to-background" />

    <div className="container mx-auto px-4 relative z-10">
      <div className="max-w-3xl mx-auto text-center animate-slide-up">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/30 bg-primary/5 text-primary text-sm font-medium mb-6">
          <Brain className="w-4 h-4" />
          AI-Powered Education Platform
        </div>

        <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl font-bold leading-tight mb-6">
          Your AI Guide to{" "}
          <span className="gradient-text">Higher Education</span>
          {" "}& Smart Loans
        </h1>

        <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
          From discovering the perfect university to securing the best education loan — EduPath's AI navigates every step of your journey with confidence.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
          <Link to="/career">
            <Button size="lg" className="gradient-primary text-primary-foreground font-semibold text-base px-8 glow-primary">
              Explore Careers <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </Link>
          <Link to="/loan">
            <Button size="lg" variant="outline" className="border-border text-foreground font-semibold text-base px-8">
              Calculate Your Loan
            </Button>
          </Link>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((s) => (
            <div key={s.label} className="card-glass rounded-xl p-4">
              <div className="font-heading text-2xl font-bold gradient-text">{s.value}</div>
              <div className="text-sm text-muted-foreground mt-1">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default HeroSection;
