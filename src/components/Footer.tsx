'use client';

import Image from 'next/image';
import {useState} from 'react';
import {EmailInput} from '@/components/ui/emailInput';

export function Footer() {
  const [email, setEmail] = useState('');

  const handleEmailSubmit = () => {
    if (email.trim()) {
      // Email submission logic can be added here
      console.log('Email submitted:', email);
      setEmail(''); // Clear field after submission
    }
  };

  // Function for smooth scrolling to a section with header offset
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const header = document.querySelector('.header-fixed');
      const headerHeight = header ? header.getBoundingClientRect().height : 80;
      
      const elementPosition = element.getBoundingClientRect().top + window.scrollY;
      const offsetPosition = elementPosition - headerHeight;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="container mx-auto px-4 py-8 xl:py-16 xl:px-16">
      <div className="flex flex-col gap-8 items-center mx-auto">
        {/* Stay with Zori section */}
        <div className="flex flex-col md:flex-row items-center justify-between w-full gap-8">
          <div className="flex flex-col gap-4 items-center justify-center text-[#fffbf9] w-full md:w-[500px]">
            <p className="font-qedysans text-[24px] md:text-[36px] leading-[1.2] w-full text-left">
              Stay with Zori
            </p>
            <p
              className="font-raleway-medium text-[16px] font-medium leading-[1.5] opacity-80 w-full text-left">
              Zori helps you understand your emotions, follow cosmic cycles, and make choices that align with your true
              self.
            </p>
          </div>
          <div className="w-full md:w-[400px]">
            <EmailInput
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              onButtonClick={handleEmailSubmit}
              placeholder="your email"
              variant="desktop"
              className="flex"
            />
          </div>
        </div>

        {/* Divider */}
        <div className="w-full flex justify-center">
          <svg width="800" height="1" viewBox="0 0 800 1" fill="none" xmlns="http://www.w3.org/2000/svg">
            <line y1="0.200391" x2="800" y2="0.200391" stroke="url(#paint0_linear_8932_47008)" strokeWidth="0.4"/>
            <defs>
              <linearGradient id="paint0_linear_8932_47008" x1="0" y1="0.900391" x2="800" y2="0.900391"
                              gradientUnits="userSpaceOnUse">
                <stop/>
                <stop offset="0.504808" stopColor="#CCC8C7" stopOpacity="0.5"/>
                <stop offset="1"/>
              </linearGradient>
            </defs>
          </svg>

        </div>

        {/* Download section */}
        <div className="flex flex-col gap-4 items-center md:items-start justify-center w-full">
          <p
            className="font-jetbrains-mono text-[16px] md:text-[24px] font-normal text-[#fffbf9] uppercase text-center md:text-left">
            Download Zori
          </p>
          <div className="flex flex-col items-center md:items-start xl:flex-row xl:items-center justify-between w-full gap-4">
            <div
              className="flex flex-col md:flex-row gap-4 xl:items-center justify-start w-full max-w-[146px] md:max-w-full md:w-auto">
              {/* Telegram button */}
              <button
                className="bg-[#292827] border border-[#a7a7a7] flex gap-2.5 h-11 items-center p-2 rounded-[5px] hover:opacity-80 transition-opacity w-full md:w-auto">
                <div className="aspect-[40/40] h-full relative">
                  <Image
                    src="/images/icons/telegram-icon.svg"
                    alt=""
                    width={40}
                    height={40}
                    className="block max-w-none size-full"
                    loading="lazy"
                  />
                </div>
                <div className="font-['SF_Pro:Medium',_sans-serif] font-[510] font-normal leading-[1.2] whitespace-nowrap text-[#fffbf9]"
                     style={{fontVariationSettings: "'wdth' 100"}}>
                  <p className="mb-0 text-left text-[11px]">
                    Open in<br/> Telegram mini-app
                  </p>
                </div>
              </button>

              {/* App Store button */}
              <button className="h-11 relative w-[146px] transition-opacity ">
                <div className="inset-0 overflow-hidden pointer-events-none">
                  <Image
                    src="/images/icons/appstore.png"
                    alt="Download on App Store"
                    width={146}
                    height={46}
                    loading="lazy"
                  />
                </div>
              </button>

              {/* Google Play button */}
              <button className="h-11 relative w-[148px] transition-opacity">
                <div className="inset-0 overflow-hidden pointer-events-none">
                  <Image
                    src="/images/icons/googleplay.png"
                    alt="Get it on Google Play"
                    width={148}
                    height={46}
                    loading="lazy"
                  />
                </div>
              </button>
            </div>

            {/* Navigation buttons */}
            <div className="hidden md:flex flex-col md:flex-row gap-4 items-center md:items-start">
              <button
                onClick={() => scrollToSection('home')}
                className="flex gap-2.5 items-center justify-center px-2 py-1 hover:opacity-80 cursor-pointer nav-button"
              >
                <p
                  className="font-jetbrains-mono text-[16px] md:text-[20px] font-normal text-[#fffbf9] uppercase nav-text">
                  Home
                </p>
              </button>
              <button
                onClick={() => scrollToSection('about')}
                className="flex gap-2.5 items-center justify-center px-2 py-1 hover:opacity-80 cursor-pointer nav-button"
              >
                <p
                  className="font-jetbrains-mono text-[16px] md:text-[20px] font-normal text-[#fffbf9] uppercase nav-text">
                  about
                </p>
              </button>
              <button
                onClick={() => scrollToSection('how-zori-works')}
                className="flex gap-2.5 items-center justify-center px-2 py-1 hover:opacity-80 cursor-pointer nav-button"
              >
                <p
                  className="font-jetbrains-mono text-[16px] md:text-[20px] font-normal text-[#fffbf9] uppercase nav-text">
                  how zori works
                </p>
              </button>
              <button
                onClick={() => scrollToSection('faq')}
                className="flex gap-2.5 items-center justify-center px-2 py-1 hover:opacity-80 cursor-pointer nav-button"
              >
                <p
                  className="font-jetbrains-mono text-[16px] md:text-[20px] font-normal text-[#fffbf9] uppercase nav-text">
                  faq
                </p>
              </button>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="flex w-full flex-col md:flex-row gap-4 items-center ">
          <p
            className="font-jetbrains-mono text-[16px] font-normal leading-[1.2] opacity-80 text-[#fffbf9] uppercase text-center md:text-left">
            © 2025 Zori. All rights reserved.
          </p>
          <div className="flex gap-2 items-center">
            <button
              className="underline hover:opacity-80 transition-opacity text-[16px] font-jetbrains-mono text-[#fffbf9] uppercase">Privacy
              Policy
            </button>
            <span className="text-[#fffbf9]">·</span>
            <button
              className="underline hover:opacity-80 transition-opacity text-[16px] font-jetbrains-mono text-[#fffbf9] uppercase">Terms
              of Use
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
