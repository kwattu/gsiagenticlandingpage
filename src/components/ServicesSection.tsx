
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Search, Lightbulb, Code, Cog, TrendingUp } from "lucide-react";

const ServicesSection = () => {
  const services = [
    {
      icon: Search,
      title: "Discovery & Opportunity Mapping",
      description: "We start by understanding your business, workflows, and systems to identify high-impact use cases for agentic AI—focusing on areas where autonomous decision-making can create measurable value."
    },
    {
      icon: Lightbulb,
      title: "Solution Design & Feasibility",
      description: "Our team collaborates with your stakeholders to architect a fit-for-purpose solution, leveraging modular, explainable AI components, with clear ROI targets and pilot-ready scopes."
    },
    {
      icon: Code,
      title: "Custom Development",
      description: "From training to integration, we build intelligent agents that perceive, decide, act, and learn—safely and autonomously—tailored to your environment, whether it's robotics, operations, or edge systems."
    },
    {
      icon: Cog,
      title: "Integration & Deployment",
      description: "We ensure seamless deployment into your existing tech stack—cloud, edge, embedded, or hybrid—and validate the system's behavior in real-world conditions."
    },
    {
      icon: TrendingUp,
      title: "Optimization & Support",
      description: "Our partnership doesn't end at deployment. We continue refining models, enhancing performance, and incorporating new learnings into the system—keeping your AI as adaptive as your business."
    }
  ];

  return (
    <section id="services" className="py-20 bg-gray-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            From Insight to Action
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <Card key={index} className="bg-[#0a0119] border-[#f159b2]/20 hover:shadow-lg hover:shadow-[#f159b2]/10 transition-all duration-300">
              <CardHeader className="pb-4">
                <div className="w-12 h-12 bg-[#f159b2]/20 rounded-lg flex items-center justify-center mb-4">
                  <service.icon className="w-6 h-6 text-[#f159b2]" />
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
            <strong className="text-[#dcf448]">NASA and industry-leading companies</strong> trust Geisel Software for AI that drives real-world results—built on decades of expertise in software, robotics, and automation.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
