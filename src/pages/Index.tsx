import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import FeaturesSection from "@/components/FeaturesSection";
import JourneySection from "@/components/JourneySection";
import Footer from "@/components/Footer";

const Index = () => (
  <div className="min-h-screen bg-background">
    <Navbar />
    <HeroSection />
    <FeaturesSection />
    <JourneySection />

<div className="py-16 text-center">
  <h2 className="text-3xl font-bold mb-6">What We Built in 48 Hours</h2>

  <div className="max-w-xl mx-auto text-left text-sm space-y-2">
    <p>✔ AI Career Navigator (GPT-based)</p>
    <p>✔ Loan Confidence Index (Rule-based)</p>
    <p>✔ University Matcher (500+ dataset)</p>
    <p>✔ EMI + Risk Simulator</p>
    <p>✔ Dashboard with AI tracking</p>
  </div>
</div>    

    {/* 🔥 NEW TEAM SECTION */}
    <div className="py-16 text-center">
  <h2 className="text-3xl font-bold mb-10">Meet the Team</h2>

  <div className="flex flex-col md:flex-row justify-center items-center gap-12">

    <div className="card-glass p-6 rounded-2xl w-60">
      <img src="/sakthi.jpeg" className="w-28 h-28 rounded-full mx-auto mb-4 object-cover" />
      <h3 className="font-semibold text-lg">S.M. Sakthivel</h3>
      <p className="text-sm text-muted-foreground">AI/ML Engineer</p>
    </div>

    <div className="card-glass p-6 rounded-2xl w-60">
      <img src="/komal.png" className="w-28 h-28 rounded-full mx-auto mb-4 object-cover" />
      <h3 className="font-semibold text-lg">Komal Kumavat</h3>
      <p className="text-sm text-muted-foreground">Full Stack Developer</p>
    </div>

  </div>
</div>

    <Footer />
  </div>
);

export default Index;