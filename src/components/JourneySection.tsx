import { Search, ClipboardList, FileCheck, Plane, CheckCircle } from "lucide-react";

const stages = [
  { icon: Search, label: "Explore", desc: "AI discovers best-fit universities & courses", color: "text-info" },
  { icon: ClipboardList, label: "Plan", desc: "Timeline, budget, and SOP generation", color: "text-primary" },
  { icon: FileCheck, label: "Apply & Fund", desc: "Application tracking + smart loan matching", color: "text-accent" },
  { icon: Plane, label: "Pre-Departure", desc: "Visa prep, forex, accommodation AI", color: "text-warning" },
  { icon: CheckCircle, label: "Thrive & Repay", desc: "Career support + repayment optimizer", color: "text-success" },
];

const JourneySection = () => (
  <section className="py-24 bg-secondary/30">
    <div className="container mx-auto px-4">
      <div className="text-center mb-16">
        <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
          Your <span className="gradient-text">Complete Journey</span>
        </h2>
        <p className="text-muted-foreground max-w-xl mx-auto">
          AI guides you at every stage — from the first search to your first salary.
        </p>
      </div>

      <div className="relative max-w-4xl mx-auto">
        <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-border -translate-x-1/2" />

        <div className="space-y-12">
          {stages.map((s, i) => (
            <div
              key={s.label}
              className={`flex items-center gap-6 ${i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}
            >
              <div className={`flex-1 card-glass rounded-2xl p-6 ${i % 2 === 0 ? "md:text-right" : ""}`}>
                <h3 className="font-heading text-lg font-semibold mb-1">{s.label}</h3>
                <p className="text-sm text-muted-foreground">{s.desc}</p>
              </div>

              <div className="hidden md:flex w-14 h-14 rounded-full bg-secondary border-2 border-border items-center justify-center shrink-0 z-10">
                <s.icon className={`w-6 h-6 ${s.color}`} />
              </div>

              <div className="flex-1 hidden md:block" />
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default JourneySection;
