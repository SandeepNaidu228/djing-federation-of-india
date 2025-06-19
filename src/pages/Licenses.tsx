
import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Shield, Award, CheckCircle, ArrowRight } from 'lucide-react';

const Licenses = () => {
  const licenses = [
    {
      title: "Basic DJ License",
      description: "Entry-level certification for aspiring DJs",
      features: ["Basic mixing techniques", "Equipment handling", "Music theory basics", "Performance fundamentals"],
      price: "₹15,000",
      duration: "3 months"
    },
    {
      title: "Professional DJ License", 
      description: "Advanced certification for professional DJs",
      features: ["Advanced mixing", "Live performance", "Event management", "Business skills", "Marketing strategies"],
      price: "₹35,000",
      duration: "6 months",
      popular: true
    },
    {
      title: "Master DJ License",
      description: "Expert-level certification with teaching rights",
      features: ["All professional features", "Teaching certification", "Business licensing", "Mentorship program", "Lifetime support"],
      price: "₹55,000", 
      duration: "12 months"
    }
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative h-96 bg-gradient-to-r from-green-600 to-blue-700">
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative z-10 container mx-auto px-4 h-full flex items-center">
          <div className="text-white">
            <h1 className="text-5xl font-bold mb-4">Become a Licensed Member of FFI</h1>
            <p className="text-xl">Get Your License</p>
          </div>
        </div>
      </section>

      {/* License Types Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Choose Your License Type</h2>
            <p className="text-lg text-gray-600">Select the certification level that matches your career goals</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {licenses.map((license, index) => (
              <div key={index} className={`relative bg-white rounded-2xl shadow-xl p-8 border-2 ${license.popular ? 'border-blue-500' : 'border-gray-200'}`}>
                {license.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-blue-500 text-white px-6 py-2 rounded-full text-sm font-medium">Most Popular</span>
                  </div>
                )}
                
                <div className="text-center mb-6">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Award className="w-8 h-8 text-blue-600" />
                  </div>
                  <h3 className="text-2xl font-bold mb-2">{license.title}</h3>
                  <p className="text-gray-600 mb-4">{license.description}</p>
                  <div className="text-3xl font-bold text-blue-600 mb-2">{license.price}</div>
                  <p className="text-gray-500">Duration: {license.duration}</p>
                </div>
                
                <ul className="space-y-3 mb-8">
                  {license.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <button className={`w-full py-4 px-6 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center gap-2 ${
                  license.popular 
                    ? 'bg-blue-600 hover:bg-blue-700 text-white' 
                    : 'bg-gray-100 hover:bg-gray-200 text-gray-800'
                }`}>
                  Get License
                  <ArrowRight size={20} />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-16">License Benefits</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Shield className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Official Recognition</h3>
                  <p className="text-gray-600">Get officially recognized certification from FFI</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Award className="w-6 h-6 text-green-600" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Career Advancement</h3>
                  <p className="text-gray-600">Boost your career with professional credentials</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Licenses;
