
import { Brain, Target, Users, Shield } from "lucide-react";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

const EfficiencySection = () => {
  return (
    <section className="py-20 bg-gray-50 relative overflow-hidden">
      {/* Animated Data Stream Background */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full">
          {/* Multiple flowing data streams */}
          <div className="absolute top-10 left-0 w-4 h-4 bg-[#f159b2] rounded-full animate-[flow1_8s_linear_infinite]"></div>
          <div className="absolute top-32 left-0 w-3 h-3 bg-blue-500 rounded-full animate-[flow2_10s_linear_infinite_2s]"></div>
          <div className="absolute top-56 left-0 w-5 h-5 bg-purple-500 rounded-full animate-[flow3_12s_linear_infinite_4s]"></div>
          <div className="absolute top-80 left-0 w-2 h-2 bg-green-500 rounded-full animate-[flow1_9s_linear_infinite_1s]"></div>
          <div className="absolute top-20 left-0 w-3 h-3 bg-yellow-500 rounded-full animate-[flow2_11s_linear_infinite_3s]"></div>
          <div className="absolute top-44 left-0 w-4 h-4 bg-red-500 rounded-full animate-[flow3_7s_linear_infinite_5s]"></div>
          
          {/* Additional streams for density */}
          <div className="absolute top-16 left-0 w-2 h-2 bg-cyan-500 rounded-full animate-[flow1_13s_linear_infinite_6s]"></div>
          <div className="absolute top-68 left-0 w-3 h-3 bg-indigo-500 rounded-full animate-[flow2_8.5s_linear_infinite_2.5s]"></div>
          <div className="absolute top-72 left-0 w-4 h-4 bg-pink-500 rounded-full animate-[flow3_9.5s_linear_infinite_1.5s]"></div>
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

      <style jsx>{`
        @keyframes flow1 {
          0% {
            transform: translateX(-20px) translateY(0px);
            opacity: 0;
          }
          10% {
            opacity: 1;
          }
          90% {
            opacity: 1;
          }
          100% {
            transform: translateX(calc(100vw + 20px)) translateY(-50px);
            opacity: 0;
          }
        }
        
        @keyframes flow2 {
          0% {
            transform: translateX(-20px) translateY(0px);
            opacity: 0;
          }
          10% {
            opacity: 1;
          }
          90% {
            opacity: 1;
          }
          100% {
            transform: translateX(calc(100vw + 20px)) translateY(30px);
            opacity: 0;
          }
        }
        
        @keyframes flow3 {
          0% {
            transform: translateX(-20px) translateY(0px);
            opacity: 0;
          }
          10% {
            opacity: 1;
          }
          90% {
            opacity: 1;
          }
          100% {
            transform: translateX(calc(100vw + 20px)) translateY(-20px);
            opacity: 0;
          }
        }
      `}</style>
    </section>
  );
};

export default EfficiencySection;
