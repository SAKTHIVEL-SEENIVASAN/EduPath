import { Search, ClipboardList, FileCheck, Plane, CheckCircle } from "lucide-react";

const stages = [
  { icon: Search, label: "Explore", desc: "AI career discovery using profile and market trends" },
  { icon: ClipboardList, label: "Plan", desc: "University matching and application planning" },
  { icon: FileCheck, label: "Fund", desc: "LCI score, safe apply mode, and EMI simulation" },
  { icon: Plane, label: "Depart", desc: "Visa and pre-departure preparation" },
  { icon: CheckCircle, label: "Thrive", desc: "Career support and loan repayment optimization" },
];

const JourneySection = () => (
  <section className="py-24 bg-secondary/30 text-center">
    <h2 className="text-3xl font-bold mb-4">
      Complete <span className="gradient-text">Student Journey</span>
    </h2>

    <p className="text-muted-foreground max-w-xl mx-auto mb-12">
      We track students across all 5 stages — enabling better predictions and smarter loan decisions.
    </p>

    <div className="grid md:grid-cols-5 gap-6 max-w-5xl mx-auto">
      {stages.map((s) => (
        <div key={s.label} className="card-glass p-6 rounded-xl">
          <s.icon className="mx-auto mb-3" />
          <h3 className="font-semibold">{s.label}</h3>
          <p className="text-sm text-muted-foreground">{s.desc}</p>
        </div>
      ))}
    </div>
  </section>
);

export default JourneySection;