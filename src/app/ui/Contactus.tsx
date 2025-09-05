'use client';
import React, { useState } from "react";

const ContactUs: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission logic would go here
    console.log('Form submitted:', formData);
  };

  return (
    <section className="bg-white py-20 px-6 md:px-12 lg:px-20">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-light text-gray-900 mb-4 tracking-tight about">
            Get in <span className="font-semibold text-blue-600">Touch</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto head text-2xl">
            Have questions or want to schedule a consultation? Our team is here to help you.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left: Contact Form */}
          <div className="relative bg-white rounded-2xl shadow-xl p-10 border border-gray-100">
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl opacity-75 blur-sm -z-10"></div>
            
            <h3 className="text-2xl font-semibold text-gray-800 mb-8">Send us a message</h3>

            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="relative">
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your Name"
                  className="w-full p-4 rounded-xl border border-gray-200 focus:border-blue-400 focus:ring-1 focus:ring-blue-400 outline-none transition-all duration-300 bg-gray-200 text-black"
                  required
                />
              </div>
              <div className="relative">
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Email Address"
                  className="w-full p-4 rounded-xl border border-gray-200 focus:border-blue-400 focus:ring-1 focus:ring-blue-400 outline-none transition-all duration-300 bg-gray-200 text-black"
                  required
                />
              </div>
              <div className="relative">
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Subject"
                  className="w-full p-4 rounded-xl border border-gray-200 focus:border-blue-400 focus:ring-1 focus:ring-blue-400 outline-none transition-all duration-300 bg-gray-200 text-black"
                  required
                />
              </div>
              <div className="relative">
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Your Message"
                  className="w-full p-4 rounded-xl border border-gray-200 focus:border-blue-400 focus:ring-1 focus:ring-blue-400 outline-none transition-all duration-300 bg-gray-200 text-black h-30 resize-none"
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full py-4 bg-gradient-to-r from-blue-600 to-indigo-700 text-white font-medium rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:from-blue-700 hover:to-indigo-800 transform hover:-translate-y-1"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Right: Info / Illustration */}
          <div className="flex flex-col gap-8">
            {/* Contact Information Cards */}
            <div className="bg-gradient-to-br from-white to-gray-50 rounded-2xl p-8 shadow-md border border-gray-100 hover:shadow-lg transition-all duration-300 group mt-16">
              <div className="flex items-start mb-4">
                <div className="bg-blue-100 p-3 rounded-lg mr-4 group-hover:bg-blue-200 transition-colors duration-300">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-medium text-gray-900 mb-2">Our Office</h3>
                  <p className="text-gray-600">123 Health Street, Wellness City, HC 45678</p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-white to-gray-50 rounded-2xl p-8 shadow-md border border-gray-100 hover:shadow-lg transition-all duration-300 group mt-3">
              <div className="flex items-start mb-4">
                <div className="bg-green-100 p-3 rounded-lg mr-4 group-hover:bg-green-200 transition-colors duration-300">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-medium text-gray-900 mb-2">Email Us</h3>
                  <p className="text-gray-600">contact@healthcare.org</p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-white to-gray-50 rounded-2xl p-8 shadow-md border border-gray-100 hover:shadow-lg transition-all duration-300 group mt-3">
              <div className="flex items-start mb-4">
                <div className="bg-purple-100 p-3 rounded-lg mr-4 group-hover:bg-purple-200 transition-colors duration-300">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-medium text-gray-900 mb-2">Call Us</h3>
                  <p className="text-gray-600">+1 (234) 567-8900</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;