
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="fixed top-0 w-full bg-[#0a0119]/95 backdrop-blur-sm z-50 border-b border-[#f159b2]/20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <img 
              src="/lovable-uploads/c9b54469-2d6b-4ce5-af1d-9f9ec3f3adba.png" 
              alt="Geisel Software" 
              className="h-8"
            />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <a href="#home" className="text-white hover:text-[#dcf448] transition-colors font-medium">
              Home
            </a>
            <a href="#services" className="text-white hover:text-[#dcf448] transition-colors font-medium">
              Services
            </a>
            <a href="#about" className="text-white hover:text-[#dcf448] transition-colors font-medium">
              About
            </a>
            <a href="#contact" className="text-white hover:text-[#dcf448] transition-colors font-medium">
              Contact
            </a>
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex">
            <Button className="bg-[#f159b2] hover:bg-[#f159b2]/80 text-white font-medium">
              Book Discovery Call
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button variant="ghost" size="sm" onClick={toggleMenu} className="text-white hover:text-[#dcf448]">
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-[#0a0119] border-t border-[#f159b2]/20">
              <a href="#home" className="block px-3 py-2 text-white hover:text-[#dcf448] font-medium">
                Home
              </a>
              <a href="#services" className="block px-3 py-2 text-white hover:text-[#dcf448] font-medium">
                Services
              </a>
              <a href="#about" className="block px-3 py-2 text-white hover:text-[#dcf448] font-medium">
                About
              </a>
              <a href="#contact" className="block px-3 py-2 text-white hover:text-[#dcf448] font-medium">
                Contact
              </a>
              <div className="px-3 py-2">
                <Button className="w-full bg-[#f159b2] hover:bg-[#f159b2]/80 text-white font-medium">
                  Book Discovery Call
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
