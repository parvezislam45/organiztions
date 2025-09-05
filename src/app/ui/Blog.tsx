'use client';
import React from "react";
import Image from "next/image";

const blogs = [
  {
    title: "Innovative Heart Treatments Saving Lives",
    excerpt:
      "Discover the latest breakthroughs in cardiology and how our team implements cutting-edge heart care solutions.",
    image:
      "https://th.bing.com/th/id/OIP.Z1AwWyyfnuSTmKgm4P7o1AAAAA?w=178&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3",
    link: "#",
  },
  {
    title: "The Importance of Preventive Healthcare",
    excerpt:
      "Preventive healthcare is key to long-term wellness. Learn how routine checkups and screenings can save lives.",
    image:
      "https://th.bing.com/th/id/OIP.FDKQ8_tAuspZnlKX2UG28gHaE8?w=256&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3",
    link: "#",
  },
  {
    title: "Advancing Telemedicine for Patients",
    excerpt:
      "Explore how telemedicine is revolutionizing healthcare delivery, making expert care accessible from home.",
    image:
      "https://tse1.mm.bing.net/th/id/OIP.5oPoeRiQWg5E4zoIgitEMgHaE-?rs=1&pid=ImgDetMain&o=7&rm=3",
    link: "#",
  },
  {
    title: "Mental Health Awareness in Modern Times",
    excerpt:
      "We prioritize mental health by providing counseling, therapy, and awareness programs for our patients.",
    image:
      "https://images.unsplash.com/photo-1504439468489-c8920d796a29?auto=format&fit=crop&w=800&q=80",
    link: "#",
  },
];

const Blog: React.FC = () => {
  return (
    <section className="bg-white py-16 px-6 md:px-12 lg:px-20">
      <div className="max-w-7xl mx-auto text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900">
          Latest <span className="text-blue-600 about">Healthcare Insights</span>
        </h2>
        <p className="text-gray-600 mt-4 max-w-2xl mx-auto head font-bold text-2xl">
          Stay informed with our latest articles, research updates, and expert healthcare tips.
        </p>
      </div>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
        {blogs.map((blog, idx) => (
          <div
            key={idx}
            className="flex flex-col bg-gray-50 rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition duration-500"
          >
            <div className="relative w-full h-48">
              <img
                src={blog.image}
                alt={blog.title}
                className="object-cover w-full h-full"
              />
            </div>
            <div className="p-6 flex flex-col flex-1">
              <h3 className="text-lg font-semibold text-gray-900 mb-2 nav">{blog.title}</h3>
              <p className="text-gray-600 mb-4 flex-1 paragraph">{blog.excerpt}</p>
              <a
                href={blog.link}
                className="mt-auto inline-block text-blue-600 font-semibold hover:underline"
              >
                Read More →
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Blog;
