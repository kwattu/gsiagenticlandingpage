
import { Button } from "@/components/ui/button";
import { CheckCircle, Users, Award, TrendingUp } from "lucide-react";

const AboutSection = () => {
  const stats = [
    { number: "50+", label: "Projects Completed", icon: CheckCircle },
    { number: "25+", label: "Happy Clients", icon: Users },
    { number: "5+", label: "Years Experience", icon: Award },
    { number: "99%", label: "Success Rate", icon: TrendingUp },
  ];

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              About Geiesl Software
            </h2>
            <p className="text-lg text-gray-600 mb-6">
              We are a team of passionate software engineers and consultants dedicated to 
              delivering innovative solutions that drive business growth. Our expertise spans 
              across modern web technologies, cloud platforms, and enterprise software development.
            </p>
            <p className="text-lg text-gray-600 mb-8">
              Founded with the vision to bridge the gap between technology and business needs, 
              we focus on creating scalable, maintainable, and user-centric software solutions 
              that stand the test of time.
            </p>

            <div className="space-y-4 mb-8">
              <div className="flex items-start space-x-3">
                <CheckCircle className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                <span className="text-gray-700">Expert team with diverse technical backgrounds</span>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                <span className="text-gray-700">Agile development methodology</span>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                <span className="text-gray-700">Commitment to quality and innovation</span>
              </div>
            </div>

            <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white">
              Learn More About Us
            </Button>
          </div>

          {/* Right Column - Stats */}
          <div className="grid grid-cols-2 gap-6">
            {stats.map((stat, index) => (
              <div key={index} className="bg-white rounded-xl p-6 text-center shadow-sm border border-gray-100">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="w-6 h-6 text-blue-600" />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">{stat.number}</div>
                <div className="text-sm text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
