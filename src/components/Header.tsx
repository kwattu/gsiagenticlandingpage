
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="fixed top-0 w-full bg-[#1a1a2e] backdrop-blur-sm z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <div className="flex items-center space-x-2">
              <div className="text-[#f159b2] font-bold text-lg">GSI</div>
              <div className="text-white font-medium text-sm">GEISEL SOFTWARE</div>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            <a href="#about" className="text-white hover:text-[#dcf448] transition-colors text-sm">
              About Geisel Software
            </a>
            
            {/* SYMAGE with logo */}
            <div className="flex items-center space-x-1">
              <div className="w-6 h-6 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full flex items-center justify-center">
                <span className="text-white text-xs font-bold">S</span>
              </div>
              <a href="#symage" className="text-white hover:text-[#dcf448] transition-colors text-sm font-medium">
                SYMAGE
              </a>
            </div>
            
            <a href="#technical" className="text-white hover:text-[#dcf448] transition-colors text-sm">
              Technical Expertise
            </a>
            <a href="#industries" className="text-white hover:text-[#dcf448] transition-colors text-sm">
              Industries
            </a>
            <a href="#success" className="text-white hover:text-[#dcf448] transition-colors text-sm">
              Success Stories
            </a>
            <a href="#resources" className="text-white hover:text-[#dcf448] transition-colors text-sm">
              Resources
            </a>
          </nav>

          {/* Desktop CTA Buttons */}
          <div className="hidden lg:flex items-center space-x-3">
            <Button 
              variant="outline" 
              className="bg-[#4a4a6a] border-[#4a4a6a] hover:bg-[#5a5a7a] text-white text-sm px-4 py-2"
            >
              Connect with Us
            </Button>
            <Button 
              className="bg-[#dcf448] hover:bg-[#dcf448]/90 text-black text-sm px-4 py-2 font-medium"
            >
              Let's Talk
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <Button variant="ghost" size="sm" onClick={toggleMenu} className="text-white hover:text-[#dcf448]">
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-[#1a1a2e] border-t border-gray-700">
              <a href="#about" className="block px-3 py-2 text-white hover:text-[#dcf448] text-sm">
                About Geisel Software
              </a>
              <div className="flex items-center px-3 py-2 space-x-1">
                <div className="w-6 h-6 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full flex items-center justify-center">
                  <span className="text-white text-xs font-bold">S</span>
                </div>
                <a href="#symage" className="text-white hover:text-[#dcf448] text-sm font-medium">
                  SYMAGE
                </a>
              </div>
              <a href="#technical" className="block px-3 py-2 text-white hover:text-[#dcf448] text-sm">
                Technical Expertise
              </a>
              <a href="#industries" className="block px-3 py-2 text-white hover:text-[#dcf448] text-sm">
                Industries
              </a>
              <a href="#success" className="block px-3 py-2 text-white hover:text-[#dcf448] text-sm">
                Success Stories
              </a>
              <a href="#resources" className="block px-3 py-2 text-white hover:text-[#dcf448] text-sm">
                Resources
              </a>
              <div className="px-3 py-2 space-y-2">
                <Button 
                  variant="outline" 
                  className="w-full bg-[#4a4a6a] border-[#4a4a6a] hover:bg-[#5a5a7a] text-white text-sm"
                >
                  Connect with Us
                </Button>
                <Button 
                  className="w-full bg-[#dcf448] hover:bg-[#dcf448]/90 text-black text-sm font-medium"
                >
                  Let's Talk
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
