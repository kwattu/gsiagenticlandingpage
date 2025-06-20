
import { ChevronRight } from "lucide-react";

const ServicesSection = () => {
  return (
    <section id="services">
      {/* Main Framework Container */}
      <div 
        className="bg-gray-900 p-12 relative overflow-hidden min-h-screen"
        style={{
          backgroundImage: `linear-gradient(rgba(17, 24, 39, 0.85), rgba(17, 24, 39, 0.85)), url('/lovable-uploads/048fc26f-c87a-4013-8a0f-4bef2a9aa0fa.png')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <div className="max-w-6xl mx-auto py-20">
          {/* Header */}
          <div className="text-center mb-12 relative z-10">
            <h1 className="text-5xl md:text-6xl font-bold text-[#dcf448] mb-4">
              THE A.I.M. FRAMEWORK
            </h1>
            <p className="text-3xl md:text-4xl text-white font-light">
              Align, Implement, Maximize
            </p>
          </div>

          {/* Core Drivers */}
          <div className="mb-12 relative z-10">
            <h2 className="text-3xl font-bold text-[#f159b2] text-center mb-8">
              CORE DRIVERS
            </h2>
            <div className="grid grid-cols-3 gap-12 text-center">
              <div>
                <h3 className="text-2xl font-semibold text-white">People</h3>
              </div>
              <div>
                <h3 className="text-2xl font-semibold text-white">Process</h3>
              </div>
              <div>
                <h3 className="text-2xl font-semibold text-white">Technology</h3>
              </div>
            </div>
          </div>

          {/* Engagement Zone */}
          <div className="mb-12 relative z-10">
            <h2 className="text-3xl font-bold text-[#f159b2] text-center mb-8">
              ENGAGEMENT ZONE
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              {/* Initiation */}
              <div className="text-center">
                <h3 className="text-2xl font-semibold text-[#dcf448] mb-4">Initiation</h3>
                <div className="text-white text-2xl space-y-2">
                  <p>Vision</p>
                  <p>Alignment,</p>
                  <p>Stakeholder</p>
                  <p>Buy-In</p>
                </div>
              </div>
              
              {/* Development */}
              <div className="text-center">
                <h3 className="text-2xl font-semibold text-[#dcf448] mb-4">Development</h3>
                <div className="text-white text-2xl space-y-2">
                  <p>AI Agent</p>
                  <p>Construction,</p>
                  <p>Feedback</p>
                  <p>Loops</p>
                </div>
              </div>
              
              {/* Optimization */}
              <div className="text-center">
                <h3 className="text-2xl font-semibold text-[#dcf448] mb-4">Optimization</h3>
                <div className="text-white text-2xl space-y-2">
                  <p>Deployment,</p>
                  <p>Ongoing</p>
                  <p>Learning</p>
                  <p>and Scaling</p>
                </div>
              </div>
            </div>
          </div>

          {/* Tactical Journey */}
          <div className="mb-12 relative z-10">
            <h2 className="text-3xl font-bold text-[#f159b2] text-center mb-8">
              TACTICAL JOURNEY
            </h2>
            
            {/* Journey Steps */}
            <div className="flex items-center justify-center bg-cyan-400 rounded-lg p-6 mb-8">
              <div className="flex items-center space-x-6 text-black font-semibold text-2xl">
                <span>Discover</span>
                <ChevronRight className="w-6 h-6" />
                <span>Design</span>
                <ChevronRight className="w-6 h-6" />
                <span>Develop</span>
                <ChevronRight className="w-6 h-6" />
                <span>Deploy</span>
                <ChevronRight className="w-6 h-6" />
                <span>Optimize</span>
              </div>
            </div>
          </div>

          {/* Footer Text */}
          <div className="text-center mt-16 relative z-10">
            <p className="text-white text-2xl leading-relaxed">
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
