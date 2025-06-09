
import { Brain, Target, Users, Shield } from "lucide-react";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

const EfficiencySection = () => {
  return (
    <section className="py-20 bg-gray-50 relative overflow-hidden">
      {/* Enhanced AI Data Wave Background */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-0 left-0 w-full h-full">
          {/* Primary AI data stream */}
          <div className="absolute top-1/2 left-0 w-full h-40 transform -translate-y-1/2">
            {/* Main flowing data wave */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#f159b2]/40 to-transparent animate-[aiDataFlow_8s_ease-in-out_infinite]"></div>
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-400/30 to-transparent animate-[aiDataFlow_12s_ease-in-out_infinite_reverse_2s]"></div>
            
            {/* AI data particles - primary stream */}
            {Array.from({ length: 120 }).map((_, i) => (
              <div
                key={i}
                className="absolute rounded-full animate-[aiParticleFlow_12s_linear_infinite]"
                style={{
                  width: `${2 + Math.sin(i * 0.1) * 2}px`,
                  height: `${2 + Math.sin(i * 0.1) * 2}px`,
                  background: i % 4 === 0 ? '#f159b2' : i % 4 === 1 ? '#06b6d4' : i % 4 === 2 ? '#8b5cf6' : '#10b981',
                  left: `${(i * 0.8) % 100}%`,
                  top: `${50 + Math.sin(i * 0.2) * 25 + Math.cos(i * 0.15) * 10}%`,
                  animationDelay: `${(i * 0.1) % 12}s`,
                  opacity: 0.8 + Math.sin(i * 0.3) * 0.2,
                  boxShadow: i % 3 === 0 ? '0 0 4px currentColor' : 'none',
                }}
              />
            ))}
          </div>

          {/* Secondary data streams for depth */}
          <div className="absolute top-1/3 left-0 w-full h-24">
            {Array.from({ length: 80 }).map((_, i) => (
              <div
                key={`stream2-${i}`}
                className="absolute w-1 h-1 rounded-full animate-[aiParticleFlow_15s_linear_infinite]"
                style={{
                  background: i % 3 === 0 ? '#f159b2' : i % 3 === 1 ? '#06b6d4' : '#8b5cf6',
                  left: `${(i * 1.25) % 100}%`,
                  top: `${50 + Math.sin(i * 0.3 + Math.PI/4) * 20}%`,
                  animationDelay: `${(i * 0.1875) % 15}s`,
                  opacity: 0.6,
                }}
              />
            ))}
          </div>

          <div className="absolute top-2/3 left-0 w-full h-20">
            {Array.from({ length: 100 }).map((_, i) => (
              <div
                key={`stream3-${i}`}
                className="absolute rounded-full animate-[aiParticleFlow_18s_linear_infinite]"
                style={{
                  width: `${1 + Math.sin(i * 0.2) * 1}px`,
                  height: `${1 + Math.sin(i * 0.2) * 1}px`,
                  background: i % 2 === 0 ? '#10b981' : '#06b6d4',
                  left: `${(i * 1) % 100}%`,
                  top: `${50 + Math.sin(i * 0.4 + Math.PI/6) * 15}%`,
                  animationDelay: `${(i * 0.18) % 18}s`,
                  opacity: 0.4,
                }}
              />
            ))}
          </div>

          {/* AI neural network connection lines */}
          <div className="absolute top-1/4 left-0 w-full h-2 bg-gradient-to-r from-transparent via-[#f159b2]/20 to-transparent transform rotate-0.5 animate-[neuralPulse_10s_ease-in-out_infinite]"></div>
          <div className="absolute top-3/4 left-0 w-full h-1 bg-gradient-to-r from-transparent via-cyan-400/15 to-transparent transform -rotate-0.5 animate-[neuralPulse_14s_ease-in-out_infinite_reverse]"></div>
          
          {/* Data nodes */}
          {Array.from({ length: 12 }).map((_, i) => (
            <div
              key={`node-${i}`}
              className="absolute w-2 h-2 rounded-full animate-[dataPulse_6s_ease-in-out_infinite]"
              style={{
                background: '#f159b2',
                left: `${10 + (i * 8) % 80}%`,
                top: `${30 + Math.sin(i * 0.5) * 40}%`,
                animationDelay: `${i * 0.5}s`,
                boxShadow: '0 0 8px #f159b2',
              }}
            />
          ))}
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
          @keyframes aiDataFlow {
            0%, 100% {
              transform: translateX(-100%) scaleY(1) skewX(-2deg);
              opacity: 0;
            }
            20% {
              opacity: 0.8;
            }
            50% {
              transform: translateX(50%) scaleY(1.5) skewX(1deg);
              opacity: 1;
            }
            80% {
              opacity: 0.8;
            }
          }
          
          @keyframes aiParticleFlow {
            0% {
              transform: translateX(-30px) translateY(0px) scale(0.3);
              opacity: 0;
            }
            8% {
              opacity: 1;
            }
            15% {
              transform: translateX(15vw) translateY(${() => Math.sin(0.15) * 12}px) scale(1);
              opacity: 1;
            }
            35% {
              transform: translateX(35vw) translateY(${() => Math.sin(0.35) * 18}px) scale(0.8);
            }
            60% {
              transform: translateX(60vw) translateY(${() => Math.sin(0.6) * 22}px) scale(1.1);
            }
            85% {
              transform: translateX(85vw) translateY(${() => Math.sin(0.85) * 15}px) scale(0.7);
            }
            92% {
              opacity: 1;
            }
            100% {
              transform: translateX(calc(100vw + 30px)) translateY(${() => Math.sin(1) * 8}px) scale(0.2);
              opacity: 0;
            }
          }
          
          @keyframes neuralPulse {
            0%, 100% {
              transform: translateX(-100%) scaleY(1) scaleX(0.5);
              opacity: 0.2;
            }
            30% {
              transform: translateX(-20%) scaleY(1.8) scaleX(1.2);
              opacity: 0.8;
            }
            60% {
              transform: translateX(80%) scaleY(1.2) scaleX(1.5);
              opacity: 1;
            }
            90% {
              opacity: 0.4;
            }
          }
          
          @keyframes dataPulse {
            0%, 100% {
              transform: scale(1);
              opacity: 0.6;
            }
            50% {
              transform: scale(1.5);
              opacity: 1;
            }
          }
        `
      }} />
    </section>
  );
};

export default EfficiencySection;
