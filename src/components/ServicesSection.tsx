
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Code, Database, Cloud, Smartphone, Users, Cog } from "lucide-react";

const ServicesSection = () => {
  const services = [
    {
      icon: Code,
      title: "Custom Software Development",
      description: "Tailored software solutions built with modern technologies to meet your specific business requirements.",
      features: ["Web Applications", "API Development", "System Integration"]
    },
    {
      icon: Cloud,
      title: "Cloud Solutions",
      description: "Scalable cloud infrastructure and migration services to modernize your business operations.",
      features: ["Cloud Migration", "DevOps", "Infrastructure as Code"]
    },
    {
      icon: Smartphone,
      title: "Mobile Applications",
      description: "Native and cross-platform mobile apps that deliver exceptional user experiences.",
      features: ["iOS & Android", "React Native", "Progressive Web Apps"]
    },
    {
      icon: Database,
      title: "Data Engineering",
      description: "Transform your data into actionable insights with our comprehensive data solutions.",
      features: ["Data Analytics", "Business Intelligence", "Machine Learning"]
    },
    {
      icon: Users,
      title: "Consulting Services",
      description: "Strategic technology consulting to guide your digital transformation journey.",
      features: ["Technology Strategy", "Architecture Design", "Process Optimization"]
    },
    {
      icon: Cog,
      title: "Maintenance & Support",
      description: "Ongoing support and maintenance to keep your systems running smoothly.",
      features: ["24/7 Monitoring", "Performance Optimization", "Security Updates"]
    }
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We offer comprehensive software development and consulting services 
            to help your business succeed in the digital age.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="group hover:shadow-lg transition-shadow duration-300 border border-gray-200">
              <CardHeader>
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-blue-200 transition-colors">
                  <service.icon className="w-6 h-6 text-blue-600" />
                </div>
                <CardTitle className="text-xl font-semibold text-gray-900">
                  {service.title}
                </CardTitle>
                <CardDescription className="text-gray-600">
                  {service.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                      <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
