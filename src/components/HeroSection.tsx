
import { Button } from "@/components/ui/button";
import { ArrowRight, Zap, Target, Shield } from "lucide-react";

const HeroSection = () => {
  return (
    <section id="home" className="min-h-screen bg-gradient-to-br from-[#0a0119] via-[#1a0a2e] to-[#0a0119] flex items-center justify-center pt-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="animate-fade-in">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            Leading the Agentic AI Era
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
            Your Data Holds Untapped Potential. We Build AI That Unleashes It.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <Button size="lg" className="bg-[#f159b2] hover:bg-[#f159b2]/80 text-white text-lg px-8 py-4 group">
              Get 2-3 pilot-ready AI ideas!
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button variant="outline" size="lg" className="border-[#dcf448] text-[#dcf448] hover:bg-[#dcf448] hover:text-black text-lg px-8 py-4">
              View Our Process
            </Button>
          </div>

          {/* Key Benefits */}
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="w-16 h-16 bg-[#f159b2]/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="h-8 w-8 text-[#f159b2]" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Rapid Deployment</h3>
              <p className="text-gray-400">From discovery to production in weeks, not years</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-[#51B3EA]/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="h-8 w-8 text-[#51B3EA]" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Precision Results</h3>
              <p className="text-gray-400">AI that learns and adapts to your specific needs</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-[#dcf448]/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="h-8 w-8 text-[#dcf448]" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Enterprise Ready</h3>
              <p className="text-gray-400">Trusted by NASA and industry leaders</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
