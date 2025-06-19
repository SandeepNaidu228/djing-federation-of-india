
import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { PlayCircle, Clock, Users, Star, ArrowRight } from 'lucide-react';

const Courses = () => {
  const courses = [
    {
      title: "Gym Business Licensing Event",
      description: "Learn how to start and license your gym business",
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=250&fit=crop&crop=center",
      duration: "4 hours",
      students: "150+",
      rating: 4.8,
      price: "₹5,999",
      category: "Business"
    },
    {
      title: "Managing Fitness and Nutrition", 
      description: "Comprehensive course on fitness and nutrition management",
      image: "https://images.unsplash.com/photo-1574068468668-a05a11f871da?w=400&h=250&fit=crop&crop=center",
      duration: "8 weeks",
      students: "200+", 
      rating: 4.9,
      price: "₹12,999",
      category: "Fitness"
    },
    {
      title: "FFI Fitness Coaching",
      description: "Professional fitness coaching certification program",
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=250&fit=crop&crop=center",
      duration: "12 weeks",
      students: "300+",
      rating: 4.7,
      price: "₹18,999", 
      category: "Coaching"
    },
    {
      title: "Preparation for Pro Trainers", 
      description: "Advanced preparation course for professional trainers",
      image: "https://images.unsplash.com/photo-1574068468668-a05a11f871da?w=400&h=250&fit=crop&crop=center",
      duration: "6 weeks",
      students: "120+",
      rating: 4.6,
      price: "₹15,999",
      category: "Professional"
    },
    {
      title: "Inclusive Standards Eligibility Program",
      description: "Meet industry standards with our eligibility program", 
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=250&fit=crop&crop=center",
      duration: "10 weeks",
      students: "180+",
      rating: 4.8,
      price: "₹20,999",
      category: "Standards"
    },
    {
      title: "Nutrition Techniques",
      description: "Master advanced nutrition techniques and meal planning",
      image: "https://images.unsplash.com/photo-1574068468668-a05a11f871da?w=400&h=250&fit=crop&crop=center",
      duration: "6 weeks", 
      students: "250+",
      rating: 4.9,
      price: "₹13,999",
      category: "Nutrition"
    },
    {
      title: "Group Fitness Instructor",
      description: "Become a certified group fitness instructor",
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=250&fit=crop&crop=center",
      duration: "8 weeks",
      students: "170+", 
      rating: 4.7,
      price: "₹16,999",
      category: "Group Fitness"
    },
    {
      title: "Yoga and Cell Cat Personal for Gym Trainers",
      description: "Specialized yoga and cellular training for gym trainers",
      image: "https://images.unsplash.com/photo-1574068468668-a05a11f871da?w=400&h=250&fit=crop&crop=center",
      duration: "12 weeks",
      students: "140+",
      rating: 4.8,
      price: "₹22,999",
      category: "Specialized"
    }
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative h-96 bg-gradient-to-r from-purple-600 to-pink-600">
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative z-10 container mx-auto px-4 h-full flex items-center">
          <div className="text-white">
            <h1 className="text-5xl font-bold mb-4">Level Up Your Skills with Industry Approved Courses</h1>
            <p className="text-xl">Our Courses</p>
          </div>
        </div>
      </section>

      {/* Courses Grid */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {courses.map((course, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border">
                <div className="relative">
                  <img 
                    src={course.image}
                    alt={course.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                      {course.category}
                    </span>
                  </div>
                  <div className="absolute inset-0 bg-black/20 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                    <PlayCircle className="w-12 h-12 text-white" />
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-lg font-bold mb-2 text-gray-900 line-clamp-2">{course.title}</h3>
                  <p className="text-gray-600 mb-4 text-sm line-clamp-2">{course.description}</p>
                  
                  <div className="flex items-center gap-4 mb-4 text-sm text-gray-500">
                    <div className="flex items-center gap-1">
                      <Clock size={14} />
                      <span>{course.duration}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Users size={14} />
                      <span>{course.students}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Star size={14} className="text-yellow-500 fill-current" />
                      <span>{course.rating}</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="text-2xl font-bold text-blue-600">{course.price}</div>
                    <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors duration-300 flex items-center gap-1 text-sm">
                      Enroll
                      <ArrowRight size={14} />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Courses;
