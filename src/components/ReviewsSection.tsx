'use client';

import { useState } from 'react';

interface Review {
  id: number;
  name: string;
  text: string;
}

const reviews: Review[] = [
  {
    id: 1,
    name: 'Nova',
    text: 'Zori helps me start every morning with clarity and peace 🌙✨'
  },
  {
    id: 2,
    name: 'Luna',
    text: 'I finally understand my moods — the app feels truly personal 😊'
  },
  {
    id: 3,
    name: 'Aurora',
    text: 'Beautiful design and gentle daily insights. I use it every day 💖🌸'
  },
  {
    id: 4,
    name: 'Ethan',
    text: 'Zori became my little ritual — a moment to reconnect with myself 🧘‍♀️'
  },
  {
    id: 5,
    name: 'Selene',
    text: 'Accurate, calming, and inspiring. Exactly what I needed ✨🙏'
  }
];

export function ReviewsSection() {
  const [isPaused, setIsPaused] = useState(false);

  return (
    <div className="flex flex-col gap-8 items-center w-full">
      <p className="font-qedysans text-[24px] md:text-[36px] text-[#292827] text-center leading-[1.2]">
        Zori Moments
      </p>

      <div className="relative w-full overflow-hidden">
        {/* Edge gradients */}
        <div className="hidden md:block absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-[#f8f2ec] via-[#f8f2ec]/80 to-transparent z-10 pointer-events-none" />
        <div className="hidden md:block absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-[#f8f2ec] via-[#f8f2ec]/80 to-transparent z-10 pointer-events-none" />

        {/* CSS animation carousel */}
        <div
          className={`flex gap-4 py-4 px-4 reviews-carousel ${isPaused ? 'paused' : ''}`}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Duplicate reviews for seamless looping */}
          {[...reviews, ...reviews].map((review, index) => (
            <div
              key={`${review.id}-${index}`}
              className="backdrop-blur-[2px] border border-[rgba(22,21,18,0.5)] rounded-2xl p-4 md:p-8 w-[266px] flex-shrink-0 flex flex-col md:gap-8 gap-4"
            >
              <div className="flex flex-col gap-2">
                <p className="font-jetbrains-mono text-[16px] md:text-[20px] text-[#292827] uppercase leading-none">
                  {review.name}
                </p>
              </div>
              <p className="font-raleway-medium text-[16px] text-[#52504e] leading-[1.5]">
                {review.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
