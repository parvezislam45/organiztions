'use client';
import React from "react";
import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-white border-t border-gray-200 mt-16">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 py-12 grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* About */}
        <div>
          <h3 className="text-xl font-bold text-gray-900 mb-4">About Us</h3>
          <p className="text-gray-600 text-sm">
            We are a leading healthcare organization dedicated to providing premium medical services and patient care with integrity and excellence.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-bold text-gray-900 mb-4">Quick Links</h3>
          <ul className="space-y-2 text-gray-600 text-sm">
            <li><a href="#" className="hover:text-blue-600 transition">Home</a></li>
            <li><a href="#" className="hover:text-blue-600 transition">Services</a></li>
            <li><a href="#" className="hover:text-blue-600 transition">Blog</a></li>
            <li><a href="#" className="hover:text-blue-600 transition">Contact</a></li>
          </ul>
        </div>

        {/* Services */}
        <div>
          <h3 className="text-xl font-bold text-gray-900 mb-4">Our Services</h3>
          <ul className="space-y-2 text-gray-600 text-sm">
            <li><a href="#" className="hover:text-blue-600 transition">Cardiology</a></li>
            <li><a href="#" className="hover:text-blue-600 transition">Neurology</a></li>
            <li><a href="#" className="hover:text-blue-600 transition">Pediatrics</a></li>
            <li><a href="#" className="hover:text-blue-600 transition">Surgery</a></li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-xl font-bold text-gray-900 mb-4">Contact</h3>
          <p className="text-gray-600 text-sm mb-2">123 Health Street, Wellness City, HC 45678</p>
          <p className="text-gray-600 text-sm mb-2">+1 (234) 567-8900</p>
          <p className="text-gray-600 text-sm mb-4">contact@healthcare.org</p>
          <div className="flex space-x-4 mt-2">
            <a href="#" className="text-gray-600 hover:text-blue-600 transition"><Facebook size={20} /></a>
            <a href="#" className="text-gray-600 hover:text-blue-600 transition"><Twitter size={20} /></a>
            <a href="#" className="text-gray-600 hover:text-blue-600 transition"><Instagram size={20} /></a>
            <a href="#" className="text-gray-600 hover:text-blue-600 transition"><Linkedin size={20} /></a>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-200 mt-8 py-6 text-center text-gray-500 text-sm">
        &copy; {new Date().getFullYear()} Healthcare Organization. Build This Site Parvez Islam.
      </div>
    </footer>
  );
};

export default Footer;
