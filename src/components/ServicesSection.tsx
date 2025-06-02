
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Brain, Cog, Shield, Users } from "lucide-react";

const ServicesSection = () => {
  const services = [
    {
      icon: Users,
      title: "Strategic AI Consulting",
      description: "Expert guidance to identify the best agentic AI opportunities for your business goals and operational needs."
    },
    {
      icon: Brain,
      title: "Custom Agentic AI Development",
      description: "Tailored AI agents that learn, reason, and act autonomously to optimize your specific business processes."
    },
    {
      icon: Cog,
      title: "Seamless System Integration",
      description: "Professional integration with your existing systems and workflows for smooth, unified operations."
    },
    {
      icon: Shield,
      title: "Ongoing Optimization",
      description: "Continuous monitoring, learning, and enhancement to ensure your AI systems deliver maximum value."
    }
  ];

  return (
    <section id="services" className="py-20 bg-gray-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            End-to-End Partnership
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            From ideation to deployment and beyond, Geisel Software is your trusted partner at every step. We offer:
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {services.map((service, index) => (
            <Card key={index} className="bg-[#0a0119] border-[#f159b2]/20 hover:shadow-lg hover:shadow-[#f159b2]/10 transition-all duration-300">
              <CardHeader className="pb-4">
                <div className="w-12 h-12 bg-[#51B3EA]/20 rounded-lg flex items-center justify-center mb-4">
                  <service.icon className="w-6 h-6 text-[#51B3EA]" />
                </div>
                <CardTitle className="text-xl font-semibold text-white">
                  {service.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-400 leading-relaxed">
                  {service.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Trust Section */}
        <div className="text-center bg-[#0a0119] border border-[#dcf448]/20 rounded-2xl p-8">
          <p className="text-lg text-gray-300 mb-4">
            <strong className="text-[#dcf448]">NASA, Amazon Robotics,</strong> and other leading companies trust Geisel Software for AI that drives real-world results—built on decades of expertise in software, robotics, and automation.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
