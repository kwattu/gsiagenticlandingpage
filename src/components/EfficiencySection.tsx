
import { Brain, Target, Users, Shield } from "lucide-react";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

const EfficiencySection = () => {
  return (
    <section className="py-20 bg-gray-50 relative overflow-hidden">
      {/* Animated Data Stream Background */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 left-0 w-full h-full">
          {/* Main ocean wave with particles */}
          <div className="absolute top-1/2 left-0 w-full h-32 transform -translate-y-1/2">
            {/* Primary wave flow */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#f159b2] to-transparent animate-[oceanWave_12s_ease-in-out_infinite]"></div>
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-400 to-transparent animate-[oceanWave_15s_ease-in-out_infinite_reverse_3s]"></div>
            
            {/* Ocean wave particles */}
            {Array.from({ length: 80 }).map((_, i) => (
              <div
                key={i}
                className="absolute w-1 h-1 rounded-full animate-[oceanParticle_10s_linear_infinite]"
                style={{
                  background: i % 3 === 0 ? '#f159b2' : i % 3 === 1 ? '#06b6d4' : '#8b5cf6',
                  left: `${(i * 1.25) % 100}%`,
                  top: `${50 + Math.sin(i * 0.3) * 20}%`,
                  animationDelay: `${(i * 0.125) % 10}s`,
                  transform: `scale(${0.4 + Math.sin(i * 0.5) * 0.6})`,
                }}
              />
            ))}
          </div>

          {/* Secondary wave layers for depth */}
          <div className="absolute top-1/3 left-0 w-full h-20">
            {Array.from({ length: 50 }).map((_, i) => (
              <div
                key={`wave2-${i}`}
                className="absolute w-0.5 h-0.5 rounded-full animate-[oceanParticle_14s_linear_infinite]"
                style={{
                  background: i % 2 === 0 ? '#f159b2' : '#06b6d4',
                  left: `${(i * 2) % 100}%`,
                  top: `${50 + Math.sin(i * 0.4 + Math.PI/3) * 15}%`,
                  animationDelay: `${(i * 0.28) % 14}s`,
                  opacity: 0.7,
                }}
              />
            ))}
          </div>

          <div className="absolute top-2/3 left-0 w-full h-16">
            {Array.from({ length: 60 }).map((_, i) => (
              <div
                key={`wave3-${i}`}
                className="absolute w-0.5 h-0.5 rounded-full animate-[oceanParticle_16s_linear_infinite]"
                style={{
                  background: i % 2 === 0 ? '#8b5cf6' : '#06b6d4',
                  left: `${(i * 1.67) % 100}%`,
                  top: `${50 + Math.sin(i * 0.5 + Math.PI/6) * 12}%`,
                  animationDelay: `${(i * 0.267) % 16}s`,
                  opacity: 0.5,
                }}
              />
            ))}
          </div>

          {/* Flowing gradient waves for ocean effect */}
          <div className="absolute top-1/4 left-0 w-full h-12 bg-gradient-to-r from-transparent via-[#f159b2]/20 to-transparent transform rotate-1 animate-[flowingOcean_18s_ease-in-out_infinite]"></div>
          <div className="absolute top-3/4 left-0 w-full h-8 bg-gradient-to-r from-transparent via-cyan-400/15 to-transparent transform -rotate-1 animate-[flowingOcean_22s_ease-in-out_infinite_reverse]"></div>
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
          @keyframes oceanWave {
            0%, 100% {
              transform: translateX(-120%) scaleY(1) skewX(0deg);
              opacity: 0;
            }
            15% {
              opacity: 0.6;
            }
            50% {
              transform: translateX(20%) scaleY(1.8) skewX(2deg);
              opacity: 1;
            }
            85% {
              opacity: 0.6;
            }
          }
          
          @keyframes oceanParticle {
            0% {
              transform: translateX(-40px) translateY(0px) scale(0.5);
              opacity: 0;
            }
            5% {
              opacity: 0.8;
            }
            10% {
              transform: translateX(10vw) translateY(${() => Math.sin(0.1) * 15}px) scale(1);
              opacity: 1;
            }
            25% {
              transform: translateX(25vw) translateY(${() => Math.sin(0.25) * 20}px) scale(0.8);
            }
            50% {
              transform: translateX(50vw) translateY(${() => Math.sin(0.5) * 25}px) scale(1.2);
            }
            75% {
              transform: translateX(75vw) translateY(${() => Math.sin(0.75) * 18}px) scale(0.9);
            }
            95% {
              opacity: 0.8;
            }
            100% {
              transform: translateX(calc(100vw + 40px)) translateY(${() => Math.sin(1) * 10}px) scale(0.3);
              opacity: 0;
            }
          }
          
          @keyframes flowingOcean {
            0%, 100% {
              transform: translateX(-150%) rotate(1deg) scaleY(1) scaleX(0.8);
              opacity: 0.3;
            }
            25% {
              transform: translateX(-50%) rotate(2deg) scaleY(1.4) scaleX(1.1);
              opacity: 0.7;
            }
            50% {
              transform: translateX(50%) rotate(1deg) scaleY(1.8) scaleX(1.3);
              opacity: 1;
            }
            75% {
              transform: translateX(100%) rotate(0deg) scaleY(1.2) scaleX(1);
              opacity: 0.6;
            }
          }
        `
      }} />
    </section>
  );
};

export default EfficiencySection;
