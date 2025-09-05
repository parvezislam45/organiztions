// src/app/pages/History.tsx
"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  CalendarIcon,
  MapPinIcon,
  UsersIcon,
  TrophyIcon,
  HeartIcon,
  StarIcon,
  ArrowRightIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
} from "@heroicons/react/24/outline";

const History: React.FC = () => {
  const [currentMilestone, setCurrentMilestone] = useState(0);

  const milestones = [
    {
      year: "2000",
      title: "Foundation of HealthPlus",
      description:
        "Established with a vision to provide accessible healthcare to all communities. Started with a single clinic in downtown.",
      image:
        "https://tse4.mm.bing.net/th/id/OIP.QajWy4lf23jpl00l9TWclgHaE8?rs=1&pid=ImgDetMain&o=7&rm=3",
      achievements: [
        "First clinic opened",
        "10 medical staff",
        "Served 500+ patients in first year",
      ],
    },
    {
      year: "2005",
      title: "Expansion and Growth",
      description:
        "Expanded to 5 locations across the city. Introduced specialized departments and advanced medical equipment.",
      image:
        "https://img.freepik.com/premium-photo/3d-chart-uptrend-arrow-visualizes-statistics-business-growth-profit_795881-13509.jpg",
      achievements: [
        "5 locations established",
        "50+ medical professionals",
        "Introduced telemedicine services",
      ],
    },
    {
      year: "2010",
      title: "Research Division Launch",
      description:
        "Founded our research division focusing on innovative treatments and medical advancements. Published first research paper.",
      image:
        "https://tse1.mm.bing.net/th/id/OIP.Osvis4Y49jm2Onfa962tmgHaC0?rs=1&pid=ImgDetMain&o=7&rm=3",
      achievements: [
        "Research division established",
        "First clinical trials",
        "Partnership with universities",
      ],
    },
    {
      year: "2015",
      title: "International Recognition",
      description:
        "Received international accreditation and awards for excellence in patient care and medical innovation.",
      image:
        "https://symbolismdesk.com/wp-content/uploads/2023/11/International-Recognition-1.jpg",
      achievements: [
        "International accreditation",
        "Award for medical excellence",
        "Expanded to 15 locations",
      ],
    },
    {
      year: "2020",
      title: "Pandemic Response",
      description:
        "Played a crucial role in pandemic response, setting up dedicated facilities and vaccination centers.",
      image:
        "https://tse3.mm.bing.net/th/id/OIP.yv1lBPBEeSf5I1h-b4R6OgHaEK?rs=1&pid=ImgDetMain&o=7&rm=3",
      achievements: [
        "Emergency response team",
        "Vaccination centers",
        "Remote care expansion",
      ],
    },
    {
      year: "2023",
      title: "Modern Healthcare Leader",
      description:
        "Became a leading healthcare provider with state-of-the-art facilities and comprehensive medical services.",
      image:
        "https://media.licdn.com/dms/image/C5112AQE49u08jTrcvQ/article-cover_image-shrink_600_2000/0/1520091664461?e=2147483647&v=beta&t=EincK5Uzuv4Jq26wHcfRAbVCSUADDiHF1961aVNGc38",
      achievements: [
        "25+ locations",
        "500+ medical staff",
        "1M+ patients served",
      ],
    },
  ];

  const stats = [
    { icon: UsersIcon, value: "500+", label: "Medical Professionals" },
    { icon: MapPinIcon, value: "25+", label: "Locations" },
    { icon: HeartIcon, value: "1M+", label: "Patients Served" },
    { icon: TrophyIcon, value: "15+", label: "Awards & Recognitions" },
  ];

  const values = [
    {
      title: "Commitment to Excellence",
      description:
        "Always striving for the highest standards in medical care and patient experience.",
      icon: StarIcon,
      color: "bg-amber-100 text-amber-600",
    },
    {
      title: "Patient-Centered Care",
      description:
        "Putting patients at the heart of everything we do, with compassion and empathy.",
      icon: HeartIcon,
      color: "bg-red-100 text-red-600",
    },
    {
      title: "Innovation & Research",
      description:
        "Continuously advancing medical knowledge through research and innovation.",
      icon: TrophyIcon,
      color: "bg-blue-100 text-blue-600",
    },
    {
      title: "Community Impact",
      description:
        "Making a positive difference in the communities we serve through outreach programs.",
      icon: UsersIcon,
      color: "bg-green-100 text-green-600",
    },
  ];

  const nextMilestone = () => {
    setCurrentMilestone((prev) => (prev + 1) % milestones.length);
  };

  const prevMilestone = () => {
    setCurrentMilestone(
      (prev) => (prev - 1 + milestones.length) % milestones.length
    );
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-blue-50 to-indigo-50 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-72 h-72 bg-blue-200 rounded-full -translate-y-36 translate-x-36 opacity-50"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-indigo-200 rounded-full translate-y-32 -translate-x-32 opacity-50"></div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              Our History & Journey
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Two decades of excellence in healthcare, innovation, and community
              service
            </p>
            <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center p-8 bg-gray-50 rounded-2xl hover:shadow-lg transition-shadow duration-300"
              >
                <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <stat.icon className="h-8 w-8 text-blue-600" />
                </div>
                <div className="text-3xl font-bold text-gray-800 mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-600">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Our Journey Through Time
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Key milestones that shaped our organization and the communities we
              serve
            </p>
          </motion.div>

          {/* Desktop Timeline */}
          <div className="hidden lg:block">
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-blue-200"></div>

              {milestones.map((milestone, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className={`flex items-center justify-between mb-16 ${
                    index % 2 === 0 ? "flex-row" : "flex-row-reverse"
                  }`}
                >
                  <div
                    className={`w-5/12 ${
                      index % 2 === 0 ? "text-right" : "text-left"
                    }`}
                  >
                    <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                      <div className="flex items-center gap-4 mb-4">
                        <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center">
                          <CalendarIcon className="h-6 w-6 text-white" />
                        </div>
                        <span className="text-2xl font-bold text-blue-600">
                          {milestone.year}
                        </span>
                      </div>
                      <h3 className="text-xl font-bold text-gray-800 mb-3">
                        {milestone.title}
                      </h3>
                      <p className="text-gray-600 mb-4">
                        {milestone.description}
                      </p>
                      <ul className="space-y-2">
                        {milestone.achievements.map((achievement, i) => (
                          <li
                            key={i}
                            className="flex items-center gap-2 text-gray-600"
                          >
                            <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                            {achievement}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="w-2/12 flex justify-center">
                    <div className="w-6 h-6 bg-blue-600 rounded-full border-4 border-white shadow-lg"></div>
                  </div>
                  <div className="w-5/12">
                    <img
                      src={milestone.image}
                      alt={milestone.title}
                      className="h-64 w-full object-cover rounded-2xl shadow-lg"
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Mobile Timeline */}
          <div className="lg:hidden">
            <div className="relative">
              <div className="h-96 bg-gradient-to-br from-blue-100 to-indigo-50 rounded-2xl p-8 flex flex-col justify-center">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center">
                    <CalendarIcon className="h-6 w-6 text-white" />
                  </div>
                  <span className="text-2xl font-bold text-blue-600">
                    {milestones[currentMilestone].year}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-gray-800 mb-4">
                  {milestones[currentMilestone].title}
                </h3>
                <p className="text-gray-600 mb-6">
                  {milestones[currentMilestone].description}
                </p>

                <ul className="space-y-2 mb-8">
                  {milestones[currentMilestone].achievements.map(
                    (achievement, i) => (
                      <li
                        key={i}
                        className="flex items-center gap-2 text-gray-600"
                      >
                        <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                        {achievement}
                      </li>
                    )
                  )}
                </ul>

                <div className="flex justify-between items-center">
                  <button
                    onClick={prevMilestone}
                    className="p-3 bg-white rounded-full shadow-md hover:shadow-lg transition-shadow duration-300"
                  >
                    <ChevronLeftIcon className="h-5 w-5 text-gray-700" />
                  </button>

                  <div className="flex gap-2">
                    {milestones.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentMilestone(index)}
                        className={`w-2 h-2 rounded-full ${
                          index === currentMilestone
                            ? "bg-blue-600"
                            : "bg-gray-300"
                        }`}
                      />
                    ))}
                  </div>

                  <button
                    onClick={nextMilestone}
                    className="p-3 bg-white rounded-full shadow-md hover:shadow-lg transition-shadow duration-300"
                  >
                    <ChevronRightIcon className="h-5 w-5 text-gray-700" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Our Enduring Values
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              The principles that have guided us since the beginning and
              continue to shape our future
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center p-8 bg-gray-50 rounded-2xl hover:shadow-lg transition-shadow duration-300"
              >
                <div
                  className={`w-16 h-16 ${value.color} rounded-2xl flex items-center justify-center mx-auto mb-6`}
                >
                  <value.icon className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-4">
                  {value.title}
                </h3>
                <p className="text-gray-600">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Future Vision Section */}
      <section className="py-20 bg-gradient-to-r from-blue-50 to-indigo-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-white rounded-3xl p-12 shadow-2xl text-center"
            >
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                Looking Toward the Future
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                As we continue our journey, we remain committed to innovation,
                excellence, and expanding access to quality healthcare for all
                communities.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                {[
                  {
                    goal: "Global Expansion",
                    description: "Opening new facilities worldwide",
                  },
                  {
                    goal: "AI Integration",
                    description: "Implementing AI-assisted diagnostics",
                  },
                  {
                    goal: "Research Excellence",
                    description: "Leading medical breakthroughs",
                  },
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="p-6 bg-gray-50 rounded-xl"
                  >
                    <h3 className="font-semibold text-gray-800 mb-2">
                      {item.goal}
                    </h3>
                    <p className="text-gray-600 text-sm">{item.description}</p>
                  </motion.div>
                ))}
              </div>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-blue-600 text-white px-8 py-4 rounded-xl font-semibold hover:bg-blue-700 transition-colors duration-300 flex items-center justify-center gap-2 mx-auto"
              >
                Read Our Future Plan
                <ArrowRightIcon className="h-5 w-5" />
              </motion.button>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default History;
