
import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Calendar, MapPin, Users, Clock, ArrowRight } from 'lucide-react';

const Events = () => {
  const upcomingEvents = [
    {
      title: "Core Trainers Learning Event",
      description: "Join our comprehensive learning event for core trainers with expert sessions and hands-on workshops.",
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=250&fit=crop&crop=center",
      date: "March 15, 2026",
      time: "9:00 AM - 6:00 PM",
      location: "Mumbai Convention Center",
      attendees: "200+",
      category: "Training"
    },
    {
      title: "GYM OWNERS CONFERENCE GOA",
      description: "FFI Annual Gym Owner Conference - Network with industry leaders and learn latest business strategies.",
      image: "https://images.unsplash.com/photo-1574068468668-a05a11f871da?w=400&h=250&fit=crop&crop=center", 
      date: "April 20-21, 2026",
      time: "Full Day Event",
      location: "Goa Beach Resort",
      attendees: "500+",
      category: "Conference",
      featured: true
    },
    {
      title: "PERSONAL TRAINERS ANNUAL CONFERENCE GOA 2025",
      description: "FFI Annual Trainers Conference - Latest trends, techniques, and networking opportunities for personal trainers.",
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=250&fit=crop&crop=center",
      date: "May 10-12, 2026", 
      time: "3 Day Event",
      location: "Goa International Center",
      attendees: "300+",
      category: "Conference"
    },
    {
      title: "LICENSEE HOLDER ANNUAL MEETING MUMBAI FFI",
      description: "Annual meeting for all FFI license holders to discuss industry updates and future plans.",
      image: "https://images.unsplash.com/photo-1574068468668-a05a11f871da?w=400&h=250&fit=crop&crop=center",
      date: "June 5, 2026",
      time: "10:00 AM - 4:00 PM", 
      location: "Mumbai Business Center",
      attendees: "150+",
      category: "Meeting"
    },
    {
      title: "FFI Licensee Annual Meeting",
      description: "Connect with fellow licensees and stay updated on the latest industry developments and opportunities.",
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=250&fit=crop&crop=center",
      date: "July 18, 2026",
      time: "9:00 AM - 5:00 PM",
      location: "Delhi Convention Hall", 
      attendees: "180+",
      category: "Meeting"
    }
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative h-96 bg-gradient-to-r from-red-600 to-orange-600">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=1200&h=400&fit=crop&crop=center"
            alt="Events"
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-red-600/70"></div>
        </div>
        <div className="relative z-10 container mx-auto px-4 h-full flex items-center">
          <div className="text-white">
            <h1 className="text-5xl font-bold mb-4">Events</h1>
            <p className="text-xl">Upcoming Events</p>
          </div>
        </div>
      </section>

      {/* Events Grid */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-8">
            {upcomingEvents.map((event, index) => (
              <div key={index} className={`bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 border ${event.featured ? 'border-blue-500 ring-2 ring-blue-200' : 'border-gray-200'}`}>
                {event.featured && (
                  <div className="bg-blue-500 text-white text-center py-2 text-sm font-medium">
                    Featured Event
                  </div>
                )}
                
                <div className="relative">
                  <img 
                    src={event.image}
                    alt={event.title}
                    className="w-full h-64 object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                      {event.category}
                    </span>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-3 text-gray-900">{event.title}</h3>
                  <p className="text-gray-600 mb-6">{event.description}</p>
                  
                  <div className="space-y-3 mb-6">
                    <div className="flex items-center gap-3 text-gray-700">
                      <Calendar size={18} className="text-blue-600" />
                      <span>{event.date}</span>
                    </div>
                    <div className="flex items-center gap-3 text-gray-700">
                      <Clock size={18} className="text-green-600" />
                      <span>{event.time}</span>
                    </div>
                    <div className="flex items-center gap-3 text-gray-700">
                      <MapPin size={18} className="text-red-600" />
                      <span>{event.location}</span>
                    </div>
                    <div className="flex items-center gap-3 text-gray-700">
                      <Users size={18} className="text-purple-600" />
                      <span>{event.attendees} Expected Attendees</span>
                    </div>
                  </div>
                  
                  <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 rounded-lg transition-colors duration-300 flex items-center justify-center gap-2 font-semibold">
                    Register Now
                    <ArrowRight size={18} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Attend Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-8">Why Attend?</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold mb-2">Networking</h3>
                <p className="text-gray-600">Connect with industry professionals and expand your network</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Calendar className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-xl font-bold mb-2">Learning</h3>
                <p className="text-gray-600">Gain insights from expert speakers and workshops</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <ArrowRight className="w-8 h-8 text-orange-600" />
                </div>
                <h3 className="text-xl font-bold mb-2">Growth</h3>
                <p className="text-gray-600">Accelerate your career and business development</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Events;
