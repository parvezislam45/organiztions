'use client';
import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";

const testimonials = [
  {
    name: "Dr. Sarah Johnson",
    title: "Cardiologist",
    image:
      "https://images.unsplash.com/photo-1607746882042-944635dfe10e?auto=format&fit=crop&w=200&q=80",
    feedback:
      "The healthcare organization provided outstanding patient care with state-of-the-art facilities. Truly remarkable!",
  },
  {
    name: "Michael Thompson",
    title: "Patient",
    image:
      "https://files.idyllic.app/files/static/96487?width=256&optimizer=image",
    feedback:
      "I felt genuinely cared for throughout my treatment. The staff is professional, kind, and attentive.",
  },
  {
    name: "Dr. Emily Roberts",
    title: "Surgeon",
    image:
      "https://files.idyllic.app/files/static/94903?width=256&optimizer=image",
    feedback:
      "Their commitment to medical excellence and patient satisfaction is unparalleled. Highly recommend!",
  },
  {
    name: "Jessica Lee",
    title: "Patient",
    image:
      "https://images.generated.photos/1XyRfMs03-RWzDnAwyM0AZ3twEC-1s1QQjuo6a1Uryw/rs:fit:256:256/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/MDI1Mjk3LmpwZw.jpg",
    feedback:
      "Amazing experience! The staff made me feel comfortable and confident in my treatment plan.",
  },
];

const Testimonials: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-play
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
      );
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <section className="bg-white py-16 px-6 md:px-12 lg:px-20">
      <div className="max-w-7xl mx-auto text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 about">
          What Our <span className="text-blue-600">Clients Say</span>
        </h2>
      </div>

      <div className="relative max-w-4xl mx-auto overflow-hidden">
        {/* Slides */}
        <div
          className="flex transition-transform duration-700 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {testimonials.map((t, index) => (
            <div
              key={index}
              className="w-full flex-shrink-0 p-6 md:p-8 lg:p-12 rounded-2xl bg-gray-50 shadow-lg mx-2"
            >
              <div className="flex flex-col items-center text-center">
                <div className="flex items-center justify-center mb-4">
                  <img
                    src={t.image}
                    alt={t.name}
                    className="w-20 h-20 rounded-full border-4 border-blue-600 object-cover"
                  />
                </div>
                <p className="text-gray-700 italic mb-4">{t.feedback}</p>
                <h4 className="text-lg font-semibold text-gray-900">{t.name}</h4>
                <p className="text-sm text-gray-500">{t.title}</p>
                <div className="flex justify-center mt-3 space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      size={16}
                      className="text-yellow-400"
                    />
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Left/Right Buttons */}
        <button
          onClick={prevSlide}
          className="absolute top-1/2 left-0 -translate-y-1/2 bg-gray-800 text-white p-3 rounded-full shadow-md hover:bg-gray-700 transition"
        >
          <ChevronLeft size={24} />
        </button>
        <button
          onClick={nextSlide}
          className="absolute top-1/2 right-0 -translate-y-1/2 bg-gray-800 text-white p-3 rounded-full shadow-md hover:bg-gray-700 transition"
        >
          <ChevronRight size={24} />
        </button>

        {/* Dots */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-3">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full transition-all ${
                currentIndex === index ? "bg-blue-600 scale-125" : "bg-gray-400"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
