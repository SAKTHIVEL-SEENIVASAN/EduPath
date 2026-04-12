import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Brain, GraduationCap, MapPin, TrendingUp, Star, Clock } from "lucide-react";
import { Progress } from "@/components/ui/progress";

interface University {
  name: string;
  country: string;
  course: string;
  admissionChance: number;
  avgSalary: string;
  tuition: string;
  ranking: number;
}

const mockResults: University[] = [
  { name: "University of Toronto", country: "Canada", course: "MS Computer Science", admissionChance: 78, avgSalary: "₹45 LPA", tuition: "₹22 Lakhs/yr", ranking: 21 },
  { name: "TU Munich", country: "Germany", course: "MS Data Science", admissionChance: 65, avgSalary: "₹38 LPA", tuition: "₹2 Lakhs/yr", ranking: 50 },
  { name: "University of Melbourne", country: "Australia", course: "MS AI & ML", admissionChance: 82, avgSalary: "₹40 LPA", tuition: "₹28 Lakhs/yr", ranking: 33 },
  { name: "IIT Bombay", country: "India", course: "MTech CS", admissionChance: 35, avgSalary: "₹30 LPA", tuition: "₹4 Lakhs/yr", ranking: 149 },
  { name: "Georgia Tech", country: "USA", course: "MS Computer Science", admissionChance: 42, avgSalary: "₹65 LPA", tuition: "₹35 Lakhs/yr", ranking: 8 },
];

const CareerNavigator = () => {
  const [results, setResults] = useState<University[] | null>(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setResults(mockResults);
      setLoading(false);
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/30 bg-primary/5 text-primary text-sm font-medium mb-4">
              <Brain className="w-4 h-4" /> AI Career Navigator
            </div>
            <h1 className="font-heading text-3xl md:text-4xl font-bold mb-3">
              Find Your <span className="gradient-text">Perfect Path</span>
            </h1>
            <p className="text-muted-foreground max-w-lg mx-auto">
              Tell us about yourself and our AI will recommend the best universities, courses, and countries for you.
            </p>
          </div>

          <form
            onSubmit={handleSubmit}
            className="max-w-2xl mx-auto card-glass rounded-2xl p-8 space-y-6 mb-12"
          >
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label>Degree Level</Label>
                <Select defaultValue="masters">
                  <SelectTrigger><SelectValue /></SelectTrigger>
                  <SelectContent>
                    <SelectItem value="bachelors">Bachelor's</SelectItem>
                    <SelectItem value="masters">Master's</SelectItem>
                    <SelectItem value="phd">PhD</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label>Field of Interest</Label>
                <Select defaultValue="cs">
                  <SelectTrigger><SelectValue /></SelectTrigger>
                  <SelectContent>
                    <SelectItem value="cs">Computer Science</SelectItem>
                    <SelectItem value="business">Business / MBA</SelectItem>
                    <SelectItem value="engineering">Engineering</SelectItem>
                    <SelectItem value="medicine">Medicine</SelectItem>
                    <SelectItem value="design">Design</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label>GPA / Percentage</Label>
                <Input type="text" placeholder="e.g. 8.5 / 85%" defaultValue="8.2" />
              </div>
              <div className="space-y-2">
                <Label>Budget (₹ Lakhs / Year)</Label>
                <Input type="text" placeholder="e.g. 25" defaultValue="25" />
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label>Preferred Country</Label>
                <Select defaultValue="any">
                  <SelectTrigger><SelectValue /></SelectTrigger>
                  <SelectContent>
                    <SelectItem value="any">Any / Open to All</SelectItem>
                    <SelectItem value="usa">USA</SelectItem>
                    <SelectItem value="canada">Canada</SelectItem>
                    <SelectItem value="uk">UK</SelectItem>
                    <SelectItem value="germany">Germany</SelectItem>
                    <SelectItem value="australia">Australia</SelectItem>
                    <SelectItem value="india">India</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label>Test Score (GRE / GMAT)</Label>
                <Input type="text" placeholder="e.g. GRE 320" defaultValue="318" />
              </div>
            </div>

            <Button
              type="submit"
              className="w-full gradient-primary text-primary-foreground font-semibold text-base py-6 glow-primary"
              disabled={loading}
            >
              {loading ? "AI is analyzing..." : "Get AI Recommendations"}
            </Button>
          </form>

          {results && (
            <div className="max-w-4xl mx-auto space-y-4 animate-slide-up">
              <h2 className="font-heading text-2xl font-bold mb-6 text-center">
                Your AI-Curated Matches
              </h2>
              {results.map((u) => (
                <div key={u.name} className="card-glass rounded-2xl p-6 hover:border-primary/20 transition-colors">
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <GraduationCap className="w-5 h-5 text-primary" />
                        <h3 className="font-heading text-lg font-semibold">{u.name}</h3>
                      </div>
                      <div className="flex flex-wrap items-center gap-3 text-sm text-muted-foreground">
                        <span className="flex items-center gap-1"><MapPin className="w-3.5 h-3.5" />{u.country}</span>
                        <span>{u.course}</span>
                        <span className="flex items-center gap-1"><Star className="w-3.5 h-3.5 text-warning" />#{u.ranking}</span>
                      </div>
                    </div>

                    <div className="flex items-center gap-6">
                      <div className="text-center">
                        <div className="text-xs text-muted-foreground mb-1">Admission</div>
                        <div className="w-16">
                          <Progress value={u.admissionChance} className="h-2" />
                          <span className="text-xs font-semibold text-primary">{u.admissionChance}%</span>
                        </div>
                      </div>
                      <div className="text-center">
                        <div className="text-xs text-muted-foreground">Avg. Salary</div>
                        <div className="text-sm font-semibold text-success">{u.avgSalary}</div>
                      </div>
                      <div className="text-center">
                        <div className="text-xs text-muted-foreground">Tuition</div>
                        <div className="text-sm font-semibold">{u.tuition}</div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default CareerNavigator;
