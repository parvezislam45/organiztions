// src/app/pages/Gallery.tsx
'use client'

import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  XMarkIcon,
  MapPinIcon,
  CalendarIcon,
  HeartIcon,
  ShareIcon,
  PlayIcon,
  PauseIcon
} from '@heroicons/react/24/outline'

const Gallery: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null)
  const [filter, setFilter] = useState('all')
  const [searchQuery, setSearchQuery] = useState('')
  const [activeBackground, setActiveBackground] = useState(0)
  const [isPlaying, setIsPlaying] = useState(true)

  const categories = [
    { id: 'all', name: 'All Photos' },
    { id: 'facilities', name: 'Facilities' },
    { id: 'team', name: 'Medical Team' },
    { id: 'technology', name: 'Technology' },
    { id: 'community', name: 'Community' },
    { id: 'events', name: 'Events' }
  ]

  const backgroundImages = [
    'https://tse1.mm.bing.net/th/id/OIP.5CVErti1B9RBEzH3R_Y_NAHaEJ?rs=1&pid=ImgDetMain&o=7&rm=3',
    'https://img.freepik.com/premium-photo/healthcare-team-strategy-meeting_1258-255903.jpg',
    'https://img.freepik.com/premium-photo/medical-team-reviewing-patient-s-chart-computer_118124-139450.jpg',
    'https://resource.indegene.com/linkedin/poster/blogs/commercialization-success-tips-and-tricks-adele-gulfo.jpg'
  ]

  const images = [
    { 
      id: 1, 
      title: 'Modern Hospital Entrance', 
      category: 'facilities', 
      description: 'Our state-of-the-art main entrance designed for patient comfort and accessibility.',
      location: 'Main Campus',
      date: '2023-06-15',
      likes: 142,
      width: 'col-span-2',
      height: 'row-span-2',
      image: 'https://tse3.mm.bing.net/th/id/OIP.YeoWaDEbgR1mJqXzDAGV0gHaFF?w=626&h=430&rs=1&pid=ImgDetMain&o=7&rm=3'
    },
    { 
      id: 2, 
      title: 'Emergency Department', 
      category: 'facilities', 
      description: '24/7 emergency care with the latest medical technology and skilled staff.',
      location: 'Downtown Branch',
      date: '2023-08-22',
      likes: 89,
      width: 'col-span-1',
      height: 'row-span-1',
      image: 'https://tse4.mm.bing.net/th/id/OIP.IGAa5s4GIgCDcXJWiB1YAgHaE8?w=1280&h=854&rs=1&pid=ImgDetMain&o=7&rm=3'
    },
    { 
      id: 3, 
      title: 'Surgical Theater', 
      category: 'technology', 
      description: 'Advanced operating rooms equipped for complex surgical procedures.',
      location: 'Main Campus',
      date: '2023-11-05',
      likes: 156,
      width: 'col-span-1',
      height: 'row-span-2',
      image: 'https://tse3.mm.bing.net/th/id/OIP.ZGqfJYW7MqRGu3vR1IMq1AHaE8?rs=1&pid=ImgDetMain&o=7&rm=3'
    },
    { 
      id: 4, 
      title: 'Pediatric Wing', 
      category: 'facilities', 
      description: 'Child-friendly environment designed to reduce anxiety and promote healing.',
      location: 'Children\'s Hospital',
      date: '2023-07-18',
      likes: 203,
      width: 'col-span-1',
      height: 'row-span-1',
      image: 'https://lirp.cdn-website.com/8c00ff43/dms3rep/multi/opt/Children+at+soccer+camp-1920w.jpg'
    },
    { 
      id: 5, 
      title: 'Cardiology Team', 
      category: 'team', 
      description: 'Our expert cardiology department during a team meeting.',
      location: 'Heart Center',
      date: '2023-09-30',
      likes: 178,
      width: 'col-span-2',
      height: 'row-span-1',
      image: 'https://tse2.mm.bing.net/th/id/OIP.8x2runTHBGDsO04Rahx9WAHaEK?rs=1&pid=ImgDetMain&o=7&rm=3'
    },
    { 
      id: 6, 
      title: 'Surgery Team', 
      category: 'team', 
      description: 'Skilled surgical team preparing for a complex procedure.',
      location: 'Main Campus',
      date: '2023-10-12',
      likes: 95,
      width: 'col-span-1',
      height: 'row-span-1',
      image: 'https://th.bing.com/th/id/R.78b53a400008fcaabe20d5bb6dfb57ae?rik=D7rBR1wQw%2bHkag&pid=ImgRaw&r=0'
    }
  ]

  useEffect(() => {
    if (!isPlaying) return
    const interval = setInterval(() => {
      setActiveBackground((prev) => (prev + 1) % backgroundImages.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [isPlaying])

  const filteredImages = filter === 'all' 
    ? images 
    : images.filter(image => image.category === filter)

  const searchedImages = searchQuery 
    ? filteredImages.filter(image => 
        image.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        image.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        image.location.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : filteredImages

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeBackground}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.5 }}
            className="absolute inset-0 z-0"
          >
            <img
              src={backgroundImages[activeBackground]}
              alt="Background"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-white/40"></div>
          </motion.div>
        </AnimatePresence>

        <div className="container mx-auto px-4 relative z-10 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-6xl font-bold text-gray-800 mb-6"
          >
            Visual Journey of <span className="text-blue-600">Healing</span>
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-xl text-black mb-8 max-w-2xl mx-auto"
          >
            Explore our world through moments that define our commitment to healthcare excellence
          </motion.p>

          {/* Background Controls */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="flex items-center justify-center gap-4 mb-8"
          >
            <button
              onClick={() => setIsPlaying(!isPlaying)}
              className="p-3 bg-blue-400 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
            >
              {isPlaying ? (
                <PauseIcon className="h-6 w-6 text-gray-950" />
              ) : (
                <PlayIcon className="h-6 w-6 text-gray-950" />
              )}
            </button>
            
            <div className="flex gap-2">
              {backgroundImages.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setActiveBackground(index)
                    setIsPlaying(false)
                  }}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === activeBackground ? 'bg-blue-600 scale-125' : 'bg-gray-300'
                  }`}
                />
              ))}
            </div>
          </motion.div>

          {/* Search Bar */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6, duration: 0.5 }}
            className="relative max-w-2xl mx-auto"
          >
            <div className="relative bg-white/95 backdrop-blur-sm rounded-2xl shadow-2xl p-2">
              <input
                type="text"
                placeholder="Search moments, locations, or categories..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full py-4 bg-transparent outline-none text-lg placeholder-gray-400 px-4"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="relative z-20 -mt-20 px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="bg-white/95 backdrop-blur-md rounded-2xl shadow-2xl p-6 max-w-6xl mx-auto"
        >
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
            <h2 className="text-2xl font-bold text-gray-800">Filter Gallery</h2>
            <div className="flex flex-wrap justify-center gap-3">
              {categories.map(category => (
                <button
                  key={category.id}
                  onClick={() => setFilter(category.id)}
                  className={`px-5 py-2.5 rounded-full font-medium transition-all duration-300 ${
                    filter === category.id
                      ? 'bg-blue-600 text-white shadow-lg'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {category.name}
                </button>
              ))}
            </div>
          </div>
        </motion.div>
      </section>

      {/* Gallery Grid */}
      <section className="py-20 bg-white relative">
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            layout
            className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 auto-rows-[200px] md:auto-rows-[250px] lg:auto-rows-[200px]"
          >
            <AnimatePresence>
              {searchedImages.map((image, index) => (
                <motion.div
                  key={image.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className={`relative group cursor-pointer overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 ${image.width} ${image.height}`}
                  onClick={() => setSelectedImage(image.id)}
                >
                  <img
                    src={image.image}
                    alt={image.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="absolute inset-0 p-6 flex flex-col justify-end transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    <div className="mb-4">
                      <span className="px-3 py-1 bg-blue-600 text-white text-sm font-medium rounded-full mb-3 inline-block">
                        {categories.find(cat => cat.id === image.category)?.name}
                      </span>
                      <h3 className="text-white font-bold text-xl mb-2">{image.title}</h3>
                      <p className="text-white/90 text-sm line-clamp-2">{image.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* Modal */}
      <AnimatePresence>
        {selectedImage !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative max-w-6xl w-full max-h-full"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className="absolute -top-12 right-0 text-white hover:text-gray-300 transition-colors duration-200 z-10"
                onClick={() => setSelectedImage(null)}
              >
                <XMarkIcon className="h-8 w-8" />
              </button>
              
              <div className="bg-white rounded-xl overflow-hidden">
                <img
                  src={images.find(img => img.id === selectedImage)?.image}
                  alt={images.find(img => img.id === selectedImage)?.title}
                  className="w-full h-96 object-cover"
                />
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-gray-800 mb-2">
                    {images.find(img => img.id === selectedImage)?.title}
                  </h3>
                  <p className="text-gray-600 mb-4">{images.find(img => img.id === selectedImage)?.description}</p>
                  <div className="flex flex-wrap gap-6 text-sm text-gray-600 mb-8">
                    <div className="flex items-center gap-2">
                      <MapPinIcon className="h-5 w-5" />
                      {images.find(img => img.id === selectedImage)?.location}
                    </div>
                    <div className="flex items-center gap-2">
                      <CalendarIcon className="h-5 w-5" />
                      {images.find(img => img.id === selectedImage)?.date}
                    </div>
                    <div className="flex items-center gap-2">
                      <HeartIcon className="h-5 w-5" />
                      {images.find(img => img.id === selectedImage)?.likes} likes
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default Gallery
