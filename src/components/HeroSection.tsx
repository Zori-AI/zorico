import Image from 'next/image';

export function HeroSection() {
  return (
    <div className="bg-[#f8f2ec]">
      <div className="container mx-auto px-4 md:px-16 md:pr-0">
        <div className="flex flex-col md:flex-row gap-8 items-center justify-center py-16 mx-auto">
          {/* Text Content */}
          <div className="flex flex-col gap-6 items-start justify-center w-full md:w-[464px] max-w-[464px]">
            <div className="font-qedysans leading-[1.2] text-[#292827] text-3xl md:text-[48px]">
              <p className="mb-0">Your calm guide</p>
              <p>to self-understanding</p>
            </div>
            <div className="flex flex-col gap-2 text-sm md:text-[16px] w-full">
              <p className="font-raleway-medium leading-[1.5] text-[#52504e] w-full">
                Create your natal chart in 30 seconds and get precise insights, daily calendar, and access to your astrologer anytime.
              </p>
              <p className="font-jetbrains-mono font-normal leading-[1.2] text-[#292827] uppercase w-full text-xs md:text-base">
                Powered by NASA JPL and Swiss Ephemeris
              </p>
            </div>
            <div className="relative h-11 w-[200px] flex items-center justify-center overflow-hidden rounded-[1000px]">
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
            </div>
          </div>

          {/* Image Content */}
          <div className="w-full md:w-[720px] h-[300px] md:h-[453.98px] relative max-w-[720px]">
            <Image
              src="/images/logos/hero-logo.png"
              alt="Zori App Preview"
              fill
              className="object-contain"
              priority
            />
          </div>
        </div>
      </div>
    </div>
  );
}
