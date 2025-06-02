
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
              AI Agents that
              <span className="block text-[#f159b2]">Solve Business Challenges</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
              Custom agentic AI systems that decide, act, and optimize real-world outcomes to increase your efficiency.
            </p>

            <p className="text-lg text-gray-400 mb-8">
              From robotics and automation to intelligent process optimization, we build AI systems that work autonomously for you.
            </p>

            {/* CTA and Stats in same row on larger screens */}
            <div className="flex flex-col lg:flex-row lg:items-center lg:gap-8 mb-12">
              <div className="mb-6 lg:mb-0">
                <Button size="lg" className="bg-[#f159b2] hover:bg-[#f159b2]/80 text-white text-lg px-8 py-4 group">
                  Book Discovery Call
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>

              {/* Compact Stats */}
              <div className="bg-[#51B3EA]/10 border border-[#51B3EA]/20 rounded-xl p-6 lg:flex-1">
                <div className="flex items-center gap-4">
                  <div>
                    <p className="text-3xl font-bold text-[#dcf448]">30%</p>
                    <p className="text-sm text-gray-300">efficiency increase</p>
                  </div>
                  <div className="text-gray-400 text-sm">
                    Companies using multiagent AI systems
                  </div>
                </div>
              </div>
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

        {/* Additional Visual Section - moved below the fold */}
        <div className="grid md:grid-cols-2 gap-8 mt-20 mb-16">
          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=600&h=400&fit=crop" 
              alt="AI Robotics Technology" 
              className="w-full h-64 object-cover rounded-2xl"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0a0119]/70 to-transparent rounded-2xl flex items-end">
              <div className="p-6">
                <h3 className="text-xl font-semibold text-white mb-2">Robotics & Automation</h3>
                <p className="text-gray-300">Advanced AI systems for physical world applications</p>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1518770660439-4636190af475?w=600&h=400&fit=crop" 
              alt="AI Technology Infrastructure" 
              className="w-full h-64 object-cover rounded-2xl"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0a0119]/70 to-transparent rounded-2xl flex items-end">
              <div className="p-6">
                <h3 className="text-xl font-semibold text-white mb-2">Intelligent Systems</h3>
                <p className="text-gray-300">Custom AI solutions built for your infrastructure</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
