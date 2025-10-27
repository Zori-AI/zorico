'use client';

import Image from 'next/image';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  onNavigate?: (sectionId: string) => void;
  activeSection?: string;
}

export function MobileMenu({ isOpen, onClose, onNavigate, activeSection }: MobileMenuProps) {
  return (
    <>
      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-[#292827]/50 z-40 md:hidden"
          onClick={onClose}
        />
      )}

      {/* Menu - Under Header */}
      <div className={`fixed left-0 right-0 bg-[#f8f2ec] z-50 transform transition-transform duration-300 ease-in-out md:hidden ${
        isOpen ? 'translate-y-0 top-[64px]' : '-translate-y-full -top-[190px]'
      }`}>
        {/* Menu Content */}
        <div className="flex flex-col gap-0 p-4">
          {/* Home Button */}
          <button
            onClick={() => onNavigate?.('home')}
            className="flex flex-col items-center justify-center h-11 w-full px-4 cursor-pointer hover:opacity-80 nav-button"
          >
            <span className="font-['JetBrains_Mono:Regular',_sans-serif] text-[20px] font-normal text-[#292827] uppercase leading-[22px] nav-text">
              Home
            </span>
            {activeSection === 'home' && (
              <div className="h-0 w-12 mt-2">
                <Image
                  src="/images/ui/underline.svg"
                  alt=""
                  width={50}
                  height={2}
                  className="w-full h-0.5"
                  loading="lazy"
                />
              </div>
            )}
          </button>

          {/* About Button */}
          <button
            onClick={() => onNavigate?.('about')}
            className="flex flex-col items-center justify-center h-11 w-full px-4 cursor-pointer hover:opacity-80 nav-button"
          >
            <span className="font-['JetBrains_Mono:Regular',_sans-serif] text-[20px] font-normal text-[#292827] uppercase leading-[22px] nav-text">
              about
            </span>
            {activeSection === 'about' && (
              <div className="h-0 w-12 mt-2">
                <Image
                  src="/images/ui/underline.svg"
                  alt=""
                  width={50}
                  height={2}
                  className="w-full h-0.5"
                  loading="lazy"
                />
              </div>
            )}
          </button>

          {/* How it works Button */}
          <button
            onClick={() => onNavigate?.('how-zori-works')}
            className="flex flex-col items-center justify-center h-11 w-full px-4 cursor-pointer hover:opacity-80 nav-button"
          >
            <span className="font-['JetBrains_Mono:Regular',_sans-serif] text-[20px] font-normal text-[#292827] uppercase leading-[22px] nav-text">
              How it works
            </span>
            {activeSection === 'how-zori-works' && (
              <div className="h-0 w-12 mt-2">
                <Image
                  src="/images/ui/underline.svg"
                  alt=""
                  width={50}
                  height={2}
                  className="w-full h-0.5"
                  loading="lazy"
                />
              </div>
            )}
          </button>

          {/* FAQ Button */}
          <button
            onClick={() => onNavigate?.('faq')}
            className="flex flex-col items-center justify-center h-11 w-full px-4 cursor-pointer hover:opacity-80 nav-button"
          >
            <span className="font-['JetBrains_Mono:Regular',_sans-serif] text-[20px] font-normal text-[#292827] uppercase leading-[22px] nav-text">
              FAQ
            </span>
            {activeSection === 'faq' && (
              <div className="h-0 w-12 mt-2">
                <Image
                  src="/images/ui/underline.svg"
                  alt=""
                  width={50}
                  height={2}
                  className="w-full h-0.5"
                  loading="lazy"
                />
              </div>
            )}
          </button>
        </div>
      </div>
    </>
  );
}
