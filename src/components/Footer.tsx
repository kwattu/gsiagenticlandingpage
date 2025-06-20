
const Footer = () => {
  return (
    <footer className="bg-[#0a0119] text-white py-8 border-t border-[#f159b2]/20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Company Info */}
          <div className="mb-4 md:mb-0">
            <img 
              src="/lovable-uploads/0099637a-bed0-4431-9613-e56422eb4d10.png" 
              alt="Geisel Software" 
              className="h-8 mb-4"
            />
            <p className="text-gray-400 max-w-md">
              Agentic AI Solutions: Intelligence in Motion
            </p>
          </div>

          {/* Contact Info */}
          <div className="text-center md:text-right">
            <p className="text-gray-400 mb-1">(508) 936-5099</p>
            <p className="text-gray-400">transcend@geisel-software.com</p>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-6 text-center">
          <p className="text-gray-400 text-sm">
            © 2025 Geisel Software. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
