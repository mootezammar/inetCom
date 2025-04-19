import React, { useState } from 'react';
import { Menu, X, GraduationCap } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  
  const closeMenu = () => {
    setIsOpen(false);
  };
  
  const isActive = (path: string) => {
    return location.pathname === path;
  };
  
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white shadow-md">
      <div className="container-custom">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2" onClick={closeMenu}>
            <GraduationCap size={28} className="text-primary-700" />
            <span className="text-xl font-bold text-primary-700 font-serif">InetCom</span>
          </Link>
          
          {/* Desktop Menu */}
          <div className="hidden space-x-8 md:flex">
            <Link 
              to="/" 
              className={`font-medium transition-colors hover:text-primary-600 ${
                isActive('/') ? 'text-primary-600' : 'text-gray-700'
              }`}
            >
              Accueil
            </Link>
            <Link 
              to="/programs" 
              className={`font-medium transition-colors hover:text-primary-600 ${
                isActive('/programs') || location.pathname.includes('/programs') 
                  ? 'text-primary-600' 
                  : 'text-gray-700'
              }`}
            >
              Filières
            </Link>
            <Link 
              to="/about" 
              className={`font-medium transition-colors hover:text-primary-600 ${
                isActive('/about') ? 'text-primary-600' : 'text-gray-700'
              }`}
            >
              À Propos
            </Link>
            <Link 
              to="/contact" 
              className={`font-medium transition-colors hover:text-primary-600 ${
                isActive('/contact') ? 'text-primary-600' : 'text-gray-700'
              }`}
            >
              Contact
            </Link>
          </div>
          
          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button 
              onClick={toggleMenu}
              className="p-2 text-gray-600 transition-colors rounded-md hover:text-primary-600 hover:bg-gray-100"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile Menu */}
      {isOpen && (
        <div className="px-2 pt-2 pb-4 space-y-1 bg-white border-t md:hidden animate-fade-in">
          <Link 
            to="/" 
            className={`block px-3 py-2 rounded-md font-medium ${
              isActive('/') 
                ? 'bg-primary-100 text-primary-700' 
                : 'text-gray-700 hover:bg-gray-100'
            }`}
            onClick={closeMenu}
          >
            Accueil
          </Link>
          <Link 
            to="/programs" 
            className={`block px-3 py-2 rounded-md font-medium ${
              isActive('/programs') || location.pathname.includes('/programs')
                ? 'bg-primary-100 text-primary-700' 
                : 'text-gray-700 hover:bg-gray-100'
            }`}
            onClick={closeMenu}
          >
            Filières
          </Link>
          <Link 
            to="/about" 
            className={`block px-3 py-2 rounded-md font-medium ${
              isActive('/about') 
                ? 'bg-primary-100 text-primary-700' 
                : 'text-gray-700 hover:bg-gray-100'
            }`}
            onClick={closeMenu}
          >
            À Propos
          </Link>
          <Link 
            to="/contact" 
            className={`block px-3 py-2 rounded-md font-medium ${
              isActive('/contact') 
                ? 'bg-primary-100 text-primary-700' 
                : 'text-gray-700 hover:bg-gray-100'
            }`}
            onClick={closeMenu}
          >
            Contact
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;