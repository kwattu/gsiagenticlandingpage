
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, Phone, Globe, ArrowRight } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Book a 30-minute discovery call to put agentic AI to work for you!
          </p>
          
          <Button size="lg" className="bg-orange-600 hover:bg-orange-700 text-white text-lg px-8 py-4 group mb-12">
            Schedule Your Discovery Call
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>

        {/* Contact Information */}
        <div className="grid md:grid-cols-3 gap-6">
          <Card className="bg-white border-gray-200 text-center">
            <CardContent className="p-8">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="w-8 h-8 text-orange-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Call Us</h3>
              <p className="text-gray-600 mb-2">JR Rodrigues</p>
              <p className="text-orange-600 font-medium">(508) 936-5097</p>
            </CardContent>
          </Card>

          <Card className="bg-white border-gray-200 text-center">
            <CardContent className="p-8">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Mail className="w-8 h-8 text-orange-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Email Us</h3>
              <p className="text-gray-600 mb-2">Get in touch directly</p>
              <p className="text-orange-600 font-medium">jr@geisel-software.com</p>
            </CardContent>
          </Card>

          <Card className="bg-white border-gray-200 text-center">
            <CardContent className="p-8">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Globe className="w-8 h-8 text-orange-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Visit Our Website</h3>
              <p className="text-gray-600 mb-2">Learn more about us</p>
              <p className="text-orange-600 font-medium">geisel.software</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
