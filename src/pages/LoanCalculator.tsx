import { useState, useMemo } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Wallet, Shield, TrendingUp, AlertTriangle, CheckCircle, Info } from "lucide-react";
import { Progress } from "@/components/ui/progress";

const LoanCalculator = () => {
  const [amount, setAmount] = useState(25);
  const [rate, setRate] = useState(9.5);
  const [tenure, setTenure] = useState(10);
  const [moratorium, setMoratorium] = useState(2);

  const { emi, totalPayable, totalInterest, riskLevel, riskScore } = useMemo(() => {
    const principal = amount * 100000;
    const monthlyRate = rate / 100 / 12;
    const months = tenure * 12;
    const emi = (principal * monthlyRate * Math.pow(1 + monthlyRate, months)) / (Math.pow(1 + monthlyRate, months) - 1);
    const totalPayable = emi * months;
    const totalInterest = totalPayable - principal;
    const riskScore = Math.min(100, Math.max(10, 100 - (amount > 40 ? 30 : amount > 20 ? 15 : 0) - (rate > 11 ? 20 : rate > 9 ? 10 : 0) - (tenure > 12 ? 10 : 0)));
    const riskLevel = riskScore > 70 ? "Safe" : riskScore > 40 ? "Medium" : "Risky";
    return { emi, totalPayable, totalInterest, riskLevel, riskScore };
  }, [amount, rate, tenure]);

  const formatCurrency = (n: number) =>
    new Intl.NumberFormat("en-IN", { style: "currency", currency: "INR", maximumFractionDigits: 0 }).format(n);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/30 bg-primary/5 text-primary text-sm font-medium mb-4">
              <Wallet className="w-4 h-4" /> Smart Loan Engine
            </div>
            <h1 className="font-heading text-3xl md:text-4xl font-bold mb-3">
              Education Loan <span className="gradient-text">Calculator</span>
            </h1>
            <p className="text-muted-foreground max-w-lg mx-auto">
              Calculate EMIs, assess risk, and find the best loan plan with AI-powered insights.
            </p>
          </div>

          <div className="max-w-5xl mx-auto grid lg:grid-cols-5 gap-8">
            {/* Input Panel */}
            <div className="lg:col-span-3 card-glass rounded-2xl p-8 space-y-8">
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <Label className="text-base">Loan Amount</Label>
                  <span className="font-heading text-xl font-bold gradient-text">₹{amount} Lakhs</span>
                </div>
                <Slider value={[amount]} onValueChange={([v]) => setAmount(v)} min={1} max={100} step={1} />
                <div className="flex justify-between text-xs text-muted-foreground">
                  <span>₹1L</span><span>₹100L</span>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <Label className="text-base">Interest Rate</Label>
                  <span className="font-heading text-xl font-bold">{rate}%</span>
                </div>
                <Slider value={[rate]} onValueChange={([v]) => setRate(v)} min={6} max={16} step={0.25} />
                <div className="flex justify-between text-xs text-muted-foreground">
                  <span>6%</span><span>16%</span>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <Label className="text-base">Tenure (Years)</Label>
                  <span className="font-heading text-xl font-bold">{tenure} years</span>
                </div>
                <Slider value={[tenure]} onValueChange={([v]) => setTenure(v)} min={3} max={20} step={1} />
              </div>

              <div className="space-y-2">
                <Label>Moratorium Period</Label>
                <Select value={String(moratorium)} onValueChange={(v) => setMoratorium(Number(v))}>
                  <SelectTrigger><SelectValue /></SelectTrigger>
                  <SelectContent>
                    <SelectItem value="0">No moratorium</SelectItem>
                    <SelectItem value="1">1 year</SelectItem>
                    <SelectItem value="2">2 years</SelectItem>
                    <SelectItem value="3">3 years</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            {/* Results Panel */}
            <div className="lg:col-span-2 space-y-4">
              <div className="card-glass rounded-2xl p-6 text-center">
                <div className="text-sm text-muted-foreground mb-1">Monthly EMI</div>
                <div className="font-heading text-3xl font-bold gradient-text">{formatCurrency(emi)}</div>
                <div className="text-xs text-muted-foreground mt-1">after {moratorium}yr moratorium</div>
              </div>

              <div className="card-glass rounded-2xl p-6 space-y-4">
                <div className="flex justify-between">
                  <span className="text-sm text-muted-foreground">Principal</span>
                  <span className="text-sm font-semibold">{formatCurrency(amount * 100000)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-muted-foreground">Total Interest</span>
                  <span className="text-sm font-semibold text-warning">{formatCurrency(totalInterest)}</span>
                </div>
                <div className="border-t border-border pt-3 flex justify-between">
                  <span className="text-sm font-semibold">Total Payable</span>
                  <span className="text-sm font-bold">{formatCurrency(totalPayable)}</span>
                </div>
              </div>

              <div className="card-glass rounded-2xl p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-sm font-semibold flex items-center gap-1.5">
                    <Shield className="w-4 h-4" /> Risk Assessment
                  </span>
                  <span className={`text-sm font-bold ${
                    riskLevel === "Safe" ? "text-success" : riskLevel === "Medium" ? "text-warning" : "text-destructive"
                  }`}>
                    {riskLevel}
                  </span>
                </div>
                <Progress value={riskScore} className="h-2 mb-2" />
                <p className="text-xs text-muted-foreground">
                  {riskLevel === "Safe"
                    ? "Your loan parameters look healthy. Great repayment outlook!"
                    : riskLevel === "Medium"
                    ? "Moderate risk. Consider reducing amount or increasing tenure."
                    : "High risk profile. We recommend exploring scholarships first."}
                </p>
              </div>

              <div className="card-glass rounded-2xl p-6 space-y-3">
                <h4 className="text-sm font-semibold flex items-center gap-1.5">
                  <TrendingUp className="w-4 h-4 text-primary" /> AI Life Simulator
                </h4>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Expected Salary (Year 1)</span>
                    <span className="font-semibold text-success">₹8.5 LPA</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">EMI to Income Ratio</span>
                    <span className="font-semibold">{((emi * 12) / 850000 * 100).toFixed(0)}%</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Loan Confidence</span>
                    <span className="font-semibold text-primary flex items-center gap-1">
                      <CheckCircle className="w-3.5 h-3.5" /> High
                    </span>
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

export default LoanCalculator;
