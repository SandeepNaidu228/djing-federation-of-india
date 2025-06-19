
import React from 'react';
import { Phone, Mail, MapPin, Instagram, Facebook, Youtube, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Contact Info */}
          <div>
            <div className="flex items-center mb-6">
              <div className="text-orange-500 font-bold text-2xl italic">ffi</div>
              <div className="ml-2">
                <div className="text-white font-semibold text-sm">DJing Federation</div>
                <div className="text-gray-400 text-xs">of India</div>
              </div>
            </div>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <Phone size={18} className="text-blue-400" />
                <span>+91 88560 42808</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail size={18} className="text-blue-400" />
                <span>info@djindia.in</span>
              </div>
              <div className="flex items-center gap-3">
                <MapPin size={18} className="text-blue-400" />
                <span>Nagpur, Maharashtra, India</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li><a href="#home" className="hover:text-blue-400 transition-colors duration-300">Home</a></li>
              <li><a href="#about" className="hover:text-blue-400 transition-colors duration-300">About Us</a></li>
              <li><a href="#courses" className="hover:text-blue-400 transition-colors duration-300">Courses</a></li>
              <li><a href="#events" className="hover:text-blue-400 transition-colors duration-300">Events</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xl font-bold mb-6">Services</h3>
            <ul className="space-y-3">
              <li><a href="#" className="hover:text-blue-400 transition-colors duration-300">DJ Training</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors duration-300">Certification</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors duration-300">Equipment Rental</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors duration-300">Event Management</a></li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-xl font-bold mb-6">Follow Us</h3>
            <div className="flex gap-4 mb-6">
              <a href="#" className="p-3 bg-gray-800 rounded-full hover:bg-blue-600 transition-colors duration-300">
                <Instagram size={20} />
              </a>
              <a href="#" className="p-3 bg-gray-800 rounded-full hover:bg-blue-600 transition-colors duration-300">
                <Facebook size={20} />
              </a>
              <a href="#" className="p-3 bg-gray-800 rounded-full hover:bg-red-600 transition-colors duration-300">
                <Youtube size={20} />
              </a>
              <a href="#" className="p-3 bg-gray-800 rounded-full hover:bg-blue-500 transition-colors duration-300">
                <Linkedin size={20} />
              </a>
            </div>
            
            <div>
              <h4 className="font-semibold mb-3">Newsletter</h4>
              <div className="flex gap-2">
                <input 
                  type="email" 
                  placeholder="Your email" 
                  className="flex-1 px-3 py-2 bg-gray-800 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <button className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-lg transition-colors duration-300">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>

        <hr className="border-gray-700 my-8" />
        
        <div className="text-center text-gray-400">
          <p>&copy; 2026 DJing Federation of India. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
