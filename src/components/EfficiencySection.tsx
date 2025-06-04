
import { Brain, Target, Users, Shield } from "lucide-react";

const EfficiencySection = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Efficiency Redefined with Agentic AI
          </h2>
        </div>

        {/* Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Left Column */}
          <div className="space-y-8">
            <div>
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-[#f159b2]/20 rounded-full flex items-center justify-center mr-4">
                  <Brain className="w-6 h-6 text-[#f159b2]" />
                </div>
                <h3 className="text-2xl font-semibold text-gray-900">Build AI That Works for You</h3>
              </div>
              <p className="text-lg text-gray-600 leading-relaxed">
                At Geisel Software, we don't just build AI that analyzes; we build agentic AI systems that act, learn, and deliver real-world results. Whether you're automating operations, optimizing processes, or driving intelligent behavior in robotics, we design solutions that serve your goals from day one.
              </p>
            </div>

            <div>
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-[#dcf448]/20 rounded-full flex items-center justify-center mr-4">
                  <Target className="w-6 h-6 text-[#dcf448]" />
                </div>
                <h3 className="text-2xl font-semibold text-gray-900">Custom AI Agents Designed Around Your Needs</h3>
              </div>
              <p className="text-lg text-gray-600 leading-relaxed">
                Your challenges are unique, so your AI should be, too. We develop intelligent agents that make decisions, adapt over time, and autonomously pursue your business objectives. From robotics to enterprise automation, our AI systems are built to move the needle where it matters most.
              </p>
            </div>
          </div>

          {/* Right Column */}
          <div className="space-y-8">
            <div>
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-[#51B3EA]/20 rounded-full flex items-center justify-center mr-4">
                  <Users className="w-6 h-6 text-[#51B3EA]" />
                </div>
                <h3 className="text-2xl font-semibold text-gray-900">End-to-End Collaboration</h3>
              </div>
              <p className="text-lg text-gray-600 leading-relaxed mb-4">
                You don't need just a vendor—you need a partner. Geisel works alongside your team through every phase, offering:
              </p>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-[#51B3EA] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Strategic AI discovery & planning
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-[#51B3EA] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Custom development of agentic AI solutions
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-[#51B3EA] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Smooth integration into your current tech stack
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-[#51B3EA] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Ongoing tuning and support as your needs evolve
                </li>
              </ul>
            </div>

            <div>
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-green-500/20 rounded-full flex items-center justify-center mr-4">
                  <Shield className="w-6 h-6 text-green-500" />
                </div>
                <h3 className="text-2xl font-semibold text-gray-900">Trust Built In</h3>
              </div>
              <p className="text-lg text-gray-600 leading-relaxed">
                Innovation means nothing without trust. That's why every solution we build prioritizes security, reliability, and engineering rigor so your AI systems perform safely, predictably, and at scale.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EfficiencySection;
