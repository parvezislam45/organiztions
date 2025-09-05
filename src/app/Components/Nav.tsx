"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import Link from "next/link";

const Navbar: React.FC = () => {
  const [aboutOpen, setAboutOpen] = useState(false);
  const [blogOpen, setBlogOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeItem, setActiveItem] = useState("home");

  const dropdownVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.3 } },
    exit: { opacity: 0, y: -10, transition: { duration: 0.2 } },
  };

  const mobileMenuVariants = {
    hidden: { opacity: 0, y: -30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.3 } },
    exit: { opacity: 0, y: -30, transition: { duration: 0.2 } },
  };

  return (
    <nav className="bg-white shadow-md fixed top-0 w-full z-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-20">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="text-3xl font-bold text-blue-600">Medi + Care</div>

          {/* Desktop Menu */}
          <ul className="hidden md:flex items-center space-x-6 absolute left-1/2 transform -translate-x-1/2">
            <li>
              <Link href="/">
                <button
                  onClick={() => setActiveItem("home")}
                  className="relative text-gray-800 hover:text-blue-600 font-medium"
                >
                  Home
                  {activeItem === "home" && (
                    <motion.div
                      layoutId="underline"
                      className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-600 rounded"
                    />
                  )}
                </button>
              </Link>
            </li>

            {/* About Dropdown */}
            <li
              className="relative"
              onMouseEnter={() => setAboutOpen(true)}
              onMouseLeave={() => setAboutOpen(false)}
            >
              <button
                onClick={() => setActiveItem("about")}
                className="relative text-gray-800 hover:text-blue-600 font-medium"
              >
                About
                {activeItem === "about" && (
                  <motion.div
                    layoutId="underline"
                    className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-600 rounded"
                  />
                )}
              </button>
              <AnimatePresence>
                {aboutOpen && (
                  <motion.ul
                    variants={dropdownVariants}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    className="absolute top-full mt-2 left-0 w-40 bg-white shadow-lg rounded-md overflow-hidden text-black"
                  >
                    <Link href="/mission">
                      <li
                        onClick={() => setActiveItem("mission")}
                        className={`px-4 py-2 hover:bg-blue-50 cursor-pointer ${
                          activeItem === "mission"
                            ? "font-semibold text-blue-600"
                            : ""
                        }`}
                      >
                        Mission
                      </li>
                    </Link>
                    <Link href="/team">
                      <li
                        onClick={() => setActiveItem("team")}
                        className={`px-4 py-2 hover:bg-blue-50 cursor-pointer ${
                          activeItem === "team"
                            ? "font-semibold text-blue-600"
                            : ""
                        }`}
                      >
                        Team
                      </li>
                    </Link>
                    <Link href="/history">
                      <li
                        onClick={() => setActiveItem("history")}
                        className={`px-4 py-2 hover:bg-blue-50 cursor-pointer ${
                          activeItem === "history"
                            ? "font-semibold text-blue-600"
                            : ""
                        }`}
                      >
                        History
                      </li>
                    </Link>
                  </motion.ul>
                )}
              </AnimatePresence>
            </li>

            {/* Blog Dropdown */}
            <li
              className="relative"
              onMouseEnter={() => setBlogOpen(true)}
              onMouseLeave={() => setBlogOpen(false)}
            >
              <button
                onClick={() => setActiveItem("blog")}
                className="relative text-gray-800 hover:text-blue-600 font-medium"
              >
                Blog
                {activeItem === "blog" && (
                  <motion.div
                    layoutId="underline"
                    className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-600 rounded"
                  />
                )}
              </button>
              <AnimatePresence>
                {blogOpen && (
                  <motion.ul
                    variants={dropdownVariants}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    className="absolute top-full mt-2 left-0 w-40 bg-white shadow-lg rounded-md overflow-hidden text-black"
                  >
                    <Link href="/blog">
                      <li
                        onClick={() => setActiveItem("latest")}
                        className={`px-4 py-2 hover:bg-blue-50 cursor-pointer ${
                          activeItem === "latest"
                            ? "font-semibold text-blue-600"
                            : ""
                        }`}
                      >
                        Latest
                      </li>
                    </Link>
                    <Link href="/blog">
                      <li
                        onClick={() => setActiveItem("research")}
                        className={`px-4 py-2 hover:bg-blue-50 cursor-pointer ${
                          activeItem === "research"
                            ? "font-semibold text-blue-600"
                            : ""
                        }`}
                      >
                        Research
                      </li>
                    </Link>
                    <Link href="/blog">
                      <li
                        onClick={() => setActiveItem("tips")}
                        className={`px-4 py-2 hover:bg-blue-50 cursor-pointer ${
                          activeItem === "tips"
                            ? "font-semibold text-blue-600"
                            : ""
                        }`}
                      >
                        Tips
                      </li>
                    </Link>
                  </motion.ul>
                )}
              </AnimatePresence>
            </li>

            <li>
              <Link href="/gallery">
                <button
                  onClick={() => setActiveItem("gallery")}
                  className="relative text-gray-800 hover:text-blue-600 font-medium"
                >
                  Gallery
                  {activeItem === "gallery" && (
                    <motion.div
                      layoutId="underline"
                      className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-600 rounded"
                    />
                  )}
                </button>
              </Link>
            </li>

            <li>
              <Link href="/volunteer">
                <button
                  onClick={() => setActiveItem("volunteer")}
                  className="relative text-gray-800 hover:text-blue-600 font-medium"
                >
                  Volunteer
                  {activeItem === "volunteer" && (
                    <motion.div
                      layoutId="underline"
                      className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-600 rounded"
                    />
                  )}
                </button>
              </Link>
            </li>
          </ul>

          {/* Desktop Donate Button */}
          <div className="hidden md:block">
            <Link href="/donate">
              <button className="bg-amber-600 nav text-white px-7 py-2 rounded-full shadow-lg hover:bg-blue-700 transition font-semibold">
                Donate
              </button>
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="text-gray-800 focus:outline-none"
            >
              {mobileOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              variants={mobileMenuVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="md:hidden bg-white shadow-lg rounded-lg mt-3 p-5 space-y-3"
            >
              <Link href="/">
                <button className="block w-full text-left text-gray-800 hover:text-blue-600 font-medium">
                  Home
                </button>
              </Link>

              {/* About Dropdown */}
              <div>
                <button
                  onClick={() => setAboutOpen(!aboutOpen)}
                  className="w-full flex justify-between items-center text-gray-800 hover:text-blue-600 font-medium"
                >
                  About <span>{aboutOpen ? "−" : "+"}</span>
                </button>
                <AnimatePresence>
                  {aboutOpen && (
                    <motion.ul
                      initial={{ opacity: 0, y: -5 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -5 }}
                      className="pl-4 mt-2 space-y-2 text-gray-600"
                    >
                      <Link href="/mission">
                        <li>Mission</li>
                      </Link>
                      <Link href="/team">
                        <li>Team</li>
                      </Link>
                      <Link href="/history">
                        <li>History</li>
                      </Link>
                    </motion.ul>
                  )}
                </AnimatePresence>
              </div>

              {/* Blog Dropdown */}
              <div>
                <button
                  onClick={() => setBlogOpen(!blogOpen)}
                  className="w-full flex justify-between items-center text-gray-800 hover:text-blue-600 font-medium"
                >
                  Blog <span>{blogOpen ? "−" : "+"}</span>
                </button>
                <AnimatePresence>
                  {blogOpen && (
                    <motion.ul
                      initial={{ opacity: 0, y: -5 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -5 }}
                      className="pl-4 mt-2 space-y-2 text-gray-600"
                    >
                      <Link href="/blog">
                        <li>Latest</li>
                      </Link>
                      <Link href="/blog">
                        <li>Research</li>
                      </Link>
                      <Link href="/blog">
                        <li>Tips</li>
                      </Link>
                    </motion.ul>
                  )}
                </AnimatePresence>
              </div>

              <Link href="/gallery">
                <button className="block w-full text-left text-gray-800 hover:text-blue-600 font-medium">
                  Gallery
                </button>
              </Link>

              <Link href="/volunteer">
                <button className="block w-full text-left text-gray-800 hover:text-blue-600 font-medium">
                  Volunteer
                </button>
              </Link>

              <Link href="/donate">
                <button className="w-full bg-amber-600 text-white py-2 rounded-full shadow hover:bg-blue-700 transition">
                  Donate
                </button>
              </Link>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};

export default Navbar;
