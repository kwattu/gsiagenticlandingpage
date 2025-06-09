
import { Button } from "@/components/ui/button";
import { Shield, Zap, Target, CheckCircle } from "lucide-react";

const AboutSection = () => {
  return (
    <section id="about" className="py-20" style={{ backgroundColor: '#f159b2' }}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-12">
            Leading the Agentic AI Era
          </h2>
          
          <div className="flex items-start gap-8">
            <img 
              src="/lovable-uploads/972f9b43-19f5-4db4-a3a4-e6f5cd6a413b.png" 
              alt="NASA Logo" 
              className="h-20 w-20 object-contain flex-shrink-0 mt-2"
            />
            
            <div className="text-left flex-1">
              <p className="text-lg text-gray-800 leading-relaxed mb-6">
                <strong className="text-gray-900">NASA and industry-leading companies</strong> trust Geisel Software for AI that drives real-world results—built on decades of expertise in software, robotics, and automation.
              </p>
              
              <p className="text-lg text-gray-800 mb-6 leading-relaxed">
                We're leading the charge into the agentic AI era where systems don't just respond, but proactively reason, adapt, and take action.
              </p>
              
              <p className="text-xl font-semibold text-gray-900">
                Accelerate innovation and streamline your operations with next-gen intelligence built around your goals.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
