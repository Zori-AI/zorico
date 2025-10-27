'use client';

import Image from 'next/image';

export function HeroSection() {
  return (
    <div className="bg-[#f8f2ec]">
      <div className="mx-auto px-0 md:px-16 md:pr-0">
        <div className="flex flex-col-reverse md:flex-row gap-8 items-center justify-between py-0 md:py-16 mx-auto">
          {/* Text Content */}
          <div className="flex flex-col gap-6 justify-between items-start px-4 md:px-0 w-full md:w-[464px] md:max-w-[464px]">
            <div id="hero-heading" className="font-qedysans leading-[1.2] text-center w-full md:w-auto md:text-left text-[#292827] text-3xl lg:text-[48px]">
              <p className="mb-0 md:text-left">Your calm guide</p>
              <p>to self-understanding</p>
            </div>
            <div className="flex flex-col gap-2 text-center md:text-left text-sm md:text-[16px] w-full">
              <p className="font-raleway-medium leading-[1.5] text-[#52504e] w-full">
                Create your natal chart in 30 seconds and get precise insights, daily calendar, and access to your astrologer anytime.
              </p>
              <p className="font-jetbrains-mono font-normal leading-[1.2] text-[#292827] uppercase w-full text-xs md:text-base">
                Powered by NASA JPL and Swiss Ephemeris
              </p>
            </div>
            <div className="w-full md:w-auto flex items-center justify-center">
            <button 
              onClick={() => {
                const footer = document.getElementById('footer');
                if (footer) {
                  const header = document.querySelector('.header-fixed');
                  const headerHeight = header ? header.getBoundingClientRect().height : 80;
                  const elementPosition = footer.getBoundingClientRect().top + window.scrollY;
                  const offsetPosition = elementPosition - headerHeight;
                  window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                  });
                }
              }}
              className="relative h-11 w-[200px] flex items-center justify-center overflow-hidden rounded-[1000px] hover:opacity-90 transition-opacity cursor-pointer"
            >
              <div className="absolute inset-0">
                <Image
                  src="/images/backgrounds/button-bg.png"
                  alt=""
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative z-10 flex items-center justify-center">
                <span className="font-qedysans text-[#fffbf9] text-base">Try Zori</span>
              </div>
            </button>
          </div>
          </div>

          {/* Image Content */}
          <div className="w-full md:max-w-[60%]">
            <Image
              src="/images/logos/hero-logo.png"
              alt="Zori App Preview"
              width={1400}
              height={654}
              className="w-full h-auto object-contain"
              priority
            />
          </div>
        </div>
      </div>
    </div>
  );
}
