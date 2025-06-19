
import React from 'react';
import { Calendar, MapPin, ArrowRight } from 'lucide-react';

const Events = () => {
  const events = [
    {
      id: 1,
      title: "Annual DJ Conference",
      location: "Goa, India",
      date: "February 2026",
      image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400&h=300&fit=crop&crop=center",
      description: "Join India's biggest DJ conference with workshops, performances, and networking opportunities."
    },
    {
      id: 2,
      title: "National DJ Championship",
      location: "Mumbai, India", 
      date: "March 2026",
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=300&fit=crop&crop=center",
      description: "Compete with the best DJs across the nation and showcase your skills on the biggest stage."
    },
    {
      id: 3,
      title: "DJ Certification Workshop",
      location: "Delhi, India",
      date: "April 2026", 
      image: "https://images.unsplash.com/photo-1574068468668-a05a11f871da?w=400&h=300&fit=crop&crop=center",
      description: "Get certified as a professional DJ with our comprehensive training program."
    }
  ];

  return (
    <section id="events" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16 text-gray-900">Upcoming Events</h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {events.map((event) => (
            <div key={event.id} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border">
              <div className="relative">
                <img 
                  src={event.image} 
                  alt={event.title}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3 text-gray-900">{event.title}</h3>
                <p className="text-gray-600 mb-4 text-sm">{event.description}</p>
                
                <div className="flex items-center gap-4 mb-4 text-sm text-gray-500">
                  <div className="flex items-center gap-1">
                    <MapPin size={16} />
                    <span>{event.location}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Calendar size={16} />
                    <span>{event.date}</span>
                  </div>
                </div>
                
                <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 rounded-lg transition-colors duration-300 flex items-center justify-center gap-2 font-semibold">
                  View Details
                  <ArrowRight size={16} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Events;
