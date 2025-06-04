
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
              Most Businesses Collect Data.
              <span className="block text-[#f159b2]">Few Make it do Something.</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
              We build intelligent systems that act—autonomously, instantly, and meaningfully.
            </p>

            <p className="text-lg text-gray-400 mb-8">
              From robotics and automation to intelligent process optimization, we build AI systems that work autonomously for you.
            </p>

            {/* CTA and Stats in same row on larger screens */}
            <div className="flex flex-col lg:flex-row lg:items-center lg:gap-8 mb-12">
              <div className="mb-6 lg:mb-0">
                <Button size="lg" className="bg-[#f159b2] hover:bg-[#f159b2]/80 text-white text-lg px-8 py-4 group">
                  Get 2-3 pilot-ready AI ideas!
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>

              {/* Enhanced Stats */}
              <div className="bg-[#51B3EA]/10 border border-[#51B3EA]/20 rounded-xl p-6 lg:flex-1">
                <div className="flex items-center gap-4">
                  <div>
                    <p className="text-3xl font-bold text-[#dcf448]">30%</p>
                    <p className="text-sm text-gray-300">efficiency boost</p>
                  </div>
                  <div className="text-gray-300 text-sm">
                    <strong>Proven results:</strong> Companies using multiagent AI systems see 30% efficiency increases within 90 days
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Multiagent AI Visual */}
          <div className="relative">
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1605810230434-7631ac76ec81?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
                alt="Multiagent AI Systems - Connected displays showing collaborative AI agents" 
                className="w-full h-auto rounded-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a0119]/50 to-transparent rounded-2xl"></div>
            </div>
          </div>
        </div>

        {/* Value Props - moved up to be above the fold */}
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
