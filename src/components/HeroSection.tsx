
import { Button } from "@/components/ui/button";
import { ArrowRight, Brain, Target, Zap } from "lucide-react";

const HeroSection = () => {
  return (
    <section id="home" className="pt-16 bg-[#0a0119] min-h-screen flex items-center">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <div>
            {/* Main Headline */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              Custom AI Agents that
              <span className="block text-[#f159b2]">Learn, Act, and Deliver</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
              Geisel Software builds agentic AI systems that don't just analyze data; they decide, act, and optimize real-world outcomes.
            </p>

            <p className="text-lg text-gray-400 mb-12">
              We design AI agents that don't just process data—they make decisions, learn from experience, and autonomously pursue your business goals. From robotics and automation to intelligent process optimization, we build systems that work for you.
            </p>

            {/* CTA Button */}
            <div className="mb-12">
              <Button size="lg" className="bg-[#f159b2] hover:bg-[#f159b2]/80 text-white text-lg px-8 py-4 group">
                Book a 30-Minute Discovery Call
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>

            {/* Key Stats */}
            <div className="bg-[#51B3EA]/10 border border-[#51B3EA]/20 rounded-2xl p-8">
              <p className="text-lg font-semibold text-white mb-4">
                Companies that deploy multiagent AI systems see up to a
              </p>
              <p className="text-4xl font-bold text-[#dcf448]">30% increase</p>
              <p className="text-lg text-gray-300">in operational efficiency</p>
            </div>
          </div>

          {/* Right Column - AI Agent Visual */}
          <div className="relative">
            <div className="relative">
              <img 
                src="/lovable-uploads/159c400b-de89-4de7-994b-288bb2588d00.png" 
                alt="AI Agent Technology" 
                className="w-full h-auto rounded-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a0119]/50 to-transparent rounded-2xl"></div>
            </div>
          </div>
        </div>

        {/* Value Props */}
        <div className="grid md:grid-cols-3 gap-8 mt-16">
          <div className="text-center">
            <div className="w-16 h-16 bg-[#f159b2]/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <Brain className="w-8 h-8 text-[#f159b2]" />
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">Intelligent Decision Making</h3>
            <p className="text-gray-400">AI that reasons, adapts, and takes action autonomously</p>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 bg-[#dcf448]/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <Target className="w-8 h-8 text-[#dcf448]" />
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">Goal-Oriented Systems</h3>
            <p className="text-gray-400">Built around your specific business objectives</p>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 bg-[#51B3EA]/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <Zap className="w-8 h-8 text-[#51B3EA]" />
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">Real-World Results</h3>
            <p className="text-gray-400">Proven systems that drive operational efficiency</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
