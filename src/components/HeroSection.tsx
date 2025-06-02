
import { Button } from "@/components/ui/button";
import { ArrowRight, Code2, Zap, Shield } from "lucide-react";

const HeroSection = () => {
  return (
    <section id="home" className="pt-16 bg-gradient-to-br from-gray-50 via-white to-blue-50 min-h-screen flex items-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <div className="text-center lg:text-left animate-fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
              Modern Software
              <span className="block text-blue-600">Solutions</span>
              <span className="block">for Your Business</span>
            </h1>
            
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto lg:mx-0">
              We deliver cutting-edge software development, consulting, and digital transformation 
              services that help businesses thrive in the modern digital landscape.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white group">
                Start Your Project
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button size="lg" variant="outline" className="border-gray-300 hover:border-gray-400">
                Learn More
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="mt-12 pt-8 border-t border-gray-200">
              <p className="text-sm text-gray-500 mb-4">Trusted by leading companies</p>
              <div className="flex items-center justify-center lg:justify-start space-x-8 opacity-60">
                <div className="text-gray-400 font-semibold">Enterprise Solutions</div>
                <div className="text-gray-400 font-semibold">Scalable Architecture</div>
                <div className="text-gray-400 font-semibold">24/7 Support</div>
              </div>
            </div>
          </div>

          {/* Right Column - Visual Elements */}
          <div className="relative">
            <div className="bg-white rounded-2xl shadow-2xl p-8 transform rotate-3 hover:rotate-0 transition-transform duration-300">
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                    <Code2 className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Clean Code</h3>
                    <p className="text-sm text-gray-600">Maintainable & Scalable</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                    <Zap className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Fast Delivery</h3>
                    <p className="text-sm text-gray-600">Agile Development</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                    <Shield className="w-6 h-6 text-purple-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Secure Solutions</h3>
                    <p className="text-sm text-gray-600">Enterprise Security</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Floating elements */}
            <div className="absolute -top-4 -right-4 w-20 h-20 bg-blue-200 rounded-full opacity-20 animate-pulse"></div>
            <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-purple-200 rounded-full opacity-20 animate-pulse delay-300"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
