import { Brain, Target, Wallet, BarChart3, MessageSquare, Shield } from "lucide-react";

const features = [
  {
    icon: Brain,
    title: "AI Career Navigator",
    description: "Get personalized country, course, and university recommendations based on your profile, interests, and budget.",
    gradient: "gradient-primary",
  },
  {
    icon: Target,
    title: "Admission Predictor",
    description: "Know your chances before you apply. Our AI analyzes thousands of data points to predict admission probability.",
    gradient: "gradient-accent",
  },
  {
    icon: BarChart3,
    title: "ROI & Salary Simulator",
    description: "Simulate your future earnings, compare universities by ROI, and make data-driven decisions.",
    gradient: "gradient-primary",
  },
  {
    icon: Wallet,
    title: "Smart Loan Engine",
    description: "AI-matched loan offers with real-time eligibility, EMI calculator, and risk assessment — all in seconds.",
    gradient: "gradient-warm",
  },
  {
    icon: MessageSquare,
    title: "AI Mentor Chatbot",
    description: "24/7 conversational guidance for applications, SOPs, visa prep, and loan queries powered by advanced LLMs.",
    gradient: "gradient-accent",
  },
  {
    icon: Shield,
    title: "Trust & Confidence Score",
    description: "Our unique AI Readiness Score and Loan Confidence Indicator help you feel secure about every decision.",
    gradient: "gradient-primary",
  },
];

const FeaturesSection = () => (
  <section className="py-24 relative">
    <div className="container mx-auto px-4">
      <div className="text-center mb-16 animate-fade-in">
        <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
          Everything You Need, <span className="gradient-text">AI-Powered</span>
        </h2>
        <p className="text-muted-foreground max-w-xl mx-auto">
          Six intelligent modules working together to take you from exploration to enrollment.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {features.map((f) => (
          <div
            key={f.title}
            className="group card-glass rounded-2xl p-6 hover:border-primary/30 transition-all duration-300 hover:-translate-y-1"
          >
            <div className={`w-12 h-12 rounded-xl ${f.gradient} flex items-center justify-center mb-4`}>
              <f.icon className="w-6 h-6 text-primary-foreground" />
            </div>
            <h3 className="font-heading text-lg font-semibold mb-2">{f.title}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">{f.description}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default FeaturesSection;
