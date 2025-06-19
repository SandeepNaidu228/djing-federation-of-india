
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, ShoppingCart, User } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <div className="flex items-center">
              <div className="text-orange-500 font-bold text-2xl italic">ffi</div>
              <div className="ml-2">
                <div className="text-gray-800 font-semibold text-sm">DJing Federation</div>
                <div className="text-gray-600 text-xs">of India</div>
              </div>
            </div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-gray-700 hover:text-blue-600 transition-colors duration-300">Home</Link>
            <Link to="/about" className="text-gray-700 hover:text-blue-600 transition-colors duration-300">About</Link>
            <Link to="/licenses" className="text-gray-700 hover:text-blue-600 transition-colors duration-300">Licenses</Link>
            <Link to="/courses" className="text-gray-700 hover:text-blue-600 transition-colors duration-300">Courses</Link>
            <Link to="/events" className="text-gray-700 hover:text-blue-600 transition-colors duration-300">Events</Link>
            <Link to="/contact" className="text-gray-700 hover:text-blue-600 transition-colors duration-300">Contact</Link>
          </div>

          {/* Right side icons and button */}
          <div className="hidden md:flex items-center space-x-4">
            <div className="relative">
              <ShoppingCart size={20} className="text-gray-600" />
              <span className="absolute -top-2 -right-2 bg-blue-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">0</span>
            </div>
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg transition-colors duration-300 font-medium">
              Enroll Now
            </button>
            <User size={20} className="text-gray-600" />
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            <div className="flex flex-col space-y-4">
              <Link to="/" className="text-gray-700 hover:text-blue-600 transition-colors duration-300" onClick={() => setIsOpen(false)}>Home</Link>
              <Link to="/about" className="text-gray-700 hover:text-blue-600 transition-colors duration-300" onClick={() => setIsOpen(false)}>About</Link>
              <Link to="/licenses" className="text-gray-700 hover:text-blue-600 transition-colors duration-300" onClick={() => setIsOpen(false)}>Licenses</Link>
              <Link to="/courses" className="text-gray-700 hover:text-blue-600 transition-colors duration-300" onClick={() => setIsOpen(false)}>Courses</Link>
              <Link to="/events" className="text-gray-700 hover:text-blue-600 transition-colors duration-300" onClick={() => setIsOpen(false)}>Events</Link>
              <Link to="/contact" className="text-gray-700 hover:text-blue-600 transition-colors duration-300" onClick={() => setIsOpen(false)}>Contact</Link>
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg transition-colors duration-300 w-fit font-medium">
                Enroll Now
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
