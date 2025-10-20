'use client';

import Image from 'next/image';
import { useState } from 'react';

export function Footer() {
  const [email, setEmail] = useState('');

  const handleEmailSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Здесь можно добавить логику отправки email
    console.log('Email submitted:', email);
  };

  return (
      <div className="container mx-auto p-16">
        <div className="flex flex-col gap-8 items-center mx-auto">
          {/* Stay with Zori section */}
          <div className="flex items-center justify-between w-full">
            <div className="flex flex-col gap-4 items-center justify-center text-[#fffbf9] w-[500px]">
              <p className="font-qedysans text-[36px] leading-[1.2] w-full">
                Stay with Zori
              </p>
              <p className="font-raleway-medium text-[16px] font-medium leading-[1.5] opacity-80 w-full">
                Zori helps you understand your emotions, follow cosmic cycles, and make choices that align with your true self.
              </p>
            </div>
            <form onSubmit={handleEmailSubmit} className="bg-[rgba(255,251,249,0.05)] flex items-center justify-between pl-4 pr-2 py-2 rounded-2xl w-[400px]">
              <label htmlFor="email-input" className="sr-only">
                Email address
              </label>
              <input
                id="email-input"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="your email"
                className="bg-transparent font-jetbrains-mono text-[16px] font-normal text-[rgba(255,251,249,0.25)] uppercase placeholder-[rgba(255,251,249,0.25)] outline-none flex-1"
              />
              <button type="submit" className="relative size-[44px] hover:opacity-80 transition-opacity">
                <Image
                  src="/images/ui/button-arrow.svg"
                  alt="Submit email"
                  width={44}
                  height={44}
                  className="block max-w-none size-full"
                />
              </button>
            </form>
          </div>

          {/* Divider */}
          <div className="h-0 relative w-[800px]">
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
          <div className="flex flex-col gap-4 items-start justify-center w-full">
            <p className="font-jetbrains-mono text-[24px] font-normal text-[#fffbf9] uppercase">
              Download Zori
            </p>
            <div className="flex items-center justify-between w-full">
              <div className="flex gap-4 items-start justify-center">
                {/* Telegram button */}
                <button className="bg-[#292827] border border-[#a7a7a7] flex gap-2.5 h-11 items-center p-2 rounded-[5px] hover:opacity-80 transition-opacity">
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
                <button className="h-11 relative w-[146px]transition-opacity">
                  <div className="inset-0 overflow-hidden pointer-events-none">
                    <Image
                      src="/images/icons/appstore.png"
                      alt="Download on App Store"
                      width={146}
                      height={46}
        
                    />
                  </div>
                </button>

 
                <button className="h-11 relative w-[148px] transition-opacity">
                  <div className="inset-0  overflow-hidden pointer-events-none">
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
              <div className="flex gap-4 items-start">
                <button className="flex gap-2.5 items-center justify-center px-2 py-1 hover:opacity-80 transition-opacity">
                  <p className="font-jetbrains-mono text-[20px] font-normal text-[#fffbf9] uppercase">
                    Home
                  </p>
                </button>
                <button className="flex gap-2.5 items-center justify-center px-2 py-1 hover:opacity-80 transition-opacity">
                  <p className="font-jetbrains-mono text-[20px] font-normal text-[#fffbf9] uppercase">
                    about
                  </p>
                </button>
              </div>
            </div>
          </div>

          {/* Copyright */}
          <p className="font-jetbrains-mono text-[16px] font-normal leading-[1.2] min-w-full opacity-80 text-[#fffbf9] uppercase w-[min-content]">
            <span>© 2025 Zori. All rights reserved. </span>
            <button className="underline hover:opacity-80 transition-opacity">Privacy Policy</button>
            <span> · </span>
            <button className="underline hover:opacity-80 transition-opacity">Terms of Use</button>
          </p>
        </div>
      </div>
  );
}