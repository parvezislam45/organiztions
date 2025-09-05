// src/app/pages/MentalHealthVolunteer.tsx
'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { 
  HeartIcon, 
  ClockIcon, 
  MapPinIcon,
  UserGroupIcon,
  AcademicCapIcon,
  PhoneIcon,
  EnvelopeIcon,
  CheckCircleIcon,
  ArrowRightIcon
} from '@heroicons/react/24/outline'

const Volunteer: React.FC = () => {
  const [activeTab, setActiveTab] = useState('opportunities')

  const opportunities = [
    {
      id: 1,
      title: 'Crisis Support Volunteer',
      commitment: '8 hours/week',
      location: 'Crisis Center or Remote',
      description: 'Provide immediate support and resources to individuals experiencing mental health crises through our hotline and chat services.',
      requirements: ['Active listening skills', 'Empathy and compassion', 'Completion of 40-hour training', '6-month minimum commitment'],
      training: 'Comprehensive 40-hour training program provided'
    },
    {
      id: 2,
      title: 'Peer Support Group Facilitator',
      commitment: '6 hours/week',
      location: 'Community Centers',
      description: 'Lead and facilitate support groups for individuals dealing with various mental health challenges in a safe, supportive environment.',
      requirements: ['Group facilitation skills', 'Lived experience with mental health challenges', 'Completion of facilitator training', 'Reliable transportation'],
      training: 'Specialized 30-hour facilitator training provided'
    },
    {
      id: 3,
      title: 'Mental Health Outreach Ambassador',
      commitment: '4 hours/week',
      location: 'Schools & Community Events',
      description: 'Help reduce stigma and raise awareness about mental health by participating in community outreach and educational events.',
      requirements: ['Comfort with public speaking', 'Passion for mental health advocacy', 'Weekend availability', 'Background check'],
      training: 'Outreach and education training provided'
    },
    {
      id: 4,
      title: 'Wellness Workshop Assistant',
      commitment: '5 hours/week',
      location: 'Main Facility',
      description: 'Support mental health professionals in delivering wellness workshops and mindfulness sessions to community members.',
      requirements: ['Organizational skills', 'Interest in wellness practices', 'Flexible schedule', 'Team collaboration skills'],
      training: 'Workshop-specific training provided'
    }
  ]

  const testimonials = [
    {
      id: 1,
      name: 'Jennifer Martinez',
      role: 'Crisis Support Volunteer',
      quote: 'Volunteering with the mental health crisis line has been incredibly rewarding. The training prepared me well, and I know I\'m making a real difference in people\'s darkest moments.',
      duration: '2 years',
      image: '/images/volunteer-1.jpg'
    },
    {
      id: 2,
      name: 'David Kim',
      role: 'Peer Support Facilitator',
      quote: 'As someone who has struggled with anxiety, being able to support others on their journey has been healing for me too. The community we\'ve built is incredible.',
      duration: '1.5 years',
      image: '/images/volunteer-2.jpg'
    },
    {
      id: 3,
      name: 'Sarah Johnson',
      role: 'Outreach Ambassador',
      quote: 'I love breaking down mental health stigma in our community. Seeing people become more open to discussing mental health gives me hope for the future.',
      duration: '3 years',
      image: '/images/volunteer-3.jpg'
    }
  ]

  const benefits = [
    {
      title: 'Comprehensive Training',
      description: 'Receive professional-level training in mental health first aid, crisis intervention, and support techniques.',
      icon: AcademicCapIcon,
      color: 'bg-blue-100 text-blue-600'
    },
    {
      title: 'Make a Real Impact',
      description: 'Directly support individuals in need and contribute to reducing mental health stigma in your community.',
      icon: HeartIcon,
      color: 'bg-red-100 text-red-600'
    },
    {
      title: 'Flexible Scheduling',
      description: 'Choose volunteer shifts that work with your schedule, including evenings and weekends.',
      icon: ClockIcon,
      color: 'bg-green-100 text-green-600'
    },
    {
      title: 'Supportive Community',
      description: 'Join a network of dedicated volunteers and mental health professionals who support each other.',
      icon: UserGroupIcon,
      color: 'bg-purple-100 text-purple-600'
    },
    {
      title: 'Skill Development',
      description: 'Build valuable skills in communication, empathy, crisis management, and mental health support.',
      icon: CheckCircleIcon,
      color: 'bg-amber-100 text-amber-600'
    },
    {
      title: 'Professional References',
      description: 'After 6 months of service, receive professional references for future employment or educational opportunities.',
      icon: EnvelopeIcon,
      color: 'bg-indigo-100 text-indigo-600'
    }
  ]

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
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">Mental Health Volunteer Program</h1>
            <p className="text-xl text-gray-600 mb-8">
              Join our compassionate community of volunteers dedicated to supporting mental health and wellbeing
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-blue-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-blue-700 transition-colors duration-300 flex items-center justify-center">
                Apply Now
                <ArrowRightIcon className="h-5 w-5 ml-2" />
              </button>
              <button className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-blue-600 hover:text-white transition-colors duration-300">
                Learn More
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Why Volunteer With Us?</h2>
            <p className="text-xl text-gray-600">
              Make a meaningful difference while gaining valuable experience and skills
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100"
              >
                <div className={`w-16 h-16 ${benefit.color} rounded-2xl flex items-center justify-center mb-6`}>
                  <benefit.icon className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-4">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Opportunities & Testimonials Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <button
              onClick={() => setActiveTab('opportunities')}
              className={`flex items-center px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                activeTab === 'opportunities'
                  ? 'bg-blue-600 text-white shadow-lg'
                  : 'bg-white text-gray-700 hover:bg-gray-100'
              }`}
            >
              <UserGroupIcon className="h-5 w-5 mr-2" />
              Volunteer Opportunities
            </button>
            <button
              onClick={() => setActiveTab('testimonials')}
              className={`flex items-center px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                activeTab === 'testimonials'
                  ? 'bg-blue-600 text-white shadow-lg'
                  : 'bg-white text-gray-700 hover:bg-gray-100'
              }`}
            >
              <HeartIcon className="h-5 w-5 mr-2" />
              Volunteer Stories
            </button>
          </div>

          {activeTab === 'opportunities' && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="grid grid-cols-1 lg:grid-cols-2 gap-8"
            >
              {opportunities.map((opportunity, index) => (
                <motion.div
                  key={opportunity.id}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
                >
                  <div className="p-8">
                    <h3 className="text-2xl font-bold text-gray-800 mb-4">{opportunity.title}</h3>
                    
                    <div className="flex flex-wrap gap-4 mb-6">
                      <div className="flex items-center gap-2 text-gray-600">
                        <ClockIcon className="h-5 w-5" />
                        <span>{opportunity.commitment}</span>
                      </div>
                      <div className="flex items-center gap-2 text-gray-600">
                        <MapPinIcon className="h-5 w-5" />
                        <span>{opportunity.location}</span>
                      </div>
                    </div>
                    
                    <p className="text-gray-600 mb-6 leading-relaxed">{opportunity.description}</p>
                    
                    <div className="mb-6">
                      <h4 className="font-semibold text-gray-800 mb-3">Requirements:</h4>
                      <ul className="space-y-2">
                        {opportunity.requirements.map((req, i) => (
                          <li key={i} className="flex items-start gap-2 text-gray-600">
                            <CheckCircleIcon className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                            <span>{req}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="bg-blue-50 p-4 rounded-lg mb-6">
                      <p className="text-blue-700 font-medium">{opportunity.training}</p>
                    </div>
                    
                    <button className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-300">
                      Apply for this Position
                    </button>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          )}

          {activeTab === 'testimonials' && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={testimonial.id}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
                >
                  <div className="h-48 bg-gradient-to-r from-blue-100 to-indigo-100 flex items-center justify-center">
                    <span className="text-gray-500">Volunteer Photo</span>
                  </div>
                  
                  <div className="p-8">
                    <h3 className="text-xl font-bold text-gray-800 mb-2">{testimonial.name}</h3>
                    <p className="text-blue-600 font-medium mb-4">{testimonial.role} • {testimonial.duration}</p>
                    
                    <blockquote className="text-gray-600 italic border-l-4 border-blue-500 pl-4 mb-6">
                      {testimonial.quote}
                    </blockquote>
                    
                    <button className="text-blue-600 font-semibold hover:text-blue-700 transition-colors duration-300 flex items-center">
                      Read full story
                      <ArrowRightIcon className="h-4 w-4 ml-1" />
                    </button>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          )}
        </div>
      </section>

      {/* Application Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold text-gray-800 mb-4">Ready to Make a Difference?</h2>
              <p className="text-xl text-gray-600">
                Join our mental health volunteer team and help create a more supportive community
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-gray-50 rounded-2xl p-8 md:p-12 shadow-lg"
            >
              <h3 className="text-2xl font-bold text-gray-800 mb-6">Apply to Volunteer</h3>
              
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-gray-700 font-medium mb-2">First Name</label>
                    <input 
                      type="text" 
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Enter your first name"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 font-medium mb-2">Last Name</label>
                    <input 
                      type="text" 
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Enter your last name"
                    />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-gray-700 font-medium mb-2">Email Address</label>
                    <input 
                      type="email" 
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Enter your email"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 font-medium mb-2">Phone Number</label>
                    <input 
                      type="tel" 
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Enter your phone number"
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-gray-700 font-medium mb-2">Area of Interest</label>
                  <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                    <option value="">Select a volunteer position</option>
                    <option value="crisis">Crisis Support Volunteer</option>
                    <option value="facilitator">Peer Support Group Facilitator</option>
                    <option value="outreach">Mental Health Outreach Ambassador</option>
                    <option value="workshop">Wellness Workshop Assistant</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-gray-700 font-medium mb-2">Why are you interested in volunteering with us?</label>
                  <textarea 
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Share your motivation and relevant experience..."
                  ></textarea>
                </div>
                
                <div className="flex items-center">
                  <input 
                    type="checkbox" 
                    id="commitment"
                    className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                  />
                  <label htmlFor="commitment" className="ml-2 text-gray-700">
                    I commit to the required training and minimum service period
                  </label>
                </div>
                
                <button 
                  type="submit"
                  className="w-full bg-blue-600 text-white py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-300"
                >
                  Submit Application
                </button>
                
                <p className="text-center text-gray-600 text-sm">
                  We all contact you within 3-5 business days to discuss next steps
                </p>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-gradient-to-r from-blue-50 to-indigo-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Have Questions?</h2>
            <p className="text-xl text-gray-600">
              Our volunteer coordinator is here to help you
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-2xl shadow-lg text-center"
            >
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <PhoneIcon className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Call Us</h3>
              <p className="text-gray-600 mb-4">Speak directly with our team</p>
              <a href="tel:+15551234567" className="text-blue-600 font-semibold hover:text-blue-700">
                (555) 123-4567
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-2xl shadow-lg text-center"
            >
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <EnvelopeIcon className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Email Us</h3>
              <p className="text-gray-600 mb-4">Send us your questions</p>
              <a href="mailto:volunteer@healthplus.org" className="text-blue-600 font-semibold hover:text-blue-700">
                volunteer@healthplus.org
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-2xl shadow-lg text-center"
            >
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPinIcon className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Visit Us</h3>
              <p className="text-gray-600 mb-4">Come to our information session</p>
              <p className="text-blue-600 font-semibold">
                Every Tuesday, 6-8 PM
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Volunteer