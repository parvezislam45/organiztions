"use client";

import React from "react";
import { motion } from "framer-motion";
import { Linkedin, Twitter, Facebook, Mail, Award, Clock, Users, Heart } from "lucide-react";

const teamMembers = [
  {
    id: 1,
    name: "Dr. Sarah Johnson",
    role: "Chief Cardiologist",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    bio: "Expert in heart health with over 15 years of experience in advanced cardiology. Harvard Medical School graduate.",
    experience: "15+ years",
    specialties: ["Cardiac Surgery", "Preventive Cardiology", "Heart Failure"],
    socials: {
      linkedin: "#",
      twitter: "#",
      facebook: "#",
    },
  },
  {
    id: 2,
    name: "Dr. Michael Chen",
    role: "Lead Neurosurgeon",
    image: "https://randomuser.me/api/portraits/men/46.jpg",
    bio: "Pioneer in minimally invasive brain surgeries with cutting-edge research. Published in 30+ medical journals.",
    experience: "12+ years",
    specialties: ["Brain Surgery", "Spinal Procedures", "Neurological Disorders"],
    socials: {
      linkedin: "#",
      twitter: "#",
      facebook: "#",
    },
  },
  {
    id: 3,
    name: "Dr. Emily Rodriguez",
    role: "Senior Pediatrician",
    image: "https://randomuser.me/api/portraits/women/68.jpg",
    bio: "Passionate about child healthcare and preventive pediatric medicine. Stanford Children's Health alumni.",
    experience: "10+ years",
    specialties: ["Child Development", "Vaccination", "Pediatric Emergency"],
    socials: {
      linkedin: "#",
      twitter: "#",
      facebook: "#",
    },
  },
  {
    id: 4,
    name: "Dr. Robert Wilson",
    role: "Head Nutritionist",
    image: "https://randomuser.me/api/portraits/men/52.jpg",
    bio: "Helping patients lead healthier lives through balanced nutrition and lifestyle changes. Author of 5 health books.",
    experience: "8+ years",
    specialties: ["Clinical Nutrition", "Weight Management", "Dietary Planning"],
    socials: {
      linkedin: "#",
      twitter: "#",
      facebook: "#",
    },
  },
];

const stats = [
  { icon: Clock, value: "5000+", label: "Hours of Care" },
  { icon: Users, value: "10000+", label: "Patients Treated" },
  { icon: Award, value: "25+", label: "Medical Awards" },
  { icon: Heart, value: "98%", label: "Patient Satisfaction" },
];

const TeamPage: React.FC = () => {
  return (
    <div className="bg-white min-h-screen">
      {/* SECTION 1 - Hero */}
      <section className="relative py-24 px-6 bg-white overflow-hidden">
        <div className="absolute top-0 right-0 w-72 h-72 bg-blue-50 rounded-full -translate-y-36 translate-x-36 opacity-60"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-indigo-50 rounded-full translate-y-32 -translate-x-32 opacity-60"></div>
        
        <div className="container mx-auto text-center max-w-4xl relative z-10">
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-4xl md:text-5xl font-bold text-gray-800 leading-tight"
          >
            Meet Our <span className="text-blue-600">Expert Medical Team</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.7 }}
            className="mt-6 text-xl text-gray-600 max-w-2xl mx-auto"
          >
            Dedicated healthcare professionals delivering world-class medical care
            and research for a healthier future.
          </motion.p>
          
          {/* Stats Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.7 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16"
          >
            {stats.map((stat, index) => (
              <div key={index} className="text-center p-6 bg-gray-50 rounded-2xl hover:shadow-md transition-shadow duration-300">
                <div className="w-14 h-14 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="h-7 w-7 text-blue-600" />
                </div>
                <div className="text-2xl font-bold text-gray-800">{stat.value}</div>
                <div className="text-gray-600 mt-1">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* SECTION 2 - Meet Our Experts */}
      <section className="py-20 bg-gray-50 relative">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Our <span className="text-blue-600">Healthcare Specialists</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Highly qualified professionals dedicated to your health and wellbeing
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={member.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group"
              >
                <div className="relative w-full h-72 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"></div>
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute bottom-4 left-4 z-20">
                    <span className="px-3 py-1 bg-blue-600 text-white text-sm font-medium rounded-full">
                      {member.experience}
                    </span>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800">
                    {member.name}
                  </h3>
                  <p className="text-blue-600 font-medium mt-1">{member.role}</p>
                  
                  <div className="mt-4">
                    <h4 className="text-sm font-semibold text-gray-700 mb-2">Specialties:</h4>
                    <div className="flex flex-wrap gap-2">
                      {member.specialties.map((specialty, i) => (
                        <span key={i} className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full">
                          {specialty}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <p className="text-gray-600 mt-4 text-sm leading-relaxed line-clamp-3">
                    {member.bio}
                  </p>
                  
                  <div className="flex justify-between items-center mt-6">
                    <div className="flex gap-3">
                      <a
                        href={member.socials.linkedin}
                        className="p-2 bg-gray-100 rounded-lg hover:bg-blue-600 hover:text-white transition-colors duration-300"
                      >
                        <Linkedin size={16} />
                      </a>
                      <a
                        href={member.socials.twitter}
                        className="p-2 bg-gray-100 rounded-lg hover:bg-blue-400 hover:text-white transition-colors duration-300"
                      >
                        <Twitter size={16} />
                      </a>
                      <a
                        href={member.socials.facebook}
                        className="p-2 bg-gray-100 rounded-lg hover:bg-blue-700 hover:text-white transition-colors duration-300"
                      >
                        <Facebook size={16} />
                      </a>
                    </div>
                    
                    <button className="text-blue-600 hover:text-blue-700 text-sm font-medium flex items-center gap-1">
                      <Mail size={14} />
                      Contact
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 3 - Values */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Our <span className="text-blue-600">Care Philosophy</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              The principles that guide our approach to healthcare excellence
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "Patient-Centered Care",
                description: "We prioritize your unique needs and preferences in every treatment decision.",
                icon: Heart,
                color: "bg-red-100 text-red-600"
              },
              {
                title: "Medical Excellence",
                description: "Continuous learning and adoption of the latest medical advancements.",
                icon: Award,
                color: "bg-blue-100 text-blue-600"
              },
              {
                title: "Compassionate Service",
                description: "Treating every patient with empathy, respect, and understanding.",
                icon: Users,
                color: "bg-green-100 text-green-600"
              },
              {
                title: "Innovative Solutions",
                description: "Leveraging technology and research for better health outcomes.",
                icon: Clock,
                color: "bg-purple-100 text-purple-600"
              }
            ].map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center p-8 bg-gray-50 rounded-2xl hover:shadow-md transition-shadow duration-300"
              >
                <div className={`w-16 h-16 ${value.color} rounded-2xl flex items-center justify-center mx-auto mb-6`}>
                  <value.icon className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-4">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 4 - Join Us */}
      <section className="py-20 bg-gradient-to-r from-blue-50 to-indigo-50">
        <div className="container mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
              Join Our Mission to <span className="text-blue-600">Transform Healthcare</span>
            </h2>
            <p className="text-xl text-gray-600 mb-10">
              Be part of a passionate team committed to improving lives through
              innovative medical care, research, and community outreach.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-blue-600 text-white px-8 py-4 rounded-xl font-semibold hover:bg-blue-700 transition-colors duration-300 shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
              >
                View Open Positions
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </motion.button>
              
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-xl font-semibold hover:bg-blue-600 hover:text-white transition-colors duration-300 shadow-md hover:shadow-lg flex items-center justify-center gap-2"
              >
                Learn More
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </motion.button>
            </div>
            
            <p className="text-gray-600 mt-8">
              We are always looking for talented healthcare professionals to join our growing team.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default TeamPage;