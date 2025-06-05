
import { Button } from "@/components/ui/button";
import { Shield, Zap, Target, CheckCircle } from "lucide-react";

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-[#0a0119]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-12">
            Leading the Agentic AI Era
          </h2>
          
          {/* Trust Section with NASA Logo */}
          <div className="bg-white rounded-2xl p-8 mb-8">
            <div className="flex items-center justify-center mb-4">
              <img 
                src="/lovable-uploads/972f9b43-19f5-4db4-a3a4-e6f5cd6a413b.png" 
                alt="NASA Logo" 
                className="h-16 w-16 mr-4"
              />
            </div>
            <p className="text-lg text-gray-800">
              <strong className="text-[#f159b2]">NASA and industry-leading companies</strong> trust Geisel Software for AI that drives real-world results—built on decades of expertise in software, robotics, and automation.
            </p>
          </div>

          {/* Vision Statement */}
          <div className="bg-gradient-to-r from-[#f159b2]/10 to-[#51B3EA]/10 border border-[#dcf448]/20 rounded-2xl p-12">
            <p className="text-lg text-gray-300 mb-6 max-w-4xl mx-auto leading-relaxed">
              We're leading the charge into the agentic AI era where systems don't just respond, but proactively reason, adapt, and take action.
            </p>
            <p className="text-xl font-semibold text-[#dcf448]">
              Accelerate innovation and streamline your operations with next-gen intelligence built around your goals.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
