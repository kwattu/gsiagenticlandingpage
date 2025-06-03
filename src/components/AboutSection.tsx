
import { Button } from "@/components/ui/button";
import { Shield, Zap, Target, CheckCircle } from "lucide-react";

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-[#0a0119]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Left Column - Security First */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Security and Reliability First
            </h2>
            <p className="text-lg text-gray-300 mb-8 leading-relaxed">
              Our rigorous engineering process ensures your AI solutions are safe, secure, and trustworthy—so you can innovate with confidence.
            </p>
            
            <div className="space-y-4 mb-8">
              <div className="flex items-start space-x-3">
                <CheckCircle className="w-5 h-5 text-[#dcf448] mt-1 flex-shrink-0" />
                <span className="text-gray-300">Rigorous security protocols and testing</span>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle className="w-5 h-5 text-[#dcf448] mt-1 flex-shrink-0" />
                <span className="text-gray-300">Decades of expertise in software and robotics</span>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle className="w-5 h-5 text-[#dcf448] mt-1 flex-shrink-0" />
                <span className="text-gray-300">Trusted by leading organizations worldwide</span>
              </div>
            </div>
          </div>

          {/* Right Column - Visual */}
          <div className="relative">
            <div className="bg-gray-800/50 border border-[#51B3EA]/20 rounded-2xl p-8">
              <div className="grid grid-cols-1 gap-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-[#f159b2]/20 rounded-lg flex items-center justify-center">
                    <Shield className="w-6 h-6 text-[#f159b2]" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white">Enterprise Security</h3>
                    <p className="text-sm text-gray-400">Safe and trustworthy AI systems</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-[#dcf448]/20 rounded-lg flex items-center justify-center">
                    <Zap className="w-6 h-6 text-[#dcf448]" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white">Proven Results</h3>
                    <p className="text-sm text-gray-400">Real-world operational improvements</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-[#51B3EA]/20 rounded-lg flex items-center justify-center">
                    <Target className="w-6 h-6 text-[#51B3EA]" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white">Goal-Oriented</h3>
                    <p className="text-sm text-gray-400">Built around your objectives</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Vision Statement */}
        <div className="text-center bg-gradient-to-r from-[#f159b2]/10 to-[#51B3EA]/10 border border-[#dcf448]/20 rounded-2xl p-12">
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
      </div>
    </section>
  );
};

export default AboutSection;
