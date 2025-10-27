'use client';

import Image from 'next/image';
import { useState, useEffect } from 'react';

export function CookieConsent() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookie-consent');
    if (!consent) {
      // Show with a slight delay for smooth appearance
      setTimeout(() => setIsVisible(true), 500);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookie-consent', 'accepted');
    setIsVisible(false);
  };

  const handleDecline = () => {
    localStorage.setItem('cookie-consent', 'declined');
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center p-2  justify-center bg-black/30 backdrop-blur-sm">
      <div className="bg-[#faf9f7] rounded-[24px] p-4 max-w-[400px] w-full shadow-2xl animate-in fade-in-0 slide-in-from-bottom-4 duration-500">

        <div className="flex justify-center mb-4">
          <div className="relative size-[80px] h-auto">
            <Image
              src="/images/logos/cookies.png"
              alt="Cookie"
              width={80}
              height={67}
              className="object-contain"
              loading="lazy"
            />
          </div>
        </div>

        <div className="w-full my-2 md:my-4 flex justify-center">
          <div className="w-full h-[1px]"
            style={{
              background: 'linear-gradient(90deg, #CCC8C7 0%, rgba(0, 0, 0, 0.5) 50.48%, #CCC8C7 100%)',
            }}
          />
        </div>
        

        {/* Heading */}
        <h2 className="font-jetbrains-mono text-[16px]  font-normal text-[#292827] uppercase mb-3 text-center">
          WE USE COOKIES
        </h2>

        {/* Text */}
        <p className="font-raleway text-[12px] text-[#52504e] text-center leading-relaxed mb-6">
          This website uses cookies to enhance your experience, analyze traffic, and remember your preferences. By continuing to browse, you agree to our cookie policy.
        </p>

        {/* Buttons */}
        <div className="flex gap-3 mt-6">
          <button
            onClick={handleDecline}
            className="flex-1  text-[16px] font-qedysans text-[#292827] underline py-2 px-4 transition-all duration-200 hover:opacity-70"
          >
            Decline
          </button>
          <div className="flex-1 relative h-11 rounded-[1000px] min-w-[160px] overflow-hidden">
            <div className="absolute inset-0">
              <Image
                src="/images/backgrounds/button-bg.png"
                alt=""
                fill
                className="object-cover"
              />
            </div>
            <button
              onClick={handleAccept}
              className="relative z-10 w-full whitespace-nowrap h-full font-qedysans text-base text-white transition-all duration-200 hover:scale-[1.02] active:scale-[0.98]"
            >
              Allow cookies
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

