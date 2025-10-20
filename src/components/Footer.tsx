'use client';

import Image from 'next/image';
import { useState } from 'react';
import { EmailInput } from '@/components/ui/emailInput';

export function Footer() {
  const [email, setEmail] = useState('');

  const handleEmailSubmit = () => {
    if (email.trim()) {
      // Здесь можно добавить логику отправки email
      console.log('Email submitted:', email);
      setEmail(''); // Очищаем поле после отправки
    }
  };

  // Функция для плавной прокрутки к секции
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  };

  return (
      <div className="container mx-auto p-16">
        <div className="flex flex-col gap-8 items-center mx-auto">
          {/* Stay with Zori section */}
          <div className="flex flex-col md:flex-row items-center justify-between w-full gap-8">
            <div className="flex flex-col gap-4 items-center justify-center text-[#fffbf9] w-full md:w-[500px]">
              <p className="font-qedysans text-[24px] md:text-[36px] leading-[1.2] w-full text-center md:text-left">
                Stay with Zori
              </p>
              <p className="font-raleway-medium text-[16px] font-medium leading-[1.5] opacity-80 w-full text-center md:text-left">
                Zori helps you understand your emotions, follow cosmic cycles, and make choices that align with your true self.
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
          <div className="h-0 relative w-[300px] md:w-[800px] mx-auto">
            <div className="absolute bottom-0 left-0 right-0 top-[-0.4px]">
              <Image
                src="/images/ui/divider-footer.svg"
                alt=""
                width={800}
                height={1}
                className="block max-w-none size-full"
              />
            </div>
          </div>

          {/* Download section */}
          <div className="flex flex-col gap-4 items-center md:items-start justify-center w-full">
            <p className="font-jetbrains-mono text-[16px] md:text-[24px] font-normal text-[#fffbf9] uppercase text-center md:text-left">
              Download Zori
            </p>
            <div className="flex flex-col md:flex-row items-center justify-between w-full gap-4">
              <div className="flex flex-col md:flex-row gap-4 items-center justify-center w-full md:w-auto">
                {/* Telegram button */}
                <button className="bg-[#292827] border border-[#a7a7a7] flex gap-2.5 h-11 items-center p-2 rounded-[5px] hover:opacity-80 transition-opacity w-full md:w-auto">
                  <div className="aspect-[40/40] h-full relative">
                    <Image
                      src="/images/icons/telegram-icon.svg"
                      alt=""
                      width={40}
                      height={40}
                      className="block max-w-none size-full"
                    />
                  </div>
                  <div className="font-['SF_Pro:Medium',_sans-serif] font-[510] font-normal leading-[1.2] text-[#fffbf9] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
                    <p className="mb-0 text-[11px]" style={{ fontVariationSettings: "'wdth' 100" }}>
                      Open in
                    </p>
                    <p className="text-[13px]" style={{ fontVariationSettings: "'wdth' 100" }}>
                      Telegram mini-app
                    </p>
                  </div>
                </button>

                {/* App Store button */}
                <button className="h-11 relative w-[146px] transition-opacity opacity-25">
                  <div className="inset-0 overflow-hidden pointer-events-none">
                    <Image
                      src="/images/icons/appstore.png"
                      alt="Download on App Store"
                      width={146}
                      height={46}
                    />
                  </div>
                </button>

                {/* Google Play button */}
                <button className="h-11 relative w-[148px] transition-opacity opacity-25">
                  <div className="inset-0 overflow-hidden pointer-events-none">
                    <Image
                      src="/images/icons/googleplay.png"
                      alt="Get it on Google Play"
                      width={148}
                      height={46}
                    />
                  </div>
                </button>
              </div>

              {/* Navigation buttons */}
              <div className="flex flex-col md:flex-row gap-4 items-center md:items-start">
                <button 
                  onClick={() => scrollToSection('home')}
                  className="flex gap-2.5 items-center justify-center px-2 py-1 hover:opacity-80 cursor-pointer nav-button"
                >
                  <p className="font-jetbrains-mono text-[16px] md:text-[20px] font-normal text-[#fffbf9] uppercase nav-text">
                    Home
                  </p>
                </button>
                <button 
                  onClick={() => scrollToSection('about')}
                  className="flex gap-2.5 items-center justify-center px-2 py-1 hover:opacity-80 cursor-pointer nav-button"
                >
                  <p className="font-jetbrains-mono text-[16px] md:text-[20px] font-normal text-[#fffbf9] uppercase nav-text">
                    about
                  </p>
                </button>
              </div>
            </div>
          </div>

          {/* Copyright */}
          <div className="flex flex-col md:flex-row gap-4 items-center md:items-start">
            <p className="font-jetbrains-mono text-[16px] font-normal leading-[1.2] opacity-80 text-[#fffbf9] uppercase text-center md:text-left">
              © 2025 Zori. All rights reserved.
            </p>
            <div className="flex gap-2 items-center">
              <button className="underline hover:opacity-80 transition-opacity text-[16px] font-jetbrains-mono text-[#fffbf9] uppercase">Privacy Policy</button>
              <span className="text-[#fffbf9]">·</span>
              <button className="underline hover:opacity-80 transition-opacity text-[16px] font-jetbrains-mono text-[#fffbf9] uppercase">Terms of Use</button>
            </div>
          </div>
        </div>
      </div>
  );
}