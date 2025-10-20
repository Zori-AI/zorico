'use client';

import Image from 'next/image';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  return (
    <>
      {/* Overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-40 md:hidden"
          onClick={onClose}
        />
      )}
      
      {/* Menu */}
      <div className={`fixed top-0 left-0 h-full w-64 bg-[#f8f2ec] z-50 transform transition-transform duration-300 ease-in-out md:hidden ${
        isOpen ? 'translate-x-0' : '-translate-x-full'
      }`}>
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2"
          aria-label="Close menu"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
        
        <div className="flex flex-col gap-4 p-4 pt-20">
          {/* Home Button */}
          <div className="flex flex-col items-center justify-center h-11 w-full px-4">
            <span className="font-['JetBrains_Mono:Regular',_sans-serif] text-[20px] font-normal text-[#292827] uppercase leading-[22px]">
              Home
            </span>
            <div className="h-0 w-12 mt-2">
              <Image
                src="/images/ui/underline.svg"
                alt=""
                width={50}
                height={2}
                className="w-full h-0.5"
              />
            </div>
          </div>
          
          {/* About Button */}
          <div className="flex items-center justify-center h-11 w-full px-4">
            <span className="font-['JetBrains_Mono:Regular',_sans-serif] text-[20px] font-normal text-[#292827] uppercase leading-[22px]">
              about
            </span>
          </div>
        </div>
      </div>
    </>
  );
}
