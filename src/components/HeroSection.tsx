
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const HeroSection = () => {
  return (
    <section id="home" className="pt-16 bg-[#0a0119] min-h-screen flex items-center">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <div>
            {/* Main Headline */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              Your Data Holds Untapped Potential.
              <span className="block text-[#f159b2]">We Build AI That Unleashes It.</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
              We build intelligent systems that act—autonomously, instantly, and meaningfully.
            </p>

            <p className="text-lg text-gray-400 mb-8">
              From robotics to intelligent workflows, we design AI systems that don't just analyze data—they act on it. Our agentic AI solutions make real-time decisions, adapt to change, and deliver measurable outcomes without constant oversight.
            </p>

            {/* CTA Button */}
            <div className="mb-12">
              <Button 
                size="lg" 
                className="bg-[#f159b2] hover:bg-[#f159b2]/80 text-white text-lg px-10 py-6 h-auto min-h-[4rem] rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 font-semibold border-2 border-[#f159b2] hover:border-[#f159b2]/80 group"
                onClick={() => window.open('https://calendly.com/jrrodrigues/30min', '_blank')}
              >
                <span className="text-center">
                  Book a Strategy Session and<br />Get 2-3 pilot-ready AI ideas!
                </span>
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </div>

          {/* Right Column - Multiagent AI Visual */}
          <div className="relative">
            <div className="relative">
              <img 
                src="/lovable-uploads/27dfd834-7b6d-4d2f-8013-fab67f9361c8.png" 
                alt="Multiagent AI Systems boosting operational efficiency by up to 30%" 
                className="w-full h-auto rounded-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a0119]/50 to-transparent rounded-2xl"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
