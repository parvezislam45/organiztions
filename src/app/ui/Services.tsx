'use client';
import React from "react";
import { Heart, Stethoscope, Activity, Users } from "lucide-react";

const services = [
  {
    title: "Patient Care",
    description:
      "Providing compassionate and personalized care to every patient with utmost professionalism.",
    icon: Heart,
    color: "bg-red-100 text-red-600",
  },
  {
    title: "Medical Consultation",
    description:
      "Expert medical consultations from top specialists to ensure accurate diagnosis and treatment.",
    icon: Stethoscope,
    color: "bg-blue-100 text-blue-600",
  },
  {
    title: "Emergency Services",
    description:
      "24/7 emergency care with rapid response to critical situations and life-saving interventions.",
    icon: Activity,
    color: "bg-green-100 text-green-600",
  },
  {
    title: "Community Programs",
    description:
      "Outreach and wellness programs designed to educate and support the local community.",
    icon: Users,
    color: "bg-yellow-100 text-yellow-600",
  },
];

const Services: React.FC = () => {
  return (
    <section className="bg-white py-16 px-6 md:px-12 lg:px-20">
      <div className="max-w-7xl mx-auto text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 about">
          Our <span className="text-blue-600 about">Healthcare Services</span>
        </h2>
        <p className="mt-4 text-gray-600 max-w-2xl mx-auto paragraph text-2xl">
          We provide a wide range of healthcare services with professionalism, compassion, 
          and cutting-edge technology. Our goal is to make healthcare accessible, reliable, and effective.
        </p>
      </div>

      {/* Services Grid */}
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
        {services.map((service, index) => {
          const Icon = service.icon;
          return (
            <div
              key={index}
              className="flex flex-col items-center text-center p-6 bg-gray-50 rounded-2xl shadow-lg hover:shadow-2xl transition"
            >
              <div
                className={`p-5 rounded-full mb-4 flex items-center justify-center ${service.color}`}
              >
                <Icon size={32} />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {service.title}
              </h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Services;
