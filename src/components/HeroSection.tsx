
import { Button } from "@/components/ui/button";
import { ArrowRight, Brain, Target, Zap } from "lucide-react";

const HeroSection = () => {
  return (
    <section id="home" className="pt-16 bg-white min-h-screen flex items-center">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          {/* Main Headline */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
            Custom AI Agents that
            <span className="block text-orange-600">Learn, Act, and Deliver</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-4xl mx-auto leading-relaxed">
            Geisel Software builds agentic AI systems that don't just analyze data; they decide, act, and optimize real-world outcomes.
          </p>

          <p className="text-lg text-gray-700 mb-12 max-w-3xl mx-auto">
            We design AI agents that don't just process data—they make decisions, learn from experience, and autonomously pursue your business goals. From robotics and automation to intelligent process optimization, we build systems that work for you.
          </p>

          {/* CTA Button */}
          <div className="mb-16">
            <Button size="lg" className="bg-orange-600 hover:bg-orange-700 text-white text-lg px-8 py-4 group">
              Book a 30-Minute Discovery Call
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>

          {/* Key Stats */}
          <div className="bg-gray-50 rounded-2xl p-8 mb-16">
            <p className="text-lg font-semibold text-gray-900 mb-4">
              Companies that deploy multiagent AI systems see up to a
            </p>
            <p className="text-4xl font-bold text-orange-600">30% increase</p>
            <p className="text-lg text-gray-700">in operational efficiency</p>
          </div>

          {/* Value Props */}
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Brain className="w-8 h-8 text-orange-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Intelligent Decision Making</h3>
              <p className="text-gray-600">AI that reasons, adapts, and takes action autonomously</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="w-8 h-8 text-orange-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Goal-Oriented Systems</h3>
              <p className="text-gray-600">Built around your specific business objectives</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="w-8 h-8 text-orange-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Real-World Results</h3>
              <p className="text-gray-600">Proven systems that drive operational efficiency</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
