'use client';
import React from "react";
import Image from "next/image";
import { Play } from "lucide-react";

const Video: React.FC = () => {
  return (
    <section className="bg-white py-16 px-6 md:px-12 lg:px-20">
      <div className="max-w-7xl mx-auto text-center">
        {/* Title */}
        <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6 about">
          Watch Our <span className="text-blue-600">Healthcare Story</span>
        </h2>
        <p className=" text-gray-600 mb-12 max-w-3xl mx-auto paragraph text-2xl">
          Discover how we transform lives with innovative healthcare solutions, compassionate care, 
          and cutting-edge technology. Our mission is to bring excellence to every patient we serve.
        </p>

        {/* Video Thumbnail with Play Button */}
        <div className="relative w-full max-w-4xl mx-auto rounded-2xl overflow-hidden shadow-xl">
          <img src="https://plus.unsplash.com/premium_photo-1702598658235-8cd50f9377c3?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Video Thumbnail"className="object-cover w-full h-full" />

          {/* Animated Play Button */}
          <button className="absolute inset-0 flex items-center justify-center">
            <div className="w-20 h-20 bg-blue-600 bg-opacity-80 rounded-full flex items-center justify-center cursor-pointer shadow-lg hover:scale-110 transition transform">
              <Play size={40} className="text-white animate-pulse" />
            </div>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Video;
