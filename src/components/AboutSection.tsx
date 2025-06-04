
import { Button } from "@/components/ui/button";
import { Shield, Zap, Target, CheckCircle } from "lucide-react";

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-[#0a0119]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Vision Statement */}
        <div className="text-center bg-gradient-to-r from-[#f159b2]/10 to-[#51B3EA]/10 border border-[#dcf448]/20 rounded-2xl p-12 mb-12">
          <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Leading the Agentic AI Era
          </h3>
          <p className="text-lg text-gray-300 mb-6 max-w-4xl mx-auto leading-relaxed">
            We're leading the charge into the agentic AI era where systems don't just respond, but proactively reason, adapt, and take action.
          </p>
          <p className="text-xl font-semibold text-[#dcf448]">
            Accelerate innovation and streamline your operations with next-gen intelligence built around your goals.
          </p>
        </div>

        {/* Trust Section */}
        <div className="text-center bg-white rounded-2xl p-8">
          <p className="text-lg text-gray-800 mb-4">
            <strong className="text-[#f159b2]">NASA and industry-leading companies</strong> trust Geisel Software for AI that drives real-world results—built on decades of expertise in software, robotics, and automation.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
