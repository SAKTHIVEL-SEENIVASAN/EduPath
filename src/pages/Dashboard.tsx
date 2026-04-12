import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import {
  Brain, GraduationCap, Target, Wallet, FileText, Clock,
  CheckCircle, Circle, ArrowRight, TrendingUp, Users, Zap,
} from "lucide-react";

const readinessItems = [
  { label: "Profile Complete", score: 90, done: true },
  { label: "Test Scores Uploaded", score: 100, done: true },
  { label: "University Shortlist", score: 60, done: false },
  { label: "SOP Draft", score: 30, done: false },
  { label: "Loan Pre-Approval", score: 0, done: false },
];

const timeline = [
  { month: "Jan 2026", task: "Research Universities", status: "done" },
  { month: "Feb 2026", task: "Prepare for GRE/IELTS", status: "done" },
  { month: "Mar 2026", task: "Finalize Shortlist", status: "current" },
  { month: "Apr 2026", task: "Write SOPs & LORs", status: "upcoming" },
  { month: "May 2026", task: "Submit Applications", status: "upcoming" },
  { month: "Jun 2026", task: "Apply for Loans", status: "upcoming" },
  { month: "Jul 2026", task: "Visa & Pre-Departure", status: "upcoming" },
];

const Dashboard = () => {
  const overallReadiness = Math.round(readinessItems.reduce((a, b) => a + b.score, 0) / readinessItems.length);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          <div className="mb-8">
            <h1 className="font-heading text-3xl font-bold mb-1">Welcome back, Priya! 👋</h1>
            <p className="text-muted-foreground">Here's your AI-powered journey dashboard.</p>
          </div>

          {/* Top Cards */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            {[
              { icon: Brain, label: "AI Readiness", value: `${overallReadiness}%`, color: "text-primary" },
              { icon: Target, label: "Stage", value: "Planning", color: "text-accent" },
              { icon: GraduationCap, label: "Shortlisted", value: "5 Unis", color: "text-info" },
              { icon: Wallet, label: "Loan Status", value: "Pre-Qualified", color: "text-success" },
            ].map((c) => (
              <div key={c.label} className="card-glass rounded-2xl p-5">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-muted-foreground">{c.label}</span>
                  <c.icon className={`w-5 h-5 ${c.color}`} />
                </div>
                <div className="font-heading text-2xl font-bold">{c.value}</div>
              </div>
            ))}
          </div>

          <div className="grid lg:grid-cols-3 gap-6">
            {/* Readiness Score */}
            <div className="card-glass rounded-2xl p-6">
              <h3 className="font-heading text-lg font-semibold mb-4 flex items-center gap-2">
                <Zap className="w-5 h-5 text-primary" /> AI Readiness Score
              </h3>
              <div className="relative w-32 h-32 mx-auto mb-6">
                <svg viewBox="0 0 36 36" className="w-full h-full -rotate-90">
                  <circle cx="18" cy="18" r="16" fill="none" stroke="hsl(var(--muted))" strokeWidth="2.5" />
                  <circle
                    cx="18" cy="18" r="16" fill="none"
                    stroke="hsl(var(--primary))" strokeWidth="2.5"
                    strokeDasharray={`${overallReadiness} ${100 - overallReadiness}`}
                    strokeLinecap="round"
                  />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="font-heading text-2xl font-bold gradient-text">{overallReadiness}%</span>
                </div>
              </div>
              <div className="space-y-3">
                {readinessItems.map((item) => (
                  <div key={item.label} className="flex items-center gap-3">
                    {item.done ? (
                      <CheckCircle className="w-4 h-4 text-success shrink-0" />
                    ) : (
                      <Circle className="w-4 h-4 text-muted-foreground shrink-0" />
                    )}
                    <span className="text-sm flex-1">{item.label}</span>
                    <span className="text-xs text-muted-foreground">{item.score}%</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Timeline */}
            <div className="card-glass rounded-2xl p-6">
              <h3 className="font-heading text-lg font-semibold mb-4 flex items-center gap-2">
                <Clock className="w-5 h-5 text-info" /> Application Timeline
              </h3>
              <div className="space-y-4">
                {timeline.map((t) => (
                  <div key={t.month} className="flex items-start gap-3">
                    <div className={`w-3 h-3 rounded-full mt-1.5 shrink-0 ${
                      t.status === "done" ? "bg-success" : t.status === "current" ? "bg-primary animate-pulse-slow" : "bg-muted"
                    }`} />
                    <div>
                      <div className="text-xs text-muted-foreground">{t.month}</div>
                      <div className={`text-sm font-medium ${t.status === "current" ? "text-primary" : ""}`}>
                        {t.task}
                      </div>
                    </div>
                    {t.status === "done" && (
                      <CheckCircle className="w-4 h-4 text-success ml-auto shrink-0" />
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Right Column */}
            <div className="space-y-4">
              <div className="card-glass rounded-2xl p-6">
                <h3 className="font-heading text-lg font-semibold mb-3 flex items-center gap-2">
                  <Users className="w-5 h-5 text-accent" /> Peer Mentors
                </h3>
                <div className="space-y-3">
                  {[
                    { name: "Rahul S.", uni: "UofT '24", field: "CS" },
                    { name: "Aisha K.", uni: "TU Munich '23", field: "Data Science" },
                  ].map((m) => (
                    <div key={m.name} className="flex items-center gap-3 p-3 rounded-xl bg-secondary/50">
                      <div className="w-9 h-9 rounded-full gradient-accent flex items-center justify-center text-sm font-bold text-accent-foreground">
                        {m.name[0]}
                      </div>
                      <div className="flex-1">
                        <div className="text-sm font-semibold">{m.name}</div>
                        <div className="text-xs text-muted-foreground">{m.uni} • {m.field}</div>
                      </div>
                      <ArrowRight className="w-4 h-4 text-muted-foreground" />
                    </div>
                  ))}
                </div>
              </div>

              <div className="card-glass rounded-2xl p-6">
                <h3 className="font-heading text-lg font-semibold mb-3 flex items-center gap-2">
                  <TrendingUp className="w-5 h-5 text-warning" /> Smart Nudges
                </h3>
                <div className="space-y-2">
                  <div className="p-3 rounded-xl bg-primary/5 border border-primary/20 text-sm">
                    🎯 <strong>GRE tip:</strong> Your mock scores suggest a 310+ is achievable. Focus on Quant!
                  </div>
                  <div className="p-3 rounded-xl bg-warning/5 border border-warning/20 text-sm">
                    ⏰ <strong>Deadline:</strong> UofT Fall 2026 applications close in 45 days.
                  </div>
                  <div className="p-3 rounded-xl bg-success/5 border border-success/20 text-sm">
                    💰 <strong>Loan alert:</strong> SBI reduced rates to 8.5% for study abroad.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Dashboard;
