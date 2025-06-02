
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="fixed top-0 w-full bg-white/95 backdrop-blur-sm z-50 border-b border-gray-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <h1 className="text-xl font-bold text-gray-900">
              Geisel<span className="text-orange-600">.software</span>
            </h1>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <a href="#home" className="text-gray-600 hover:text-orange-600 transition-colors font-medium">
              Home
            </a>
            <a href="#services" className="text-gray-600 hover:text-orange-600 transition-colors font-medium">
              Services
            </a>
            <a href="#about" className="text-gray-600 hover:text-orange-600 transition-colors font-medium">
              About
            </a>
            <a href="#contact" className="text-gray-600 hover:text-orange-600 transition-colors font-medium">
              Contact
            </a>
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex">
            <Button className="bg-orange-600 hover:bg-orange-700 text-white font-medium">
              Book Discovery Call
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button variant="ghost" size="sm" onClick={toggleMenu}>
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t border-gray-200">
              <a href="#home" className="block px-3 py-2 text-gray-600 hover:text-orange-600 font-medium">
                Home
              </a>
              <a href="#services" className="block px-3 py-2 text-gray-600 hover:text-orange-600 font-medium">
                Services
              </a>
              <a href="#about" className="block px-3 py-2 text-gray-600 hover:text-orange-600 font-medium">
                About
              </a>
              <a href="#contact" className="block px-3 py-2 text-gray-600 hover:text-orange-600 font-medium">
                Contact
              </a>
              <div className="px-3 py-2">
                <Button className="w-full bg-orange-600 hover:bg-orange-700 text-white font-medium">
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
