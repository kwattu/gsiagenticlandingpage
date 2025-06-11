
import { ChevronRight } from "lucide-react";

const ServicesSection = () => {
  return (
    <section id="services" className="py-20 bg-gray-900 relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 opacity-10">
        <img 
          src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=6000&q=80" 
          alt="Software developer client meeting" 
          className="w-full h-full object-cover object-center"
        />
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Main Framework Container */}
        <div className="bg-black border-4 border-[#f159b2] rounded-lg p-8">
          {/* Header */}
          <div className="text-center mb-8">
            <h1 className="text-4xl md:text-5xl font-bold text-[#dcf448] mb-2">
              THE A.I.M. FRAMEWORK
            </h1>
            <p className="text-2xl md:text-3xl text-white font-light">
              Align, Implement, Maximize
            </p>
          </div>

          {/* Core Drivers */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-[#f159b2] text-center mb-6">
              CORE DRIVERS
            </h2>
            <div className="grid grid-cols-3 gap-8 text-center">
              <div>
                <h3 className="text-xl font-semibold text-white">People</h3>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white">Process</h3>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white">Technology</h3>
              </div>
            </div>
          </div>

          {/* Engagement Zone */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-[#f159b2] text-center mb-6">
              ENGAGEMENT ZONE
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Initiation */}
              <div>
                <h3 className="text-lg font-bold text-[#dcf448] mb-3">Initiation</h3>
                <div className="text-white space-y-1">
                  <p>Vision</p>
                  <p>Alignment,</p>
                  <p>Stakeholder</p>
                  <p>Buy-In</p>
                </div>
              </div>
              
              {/* Development */}
              <div>
                <h3 className="text-lg font-bold text-[#dcf448] mb-3">Development</h3>
                <div className="text-white space-y-1">
                  <p>AI Agent</p>
                  <p>Construction,</p>
                  <p>Feedback</p>
                  <p>Loops</p>
                </div>
              </div>
              
              {/* Optimization */}
              <div>
                <h3 className="text-lg font-bold text-[#dcf448] mb-3">Optimization</h3>
                <div className="text-white space-y-1">
                  <p>Deployment,</p>
                  <p>Ongoing</p>
                  <p>Learning</p>
                  <p>and Scaling</p>
                </div>
              </div>
            </div>
          </div>

          {/* Tactical Journey */}
          <div className="mb-6">
            <h2 className="text-2xl font-bold text-[#f159b2] text-center mb-6">
              TACTICAL JOURNEY
            </h2>
            
            {/* Journey Steps */}
            <div className="flex items-center justify-center bg-cyan-400 rounded-lg p-4 mb-6">
              <div className="flex items-center space-x-4 text-black font-semibold">
                <span>Discover</span>
                <ChevronRight className="w-5 h-5" />
                <span>Design</span>
                <ChevronRight className="w-5 h-5" />
                <span>Develop</span>
                <ChevronRight className="w-5 h-5" />
                <span>Deploy</span>
                <ChevronRight className="w-5 h-5" />
                <span>Optimize</span>
              </div>
            </div>
          </div>

          {/* Footer Text */}
          <div className="text-center">
            <p className="text-white text-lg leading-relaxed">
              This framework helps customers rapidly turn goals<br />
              into scalable AI solutions with lasting impact.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
