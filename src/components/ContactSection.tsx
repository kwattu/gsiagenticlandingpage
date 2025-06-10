
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact" className="py-20 bg-[#f159b2]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">Ready to go from Dashboards to Decisions?</h2>
          <p className="text-xl text-black max-w-3xl mx-auto mb-8">
            A smarter path, just in 30 minutes. Book a discovery session. Leave with 2-3 pilot-ready AI ideas.
          </p>
          
          <Button 
            size="lg" 
            className="bg-[#dcf448] hover:bg-[#dcf448]/80 text-black text-lg px-8 py-4 group"
            onClick={() => window.open('https://calendly.com/jrrodrigues/30min', '_blank')}
          >
            Get 2-3 pilot-ready AI ideas!
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
