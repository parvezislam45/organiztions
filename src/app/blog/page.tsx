// src/app/pages/Blog.tsx
"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  UserIcon,
  ClockIcon,
  ChatBubbleLeftIcon,
  HeartIcon,
  ShareIcon,
  MagnifyingGlassIcon,
  BookOpenIcon,
  BeakerIcon,
  LightBulbIcon,
} from "@heroicons/react/24/outline";
import { Mail } from "lucide-react";

const BlogPage: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState("latest");
  const [searchQuery, setSearchQuery] = useState("");

  const categories = [
    { id: "latest", name: "Latest Articles", icon: BookOpenIcon },
    { id: "research", name: "Research", icon: BeakerIcon },
    { id: "tips", name: "Health Tips", icon: LightBulbIcon },
  ];

  const blogPosts = [
    {
      id: 1,
      title: "10 Ways to Improve Your Heart Health",
      excerpt:
        "Learn simple lifestyle changes that can significantly improve your cardiovascular health and reduce risk of heart disease.",
      category: "tips",
      author: "Dr. Sarah Johnson",
      date: "March 15, 2023",
      readTime: "5 min read",
      image:
        "https://tse1.mm.bing.net/th/id/OIP.bV6OgbM8aR0dXXHrhBUuvQHaE7?w=626&h=417&rs=1&pid=ImgDetMain&o=7&rm=3",
      likes: 24,
      comments: 8,
      featured: true,
    },
    {
      id: 2,
      title: "Breakthrough in Cancer Treatment Research",
      excerpt:
        "New study shows promising results for innovative immunotherapy approach in treating advanced cancers.",
      category: "research",
      author: "Dr. Michael Chen",
      date: "February 28, 2023",
      readTime: "8 min read",
      image:
        "https://tse1.mm.bing.net/th/id/OIP.ztph5s8MHZH8utjzJKIgvgHaE8?rs=1&pid=ImgDetMain&o=7&rm=3",
      likes: 42,
      comments: 12,
      featured: true,
    },
    {
      id: 3,
      title: "My Journey with Diabetes: A Patient Story",
      excerpt:
        "John shares his personal experience living with type 2 diabetes and how he transformed his health.",
      category: "latest",
      author: "John Smith",
      date: "February 12, 2023",
      readTime: "6 min read",
      image:
        "https://www.qventus.com/wp-content/uploads/2024/10/Featured-Img_14-Blog.jpg",
      likes: 31,
      comments: 15,
      featured: false,
    },
    {
      id: 4,
      title: "Understanding the Latest COVID-19 Variants",
      excerpt:
        "What you need to know about the newest coronavirus variants and updated vaccination recommendations.",
      category: "research",
      author: "Dr. Emily Rodriguez",
      date: "January 30, 2023",
      readTime: "7 min read",
      image:
        "https://mdphdtobe.com/wp-content/uploads/2014/01/medical-blog.jpg",
      likes: 28,
      comments: 6,
      featured: false,
    },
    {
      id: 5,
      title: "5 Morning Habits for Better Mental Health",
      excerpt:
        "Start your day right with these simple practices that can significantly improve your mental wellbeing.",
      category: "tips",
      author: "Dr. James Wilson",
      date: "January 22, 2023",
      readTime: "4 min read",
      image:
        "https://th.bing.com/th/id/R.20938418fa94cba5c5bbce2cce128b7a?rik=ktDhW6gfjRJs5A&pid=ImgRaw&r=0",
      likes: 37,
      comments: 9,
      featured: false,
    },
    {
      id: 6,
      title: "Advances in Minimally Invasive Surgery",
      excerpt:
        "How new surgical techniques are reducing recovery times and improving patient outcomes.",
      category: "research",
      author: "Dr. Lisa Patel",
      date: "January 15, 2023",
      readTime: "9 min read",
      image:
        "https://tse2.mm.bing.net/th/id/OIP.jTIRrCt-uNQD_GuJt1_jRgHaEb?rs=1&pid=ImgDetMain&o=7&rm=3",
      likes: 19,
      comments: 4,
      featured: false,
    },
    {
      id: 7,
      title: "Nutrition Myths Debunked by Science",
      excerpt:
        "Separating fact from fiction in the world of nutrition and dietary advice.",
      category: "tips",
      author: "Dr. Robert Kim",
      date: "January 8, 2023",
      readTime: "6 min read",
      image:
        "https://img.particlenews.com/img/id/35roX2_14M4ylrb00",
      likes: 45,
      comments: 11,
      featured: false,
    },
    {
      id: 8,
      title: "The Future of Telemedicine Post-Pandemic",
      excerpt:
        "How virtual healthcare is evolving and what to expect in the coming years.",
      category: "latest",
      author: "Dr. Amanda White",
      date: "January 3, 2023",
      readTime: "7 min read",
      image:
        "https://th.bing.com/th?id=OIF.KqsYUCQpHX1OYLwK%2fxy6hQ&rs=1&pid=ImgDetMain&o=7&rm=3",
      likes: 33,
      comments: 7,
      featured: false,
    },
  ];

  const filteredPosts = blogPosts.filter((post) => {
    const matchesCategory =
      activeCategory === "latest" || post.category === activeCategory;
    const matchesSearch =
      searchQuery === "" ||
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.author.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const featuredPosts = filteredPosts.filter((post) => post.featured);
  const regularPosts = filteredPosts.filter((post) => !post.featured);

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-blue-50 to-indigo-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              HealthPlus Blog
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Stay informed with the latest health news, medical insights, and
              wellness tips from our healthcare experts.
            </p>

            <div className="relative max-w-2xl mx-auto">
              <input
                type="text"
                placeholder="Search blog posts..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-6 py-4 pl-14 pr-6 border border-gray-200 rounded-full shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              <MagnifyingGlassIcon className="absolute left-5 top-1/2 transform -translate-y-1/2 h-6 w-6 text-gray-400" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Category Navigation */}
      <section className="py-8 bg-white border-b border-gray-100 sticky top-24 z-10">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`flex items-center px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  activeCategory === category.id
                    ? "bg-blue-600 text-white shadow-lg"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                <category.icon className="h-5 w-5 mr-2" />
                {category.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Posts Section */}
      {featuredPosts.length > 0 && (
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="mb-12"
            >
              <h2 className="text-3xl font-bold text-gray-800 mb-4">
                Featured Articles
              </h2>
              <p className="text-gray-600">
                In-depth insights and groundbreaking research from our experts
              </p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <AnimatePresence>
                {featuredPosts.map((post, index) => (
                  <motion.article
                    key={post.id}
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 group"
                  >
                    <div className="relative overflow-hidden">
                      <img
                        src={post.image}
                        alt={post.title}
                        className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute top-4 left-4">
                        <span className="px-3 py-1 bg-blue-600 text-white text-sm font-medium rounded-full">
                          Featured
                        </span>
                      </div>
                    </div>

                    <div className="p-8">
                      <div className="flex items-center gap-4 mb-4">
                        <span className="px-3 py-1 bg-blue-100 text-blue-600 text-sm font-medium rounded-full">
                          {
                            categories.find((cat) => cat.id === post.category)
                              ?.name
                          }
                        </span>
                        <span className="text-sm text-gray-500">
                          {post.date}
                        </span>
                      </div>

                      <h3 className="text-2xl font-bold text-gray-800 mb-4 group-hover:text-blue-600 transition-colors duration-300">
                        {post.title}
                      </h3>

                      <p className="text-gray-600 mb-6 leading-relaxed">
                        {post.excerpt}
                      </p>

                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-4 text-sm text-gray-500">
                          <div className="flex items-center gap-1">
                            <UserIcon className="h-4 w-4" />
                            {post.author}
                          </div>
                          <div className="flex items-center gap-1">
                            <ClockIcon className="h-4 w-4" />
                            {post.readTime}
                          </div>
                        </div>

                        <div className="flex items-center gap-4">
                          <button className="flex items-center gap-1 text-gray-500 hover:text-red-500 transition-colors duration-300">
                            <HeartIcon className="h-5 w-5" />
                            <span>{post.likes}</span>
                          </button>
                          <button className="flex items-center gap-1 text-gray-500 hover:text-blue-500 transition-colors duration-300">
                            <ChatBubbleLeftIcon className="h-5 w-5" />
                            <span>{post.comments}</span>
                          </button>
                        </div>
                      </div>
                    </div>
                  </motion.article>
                ))}
              </AnimatePresence>
            </div>
          </div>
        </section>
      )}

      {/* Regular Posts Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              {activeCategory === "latest"
                ? "Latest Articles"
                : activeCategory === "research"
                ? "Research Updates"
                : "Health Tips"}
            </h2>
            <p className="text-gray-600">
              {activeCategory === "latest"
                ? "The most recent articles from our healthcare experts"
                : activeCategory === "research"
                ? "Latest medical research and breakthroughs"
                : "Practical advice for better health and wellness"}
            </p>
          </motion.div>

          {regularPosts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <AnimatePresence>
                {regularPosts.map((post, index) => (
                  <motion.article
                    key={post.id}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 group"
                  >
                    <div className="relative overflow-hidden">
                      <img
                        src={post.image}
                        alt={post.title}
                        className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>

                    <div className="p-6">
                      <div className="flex items-center gap-3 mb-3">
                        <span className="px-2 py-1 bg-blue-100 text-blue-600 text-xs font-medium rounded-full">
                          {
                            categories.find((cat) => cat.id === post.category)
                              ?.name
                          }
                        </span>
                        <span className="text-xs text-gray-500">
                          {post.date}
                        </span>
                      </div>

                      <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-blue-600 transition-colors duration-300 line-clamp-2">
                        {post.title}
                      </h3>

                      <p className="text-gray-600 mb-4 text-sm line-clamp-3">
                        {post.excerpt}
                      </p>

                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2 text-xs text-gray-500">
                          <UserIcon className="h-3 w-3" />
                          {post.author}
                        </div>

                        <div className="flex items-center gap-3">
                          <button className="text-gray-400 hover:text-red-500 transition-colors duration-300">
                            <HeartIcon className="h-4 w-4" />
                          </button>
                          <button className="text-gray-400 hover:text-blue-500 transition-colors duration-300">
                            <ChatBubbleLeftIcon className="h-4 w-4" />
                          </button>
                          <button className="text-gray-400 hover:text-gray-600 transition-colors duration-300">
                            <ShareIcon className="h-4 w-4" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </motion.article>
                ))}
              </AnimatePresence>
            </div>
          ) : (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="text-center py-16"
            >
              <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <BookOpenIcon className="h-12 w-12 text-gray-400" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                No articles found
              </h3>
              <p className="text-gray-600">
                {searchQuery
                  ? `No results for "${searchQuery}" in ${
                      categories.find((cat) => cat.id === activeCategory)?.name
                    }`
                  : `No articles available in ${
                      categories.find((cat) => cat.id === activeCategory)?.name
                    }`}
              </p>
            </motion.div>
          )}
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 lg:px-20">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="relative max-w-3xl mx-auto text-center bg-white/80 backdrop-blur-lg border border-gray-200 shadow-2xl rounded-3xl p-10 lg:p-14"
          >
            {/* Gradient background decoration */}
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-blue-100 via-indigo-100 to-purple-100 opacity-40 blur-2xl -z-10" />

            {/* Title */}
            <h2 className="text-4xl font-extrabold text-gray-900 mb-4 about">
              Stay Updated with{" "}
              <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent about">
                Health Insights
              </span>
            </h2>

            {/* Subtitle */}
            <p className="text-sm text-gray-600 mb-8 max-w-2xl mx-auto nav">
              Subscribe to our newsletter and never miss the latest health news,
              research updates, and expert wellness tips curated by our
              healthcare specialists.
            </p>

            {/* Email Input + Button */}
            <div className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-6 py-3 rounded-full text-gray-800 bg-gray-100 border border-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
              />
              <button className="flex items-center justify-center gap-2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-8 py-3 rounded-full font-semibold hover:opacity-90 transition duration-300 shadow-lg">
                <Mail size={20} />
                Subscribe
              </button>
            </div>

            {/* Privacy Text */}
            <p className="text-sm text-gray-500 mt-5">
              We respect your privacy. Unsubscribe anytime.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Popular Topics Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Explore Popular Topics
            </h2>
            <p className="text-gray-600">
              Discover articles on trending health topics and concerns
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              {
                name: "Cardiology",
                posts: 24,
                color: "bg-red-100 text-red-600",
              },
              {
                name: "Mental Health",
                posts: 18,
                color: "bg-blue-100 text-blue-600",
              },
              {
                name: "Nutrition",
                posts: 32,
                color: "bg-green-100 text-green-600",
              },
              {
                name: "Preventive Care",
                posts: 15,
                color: "bg-purple-100 text-purple-600",
              },
              {
                name: "Pediatrics",
                posts: 21,
                color: "bg-yellow-100 text-yellow-600",
              },
              {
                name: "Women's Health",
                posts: 19,
                color: "bg-pink-100 text-pink-600",
              },
              {
                name: "Fitness",
                posts: 27,
                color: "bg-indigo-100 text-indigo-600",
              },
              { name: "Aging", posts: 14, color: "bg-gray-100 text-gray-600" },
            ].map((topic, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center p-6 rounded-2xl hover:shadow-lg transition-all duration-300 cursor-pointer"
              >
                <div
                  className={`w-16 h-16 ${topic.color} rounded-2xl flex items-center justify-center mx-auto mb-4`}
                >
                  <div className="text-2xl font-bold">{topic.posts}</div>
                </div>
                <h3 className="font-semibold text-gray-800 mb-2">
                  {topic.name}
                </h3>
                <p className="text-sm text-gray-600">{topic.posts} articles</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default BlogPage;
