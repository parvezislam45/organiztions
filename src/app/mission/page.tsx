// src/app/pages/MissionVision.tsx
'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { 
  
  EyeIcon, 
  HeartIcon, 
  UsersIcon, 
  ArrowPathIcon,
  ShieldCheckIcon,
  SparklesIcon
} from '@heroicons/react/24/outline'

const MissionVision: React.FC = () => {
  return (
    <div className="min-h-screen bg-white px-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-blue-50 to-indigo-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">Our Mission & Vision</h1>
            <p className="text-xl text-gray-600 mb-8">
              Guiding principles that drive our commitment to transforming healthcare and improving lives
            </p>
            <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
          </motion.div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="lg:w-1/2"
            >
              <div className="relative">
                <div className="absolute -top-6 -left-6 w-24 h-24 bg-blue-100 rounded-full opacity-50"></div>
                <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-indigo-100 rounded-full opacity-50"></div>
                <div className="relative bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
                  <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mb-6">
                    
                  </div>
                  <h2 className="text-3xl font-bold text-gray-800 mb-4">Our Mission</h2>
                  <p className="text-lg text-gray-600 leading-relaxed">
                    To provide accessible, high-quality healthcare services to all communities, 
                    regardless of their background or circumstances. We believe that everyone 
                    deserves the right to excellent medical care and compassionate support.
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="lg:w-1/2"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  {
                    icon: HeartIcon,
                    title: "Compassionate Care",
                    description: "Putting patients at the center of everything we do"
                  },
                  {
                    icon: UsersIcon,
                    title: "Community Focus",
                    description: "Serving and empowering local communities"
                  },
                  {
                    icon: ShieldCheckIcon,
                    title: "Quality & Safety",
                    description: "Maintaining the highest standards of care"
                  },
                  {
                    icon: ArrowPathIcon,
                    title: "Continuous Improvement",
                    description: "Always evolving to meet patient needs"
                  }
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="bg-gray-50 p-6 rounded-xl hover:shadow-md transition-shadow duration-300"
                  >
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                      <item.icon className="h-6 w-6 text-blue-600" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">{item.title}</h3>
                    <p className="text-gray-600">{item.description}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Vision Statement */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row-reverse items-center gap-12">
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="lg:w-1/2"
            >
              <div className="relative">
                <div className="absolute -top-6 -right-6 w-24 h-24 bg-indigo-100 rounded-full opacity-50"></div>
                <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-blue-100 rounded-full opacity-50"></div>
                <div className="relative bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
                  <div className="w-16 h-16 bg-indigo-600 rounded-full flex items-center justify-center mb-6">
                    <EyeIcon className="h-8 w-8 text-white" />
                  </div>
                  <h2 className="text-3xl font-bold text-gray-800 mb-4">Our Vision</h2>
                  <p className="text-lg text-gray-600 leading-relaxed">
                    To create a world where healthcare knows no boundaries. We envision a future 
                    where innovative medical solutions and compassionate care are available to 
                    every person on the planet, transforming lives and communities.
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="lg:w-1/2"
            >
              <div className="space-y-8">
                {[
                  {
                    title: "Innovation",
                    description: "Pioneering new approaches to healthcare delivery",
                    percentage: "100%",
                    color: "bg-blue-600"
                  },
                  {
                    title: "Accessibility",
                    description: "Making quality healthcare available to everyone",
                    percentage: "95%",
                    color: "bg-indigo-600"
                  },
                  {
                    title: "Excellence",
                    description: "Setting new standards in patient care and outcomes",
                    percentage: "98%",
                    color: "bg-purple-600"
                  }
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div className="flex justify-between items-center mb-2">
                      <h3 className="text-xl font-semibold text-gray-800">{item.title}</h3>
                      <span className="text-gray-600">{item.percentage}</span>
                    </div>
                    <p className="text-gray-600 mb-3">{item.description}</p>
                    <div className="w-full bg-gray-200 rounded-full h-2.5">
                      <motion.div 
                        className={`h-2.5 rounded-full ${item.color}`}
                        initial={{ width: 0 }}
                        whileInView={{ width: item.percentage }}
                        transition={{ duration: 1, delay: index * 0.2 }}
                        viewport={{ once: true }}
                      ></motion.div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
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
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Our Core Values</h2>
            <p className="text-xl text-gray-600">
              The principles that guide our actions and decisions every day
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: HeartIcon,
                title: "Compassion",
                description: "We treat every patient with empathy, kindness, and respect.",
                color: "bg-red-100",
                iconColor: "text-red-600"
              },
              {
                icon: UsersIcon,
                title: "Collaboration",
                description: "We work together with patients, families, and communities.",
                color: "bg-blue-100",
                iconColor: "text-blue-600"
              },
              {
                icon: SparklesIcon,
                title: "Excellence",
                description: "We strive for the highest standards in all that we do.",
                color: "bg-amber-100",
                iconColor: "text-amber-600"
              },
              {
                
                title: "Innovation",
                description: "We embrace new ideas and technologies to improve care.",
                color: "bg-green-100",
                iconColor: "text-green-600"
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center p-8 rounded-2xl hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className={`w-20 h-20 ${item.color} rounded-2xl flex items-center justify-center mx-auto mb-6`}>
                  
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-4">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-white">
  <div className="container mx-auto px-4">
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="text-center max-w-3xl mx-auto"
    >
      {/* Elegant heading with accent */}
      <div className="relative mb-4">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">Join Us in Our Mission</h2>
        <div className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-blue-600 rounded-full"></div>
      </div>
      
      <p className="text-xl text-gray-600 mb-12 leading-relaxed">
        Together, we can transform healthcare and create a healthier future for all
      </p>

      {/* Premium buttons with subtle shadows */}
      <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
        <motion.button 
          whileHover={{ scale: 1.02, y: -2 }}
          whileTap={{ scale: 0.98 }}
          className="relative bg-gradient-to-r from-blue-600 to-indigo-700 text-white px-10 py-4 rounded-xl font-semibold transition-all duration-300 shadow-lg hover:shadow-xl group overflow-hidden"
        >
          <span className="relative z-10 flex items-center gap-2">
            Support Our Cause
            <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </span>
          <div className="absolute inset-0 bg-gradient-to-r from-blue-700 to-indigo-800 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        </motion.button>

        <motion.button 
          whileHover={{ scale: 1.02, y: -2 }}
          whileTap={{ scale: 0.98 }}
          className="border-2 border-gray-300 text-gray-700 px-10 py-4 rounded-xl font-semibold hover:border-blue-600 hover:text-blue-600 transition-all duration-300 shadow-sm hover:shadow-md flex items-center gap-2"
        >
          Learn More
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </motion.button>
      </div>

      {/* Decorative elements */}
      <div className="mt-16 flex justify-center space-x-8">
        {[1, 2, 3].map((item) => (
          <motion.div
            key={item}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: item * 0.1 }}
            viewport={{ once: true }}
            className="w-2 h-2 bg-blue-400 rounded-full"
          ></motion.div>
        ))}
      </div>
    </motion.div>
  </div>
</section>
    </div>
  )
}

export default MissionVision