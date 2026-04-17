import { Brain, Shield, Wallet, BarChart3, FileText, Search } from "lucide-react";

const features = [
  {
    icon: Brain,
    title: "AI Career Navigator",
    description: "Personalized university and course recommendations using AI reasoning based on your profile.",
    gradient: "gradient-primary",
  },
  {
    icon: Shield,
    title: "Loan Confidence Index (LCI)",
    description: "AI scoring system that evaluates loan eligibility using academic, financial, and behavioral signals with explainability.",
    gradient: "gradient-accent",
  },
  {
    icon: Wallet,
    title: "Safe Apply Mode",
    description: "Pre-qualification without affecting your credit score — reduces risk and improves decision confidence.",
    gradient: "gradient-warm",
  },
  {
    icon: BarChart3,
    title: "EMI & ROI Simulator",
    description: "Simulate long-term repayment, salary growth, and financial stress scenarios before committing.",
    gradient: "gradient-primary",
  },
  {
    icon: Search,
    title: "University Matcher",
    description: "Find best-fit universities from 500+ dataset based on profile, budget, and ROI.",
    gradient: "gradient-accent",
  },
  {
    icon: FileText,
    title: "AI Document Assistant",
    description: "Auto-fill and extract student data using OCR and NLP (POC level implementation).",
    gradient: "gradient-primary",
  },
];

const FeaturesSection = () => (
  <section className="py-24">
    <div className="container mx-auto px-4 text-center mb-16">
      <h2 className="text-3xl font-bold mb-4">
        Core <span className="gradient-text">AI Modules</span>
      </h2>
      <p className="text-muted-foreground max-w-xl mx-auto">
        Built to guide students across the full lifecycle — not just one step.
      </p>
    </div>

    <div className="container mx-auto px-4 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
      {features.map((f) => (
        <div key={f.title} className="card-glass p-6 rounded-2xl">
          <div className={`w-12 h-12 ${f.gradient} rounded-xl flex items-center justify-center mb-4`}>
            <f.icon className="w-6 h-6 text-white" />
          </div>
          <h3 className="font-semibold mb-2">{f.title}</h3>
          <p className="text-sm text-muted-foreground">{f.description}</p>
        </div>
      ))}
    </div>
  </section>
);

export default FeaturesSection;