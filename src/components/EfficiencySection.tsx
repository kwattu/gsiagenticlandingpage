import { Brain, Target, Users, Shield } from "lucide-react";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

const EfficiencySection = () => {
  return (
    <section className="py-20 bg-gray-50 relative overflow-hidden">
      {/* Animated Data Stream Background */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-full h-full">
          {/* Data stream lines */}
          <div className="absolute top-10 left-0 w-2 h-32 bg-gradient-to-r from-[#f159b2] to-blue-500 transform rotate-12 animate-[dataFlow1_6s_linear_infinite]"></div>
          <div className="absolute top-20 left-0 w-1 h-24 bg-gradient-to-r from-blue-500 to-purple-500 transform rotate-45 animate-[dataFlow2_8s_linear_infinite_1s]"></div>
          <div className="absolute top-32 left-0 w-3 h-40 bg-gradient-to-r from-purple-500 to-green-500 transform -rotate-12 animate-[dataFlow3_7s_linear_infinite_2s]"></div>
          <div className="absolute top-50 left-0 w-1 h-20 bg-gradient-to-r from-green-500 to-yellow-500 transform rotate-30 animate-[dataFlow1_9s_linear_infinite_3s]"></div>
          <div className="absolute top-64 left-0 w-2 h-28 bg-gradient-to-r from-yellow-500 to-red-500 transform -rotate-45 animate-[dataFlow2_5s_linear_infinite_4s]"></div>
          <div className="absolute top-80 left-0 w-1 h-36 bg-gradient-to-r from-red-500 to-cyan-500 transform rotate-60 animate-[dataFlow3_10s_linear_infinite_5s]"></div>
          
          {/* Additional data streams for density */}
          <div className="absolute top-16 left-0 w-1 h-16 bg-gradient-to-r from-cyan-500 to-indigo-500 transform rotate-15 animate-[dataFlow1_11s_linear_infinite_6s]"></div>
          <div className="absolute top-40 left-0 w-2 h-44 bg-gradient-to-r from-indigo-500 to-pink-500 transform -rotate-30 animate-[dataFlow2_6s_linear_infinite_7s]"></div>
          <div className="absolute top-72 left-0 w-1 h-24 bg-gradient-to-r from-pink-500 to-[#f159b2] transform rotate-75 animate-[dataFlow3_8s_linear_infinite_8s]"></div>
          
          {/* More data streams */}
          <div className="absolute top-8 left-0 w-1 h-48 bg-gradient-to-r from-blue-400 to-purple-400 transform rotate-90 animate-[dataFlow1_12s_linear_infinite_9s]"></div>
          <div className="absolute top-28 left-0 w-2 h-20 bg-gradient-to-r from-purple-400 to-green-400 transform -rotate-60 animate-[dataFlow2_7s_linear_infinite_10s]"></div>
          <div className="absolute top-56 left-0 w-1 h-32 bg-gradient-to-r from-green-400 to-yellow-400 transform rotate-45 animate-[dataFlow3_9s_linear_infinite_11s]"></div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Stop Analyzing, Start Acting
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
                <div className="w-12 h-12 bg-[#f159b2]/20 rounded-full flex items-center justify-center mr-4">
                  <Target className="w-6 h-6 text-[#f159b2]" />
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
                <div className="w-12 h-12 bg-[#f159b2]/20 rounded-full flex items-center justify-center mr-4">
                  <Users className="w-6 h-6 text-[#f159b2]" />
                </div>
                <h3 className="text-2xl font-semibold text-gray-900">End-to-End Collaboration</h3>
              </div>
              <p className="text-lg text-gray-600 leading-relaxed mb-4">
                You don't need just a vendor—you need a partner. Geisel works alongside your team through every phase, offering:
              </p>
              
              <div className="overflow-x-auto">
                <Table className="w-full border border-gray-200 rounded-lg">
                  <TableHeader>
                    <TableRow className="bg-gray-800">
                      <TableHead className="text-[#f159b2] font-semibold text-center border-r border-gray-600">Strategic AI Planning</TableHead>
                      <TableHead className="text-[#f159b2] font-semibold text-center border-r border-gray-600">Custom AI Agent Development</TableHead>
                      <TableHead className="text-[#f159b2] font-semibold text-center border-r border-gray-600">Tech Stack Integration</TableHead>
                      <TableHead className="text-[#f159b2] font-semibold text-center">Optimization & Support</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    <TableRow className="bg-gray-800">
                      <TableCell className="text-white text-center p-4 border-r border-gray-600">
                        Identifying high-impact opportunities; risk-managed phased approach
                      </TableCell>
                      <TableCell className="text-white text-center p-4 border-r border-gray-600">
                        Iterative building; robust, explainable & aligned agents
                      </TableCell>
                      <TableCell className="text-white text-center p-4 border-r border-gray-600">
                        Seamless interoperability; enhancing existing workflows
                      </TableCell>
                      <TableCell className="text-white text-center p-4">
                        Continuous partnership; optimizing for sustained value.
                      </TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </div>
            </div>

            <div>
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-[#f159b2]/20 rounded-full flex items-center justify-center mr-4">
                  <Shield className="w-6 h-6 text-[#f159b2]" />
                </div>
                <h3 className="text-2xl font-semibold text-gray-900">Trust Built In</h3>
              </div>
              <p className="text-lg text-gray-600 leading-relaxed">
                Our 'Trust Built In' philosophy is grounded in decades of expertise across software, robotics, and automation. This unique synergy ensures our agentic AI solutions are secure, reliable, and engineered for practical, real-world action.
              </p>
            </div>
          </div>
        </div>
      </div>

      <style dangerouslySetInnerHTML={{
        __html: `
          @keyframes dataFlow1 {
            0% {
              transform: translateX(-100px) translateY(0px) rotate(12deg);
              opacity: 0;
            }
            20% {
              opacity: 0.8;
            }
            80% {
              opacity: 0.8;
            }
            100% {
              transform: translateX(calc(100vw + 100px)) translateY(-30px) rotate(12deg);
              opacity: 0;
            }
          }
          
          @keyframes dataFlow2 {
            0% {
              transform: translateX(-100px) translateY(0px) rotate(45deg);
              opacity: 0;
            }
            20% {
              opacity: 0.6;
            }
            80% {
              opacity: 0.6;
            }
            100% {
              transform: translateX(calc(100vw + 100px)) translateY(40px) rotate(45deg);
              opacity: 0;
            }
          }
          
          @keyframes dataFlow3 {
            0% {
              transform: translateX(-100px) translateY(0px) rotate(-12deg);
              opacity: 0;
            }
            20% {
              opacity: 0.7;
            }
            80% {
              opacity: 0.7;
            }
            100% {
              transform: translateX(calc(100vw + 100px)) translateY(-20px) rotate(-12deg);
              opacity: 0;
            }
          }
        `
      }} />
    </section>
  );
};

export default EfficiencySection;
