import { Brain, Target, Users, Shield } from "lucide-react";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

const EfficiencySection = () => {
  return (
    <section className="py-20 bg-gray-50 relative overflow-hidden">
      {/* Simplified AI Data Dots */}
      <div className="absolute inset-0 opacity-40">
        <div className="absolute top-0 left-0 w-full h-full">
          {/* Stream 1 - Main flow */}
          <div className="absolute top-1/2 left-0 w-full h-20 transform -translate-y-1/2">
            {Array.from({ length: 80 }).map((_, i) => (
              <div
                key={i}
                className="absolute rounded-full animate-[aiParticleFlow_10s_linear_infinite]"
                style={{
                  width: `${2 + Math.sin(i * 0.1) * 1}px`,
                  height: `${2 + Math.sin(i * 0.1) * 1}px`,
                  background: i % 5 === 0 ? '#f159b2' : i % 5 === 1 ? '#06b6d4' : i % 5 === 2 ? '#8b5cf6' : i % 5 === 3 ? '#10b981' : '#f59e0b',
                  left: `${(i * 1.25) % 100}%`,
                  top: `${50 + Math.sin(i * 0.3) * 15}%`,
                  animationDelay: `${(i * 0.125) % 10}s`,
                  opacity: 0.8,
                }}
              />
            ))}
          </div>

          {/* Stream 2 - Upper flow */}
          <div className="absolute top-1/3 left-0 w-full h-16">
            {Array.from({ length: 60 }).map((_, i) => (
              <div
                key={`stream2-${i}`}
                className="absolute rounded-full animate-[aiParticleFlow_12s_linear_infinite]"
                style={{
                  width: `${1.5 + Math.sin(i * 0.2) * 0.5}px`,
                  height: `${1.5 + Math.sin(i * 0.2) * 0.5}px`,
                  background: i % 4 === 0 ? '#f159b2' : i % 4 === 1 ? '#06b6d4' : i % 4 === 2 ? '#8b5cf6' : '#10b981',
                  left: `${(i * 1.67) % 100}%`,
                  top: `${50 + Math.sin(i * 0.4) * 20}%`,
                  animationDelay: `${(i * 0.2) % 12}s`,
                  opacity: 0.7,
                }}
              />
            ))}
          </div>

          {/* Stream 3 - Lower flow */}
          <div className="absolute top-2/3 left-0 w-full h-16">
            {Array.from({ length: 70 }).map((_, i) => (
              <div
                key={`stream3-${i}`}
                className="absolute rounded-full animate-[aiParticleFlow_14s_linear_infinite]"
                style={{
                  width: `${1.2 + Math.sin(i * 0.15) * 0.8}px`,
                  height: `${1.2 + Math.sin(i * 0.15) * 0.8}px`,
                  background: i % 3 === 0 ? '#f159b2' : i % 3 === 1 ? '#06b6d4' : '#8b5cf6',
                  left: `${(i * 1.43) % 100}%`,
                  top: `${50 + Math.sin(i * 0.5) * 18}%`,
                  animationDelay: `${(i * 0.2) % 14}s`,
                  opacity: 0.6,
                }}
              />
            ))}
          </div>

          {/* Stream 4 - Top subtle flow */}
          <div className="absolute top-1/4 left-0 w-full h-12">
            {Array.from({ length: 50 }).map((_, i) => (
              <div
                key={`stream4-${i}`}
                className="absolute rounded-full animate-[aiParticleFlow_16s_linear_infinite]"
                style={{
                  width: `${1 + Math.sin(i * 0.1) * 0.5}px`,
                  height: `${1 + Math.sin(i * 0.1) * 0.5}px`,
                  background: i % 2 === 0 ? '#10b981' : '#f59e0b',
                  left: `${(i * 2) % 100}%`,
                  top: `${50 + Math.sin(i * 0.6) * 12}%`,
                  animationDelay: `${(i * 0.32) % 16}s`,
                  opacity: 0.5,
                }}
              />
            ))}
          </div>

          {/* Stream 5 - Bottom subtle flow */}
          <div className="absolute top-3/4 left-0 w-full h-12">
            {Array.from({ length: 65 }).map((_, i) => (
              <div
                key={`stream5-${i}`}
                className="absolute rounded-full animate-[aiParticleFlow_18s_linear_infinite]"
                style={{
                  width: `${0.8 + Math.sin(i * 0.25) * 0.7}px`,
                  height: `${0.8 + Math.sin(i * 0.25) * 0.7}px`,
                  background: i % 4 === 0 ? '#f59e0b' : i % 4 === 1 ? '#06b6d4' : i % 4 === 2 ? '#f159b2' : '#8b5cf6',
                  left: `${(i * 1.54) % 100}%`,
                  top: `${50 + Math.sin(i * 0.7) * 10}%`,
                  animationDelay: `${(i * 0.28) % 18}s`,
                  opacity: 0.45,
                }}
              />
            ))}
          </div>
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
          @keyframes aiParticleFlow {
            0% {
              transform: translateX(-30px);
              opacity: 0;
            }
            5% {
              opacity: 1;
            }
            95% {
              opacity: 1;
            }
            100% {
              transform: translateX(calc(100vw + 30px));
              opacity: 0;
            }
          }
        `
      }} />
    </section>
  );
};

export default EfficiencySection;
