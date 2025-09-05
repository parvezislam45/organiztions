'use client';
import React from "react";

const About: React.FC = () => {
  return (
    <section className="bg-white py-20 px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-light text-gray-900 mb-6 tracking-tight about">
            About <span className="font-semibold text-blue-600">Global Healthcare</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-indigo-600 mx-auto mb-8"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Content */}
          <div className="flex flex-col justify-center space-y-8">
            <div>
              <h3 className="text-4xl font-semibold text-gray-900 leading-tight mb-6">
                Empowering <span className="text-blue-600 menu">Healthcare</span> Excellence Through Innovation
              </h3>

              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                At <span className="font-medium text-gray-900">Global HealthCare Organization</span>, 
                we are dedicated to transforming lives through pioneering healthcare solutions, 
                cutting-edge medical research, and compassionate patient-centered care.
              </p>

              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Our mission is to create healthier communities worldwide by delivering accessible, 
                reliable, and innovative healthcare services that set new standards in medical excellence.
              </p>
            </div>

            {/* Stats Section */}
            <div className="grid grid-cols-2 gap-6 mt-6">
              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-6 rounded-2xl text-center border border-gray-100">
                <div className="text-3xl font-bold text-blue-600 mb-2">250+</div>
                <div className="text-gray-700 font-medium">Specialists</div>
              </div>
              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-6 rounded-2xl text-center border border-gray-100">
                <div className="text-3xl font-bold text-blue-600 mb-2">15</div>
                <div className="text-gray-700 font-medium">Years Experience</div>
              </div>
            </div>

            <div className="mt-8 flex space-x-6">
              <button className="px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-700 hover:from-blue-700 hover:to-indigo-800 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                Learn More
              </button>
              <button className="px-8 py-4 bg-white border border-gray-400 hover:border-blue-300 text-gray-800 font-semibold rounded-xl shadow-md hover:shadow-lg transition-all duration-300">
                Contact Us
              </button>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-tr from-blue-100 to-indigo-100 rounded-2xl -z-10 transform rotate-2"></div>
            <div className="relative w-full h-[500px] rounded-2xl overflow-hidden shadow-2xl border-4 border-white">
              <img 
                src="https://plus.unsplash.com/premium_photo-1702598808910-2226a0dc8c98?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Healthcare professionals discussing patient care" 
                className="object-cover w-full h-full transition-transform duration-700 hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent"></div>
              
              {/* Floating Card */}
              <div className="absolute bottom-6 left-6 bg-white/95 backdrop-blur-sm p-6 rounded-2xl shadow-lg max-w-xs border border-gray-100">
                <h4 className="font-semibold text-gray-900 mb-2">Patient-Centered Care</h4>
                <p className="text-sm text-gray-600">Our team prioritizes individualized treatment plans for optimal outcomes.</p>
              </div>
            </div>

            {/* Accent Element */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-blue-600 rounded-full opacity-10"></div>
            <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-indigo-600 rounded-full opacity-10"></div>
          </div>
        </div>

        {/* Trust Badges */}
        <div className="mt-20 pt-12 border-t border-gray-100">
          <h4 className="text-center text-gray-600 font-medium mb-8">Trusted by leading medical institutions worldwide</h4>
          <div className="flex flex-wrap justify-center gap-8 md:gap-16 opacity-70">
            {[1, 2, 3, 4, 5].map((item) => (
              <div key={item} className="h-12 w-32 bg-gradient-to-r from-gray-100 to-gray-400 rounded-lg"></div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;