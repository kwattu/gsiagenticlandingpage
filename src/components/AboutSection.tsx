
import { Button } from "@/components/ui/button";
import { Shield, Zap, Target, CheckCircle } from "lucide-react";

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Left Column - Security First */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Security and Reliability First
            </h2>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Our rigorous engineering process ensures your AI solutions are safe, secure, and trustworthy—so you can innovate with confidence.
            </p>
            
            <div className="space-y-4 mb-8">
              <div className="flex items-start space-x-3">
                <CheckCircle className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                <span className="text-gray-700">Rigorous security protocols and testing</span>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                <span className="text-gray-700">Decades of expertise in software and robotics</span>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                <span className="text-gray-700">Trusted by leading organizations worldwide</span>
              </div>
            </div>
          </div>

          {/* Right Column - Visual */}
          <div className="relative">
            <div className="bg-gray-50 rounded-2xl p-8">
              <div className="grid grid-cols-1 gap-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center">
                    <Shield className="w-6 h-6 text-orange-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Enterprise Security</h3>
                    <p className="text-sm text-gray-600">Safe and trustworthy AI systems</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center">
                    <Zap className="w-6 h-6 text-orange-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Proven Results</h3>
                    <p className="text-sm text-gray-600">Real-world operational improvements</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center">
                    <Target className="w-6 h-6 text-orange-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Goal-Oriented</h3>
                    <p className="text-sm text-gray-600">Built around your objectives</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Vision Statement */}
        <div className="text-center bg-orange-50 rounded-2xl p-12">
          <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
            Leading the Agentic AI Era
          </h3>
          <p className="text-lg text-gray-700 mb-6 max-w-4xl mx-auto leading-relaxed">
            We're leading the charge into the agentic AI era where systems don't just respond, but proactively reason, adapt, and take action.
          </p>
          <p className="text-xl font-semibold text-orange-600">
            Accelerate innovation and streamline your operations with next-gen intelligence built around your goals.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
