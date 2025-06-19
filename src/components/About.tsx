import React from 'react';
import { GraduationCap, TrendingUp, ArrowRight } from 'lucide-react';

const About = () => {
  return (
    <>
      {/* Featured Course Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 text-center">
          <div className="mb-8">
            <span className="text-blue-600 font-medium">Live Courses</span>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-2 mb-12">
              Featured live Course of the Week
            </h2>
          </div>
          
          <div className="max-w-md mx-auto">
            <div className="bg-white rounded-2xl shadow-xl p-6 border">
              <div className="relative mb-4">
                <img 
                  src="https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400&h=250&fit=crop&crop=center" 
                  alt="DJ performing CPR training"
                  className="w-full h-48 object-cover rounded-xl"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm font-medium">
                    DJ Training
                  </span>
                </div>
              </div>
              
              <div className="flex items-center gap-3 mb-3">
                <div className="text-orange-500 font-bold text-xl italic">ffi</div>
                <span className="text-gray-600 text-sm">DJing Federation of India</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            {/* Left Content - Images */}
            <div className="lg:w-1/2">
              <div className="relative">
                <img 
                  src="https://images.unsplash.com/photo-1574068468668-a05a11f871da?w=500&h=600&fit=crop&crop=center" 
                  alt="Group of people learning together"
                  className="w-full h-96 object-cover rounded-2xl shadow-2xl"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl"></div>
                
                {/* Decorative element */}
                <div className="absolute -top-6 -left-6 w-24 h-24 bg-orange-400 rounded-full opacity-20"></div>
              </div>
            </div>

            {/* Right Content */}
            <div className="lg:w-1/2">
              <div className="mb-6">
                <span className="text-orange-500 font-medium text-sm uppercase tracking-wider">OUR PURPOSE AND PROMISE</span>
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-4 mb-6">
                  Redefining DJing industry in <span className="text-orange-500">India</span>
                </h2>
                <div className="w-16 h-1 bg-orange-500 mb-6"></div>
              </div>
              
              <div className="border-l-4 border-orange-500 pl-6 mb-8">
                <p className="text-lg text-gray-600 leading-relaxed">
                  The DJing Federation of India (DFI) is committed to transforming the future of the DJ industry. As the leading platform for DJ professionals, we're dedicated to building trust, advancing careers, and fostering innovation.
                </p>
              </div>

              <div className="grid gap-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <GraduationCap className="w-6 h-6 text-red-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Building Trust</h3>
                    <p className="text-gray-600">A unified platform to support and elevate DJ professionals.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <TrendingUp className="w-6 h-6 text-red-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Driving Growth</h3>
                    <p className="text-gray-600">Empowering DJs with skills and opportunities to succeed.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-900 text-white relative overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1574068468668-a05a11f871da?w=1200&h=600&fit=crop&crop=center" 
            alt="People working out in gym"
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gray-900/70"></div>
        </div>
        
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Join the Network That Fuels Your Success
          </h2>
          <button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center gap-2 mx-auto">
            Become a Member
            <ArrowRight size={20} />
          </button>
        </div>
      </section>
    </>
  );
};

export default About;
