'use client';
import React, { useEffect, useState } from "react";

const images = [
  "https://images.theconversation.com/files/365954/original/file-20201027-23-192ozcj.jpg?ixlib=rb-1.1.0&q=30&auto=format&w=600&h=400&fit=crop&dpr=2",
  "https://tse1.mm.bing.net/th/id/OIP.29U2X1jFgBdpGtdIxL3BYQHaFV?rs=1&pid=ImgDetMain&o=7&rm=3",
  "https://fitnessdrum.com/wp-content/uploads/2019/09/gardening-1-min.png",
  "https://th.bing.com/th?id=OIF.dShN0X%2f7ioBiaKU7ItthRQ&rs=1&pid=ImgDetMain&o=7&rm=3",
  "https://th.bing.com/th?id=OIF.BdP0mmETo0p%2bLNPIWyhoAw&rs=1&pid=ImgDetMain&o=7&rm=3",
  "https://images.squarespace-cdn.com/content/v1/63eebdbf2e53e822e193acbf/1676832191294-315R0LMIF19ZJZ6AJZC5/Speech+Therapy.jpg",
  "https://media.istockphoto.com/photos/cheerful-pediatrician-gives-patient-high-five-picture-id1293681824?k=20&m=1293681824&s=612x612&w=0&h=MoTABQ7mMvu42b8rdasRWokPeWqs0Iuwg_OHxpMvFA8=",
  "https://dn9tckvz2rpxv.cloudfront.net/swedish/img3/Ballard_1_525x400.jpg",
  "https://www.chpw.org/wp-content/uploads/2023/08/bulletin_ClinicalPracticeGuidelinesUpdate.jpg",
  "https://www.health.com/thmb/TgndGaHTQezdZnYh2TTsQVKK7Zk=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/GettyImages-1309071099-7151e5c91b6d482cb20cb8a3b163e413.jpg",
  "https://tse3.mm.bing.net/th/id/OIP.djZLWalnlMLofN1SoUQ4RgAAAA?w=400&h=229&rs=1&pid=ImgDetMain&o=7&rm=3",
  "https://siddhachalhospitals.com/wp-content/uploads/2022/05/post-003.jpg",
];

type SizeType = "tall" | "wide" | "normal";

interface Card {
  id: number;
  src: string;
  size: SizeType;
}

const Dynamic: React.FC = () => {
  const [cards, setCards] = useState<Card[]>([]);

  // Helper to get random size
  const randomSize = (): SizeType => {
    const sizes: SizeType[] = ["tall", "wide", "normal"];
    return sizes[Math.floor(Math.random() * sizes.length)];
  };

  // Initialize 8 unique cards
  useEffect(() => {
    const shuffled = [...images].sort(() => Math.random() - 0.5);
    const initialCards = shuffled.slice(0, 8).map((src, idx) => ({
      id: idx,
      src,
      size: randomSize(),
    }));
    setCards(initialCards);
  }, []);

  // Update 4 random cards every second
  useEffect(() => {
    const interval = setInterval(() => {
      setCards((prev) => {
        const newCards = [...prev];

        // Pool of images not currently in grid
        const usedImages = newCards.map((c) => c.src);
        const availableImages = images.filter((img) => !usedImages.includes(img));

        // Pick 4 random indices to replace
        const indicesToReplace = getRandomIndices(newCards.length, 4);

        indicesToReplace.forEach((i) => {
          if (availableImages.length === 0) return; // no more unique images
          const rand = Math.floor(Math.random() * availableImages.length);
          newCards[i] = {
            ...newCards[i],
            src: availableImages[rand],
            size: randomSize(),
          };
          availableImages.splice(rand, 1);
        });

        return newCards;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  // Helper to pick N unique random indices
  const getRandomIndices = (max: number, count: number) => {
    const indices: number[] = [];
    while (indices.length < count) {
      const rand = Math.floor(Math.random() * max);
      if (!indices.includes(rand)) indices.push(rand);
    }
    return indices;
  };

  return (
    <section className="bg-white py-16 px-6 md:px-12 lg:px-20">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-extrabold text-gray-900 text-center mb-12 about">
          Our <span className="text-blue-600">Gallery</span>
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {cards.map((card) => (
            <div
              key={card.id}
              className={`relative rounded-2xl overflow-hidden shadow-lg transition-all duration-500
                ${card.size === "tall" ? "row-span-2 h-64 md:h-96" : ""}
                ${card.size === "wide" ? "col-span-2 h-40 md:h-48" : ""}
                ${card.size === "normal" ? "h-40 md:h-48" : ""}
              `}
            >
              <img
                src={card.src}
                alt={`Gallery ${card.id}`}
                className="object-cover w-full h-full"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Dynamic;
