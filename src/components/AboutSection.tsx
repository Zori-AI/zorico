import Image from 'next/image';

export function AboutSection() {
  return (
    <div className="bg-[#f8f2ec] py-8 md:py-16">
      <div className="container mx-auto px-4 md:px-16">
        <div className="flex flex-col gap-8 items-center justify-center mx-auto">
          {/* Title and Text - Mobile First Layout */}
          <div className="flex flex-col gap-4 items-center">
            <h2 className="font-qedysans leading-[1.2] text-[#292827] text-[24px] md:text-[36px] text-center w-full md:w-[255px]">
              About Zori
            </h2>
            
            {/* Text Content - Mobile First Layout */}
            <div className="flex flex-col md:flex-row gap-4 items-center justify-center w-full md:w-[960px]">
              <p className="font-raleway-medium leading-[1.5] text-[#52504e] text-[16px] text-center md:text-right w-full md:w-[464px]">
                Zori doesn't give generic advice, but offers personal insights based on your natal chart and current life context. 
                <br />
                Through ongoing communication in the chat, Zori becomes not just an astrologer, but a personal guide — a constant source of clarity, emotional support, and direction.
              </p>
              
              {/* Vertical Separator - Hidden on Mobile */}
              <div className="hidden md:flex flex-row items-center self-stretch">
                <div className="h-[144px] relative w-0">
                  <div className="absolute inset-[-0.35%_-0.5px]">
                    <Image
                      src="/images/ui/divider-line.svg"
                      alt=""
                      width={1}
                      height={144}
                      className="block max-w-none size-full"
                    />
                  </div>
                </div>
              </div>
              
              <p className="font-raleway-medium leading-[1.5] text-[#52504e] text-[16px] text-center md:text-left w-full md:w-[464px]">
                Merging ancient astrological wisdom with modern AI to deliver advice that is personal, caring, and relevant to your situation.
                <br />
                Available 24/7, Zori is there through both highs and lows, helping users find meaning in events and confidence in their path.
              </p>
            </div>
          </div>
          
          {/* Mobile Content Block */}
          <div className="block md:hidden w-full">
            <div className="flex flex-col gap-8 items-center px-4 py-8 w-full">
              {/* Title */}
              <div className="font-['Qedysans:Regular',_sans-serif] leading-[1.2] min-w-full not-italic text-[#292827] text-[36px] text-center w-[min-content]">
                <p className="mb-0">Your calm guide</p>
                <p>to self-understanding</p>
              </div>
              
              {/* Description */}
              <div className="flex flex-col gap-2 items-start text-[#292827] text-[16px] text-center w-full">
                <p className="font-['Raleway:Medium',_sans-serif] font-medium leading-[1.5] opacity-80 w-full">
                  Create your natal chart in 30 seconds and get precise insights, daily calendar, and access to your astrologer anytime.
                </p>
                <p className="font-['JetBrains_Mono:Regular',_sans-serif] font-normal leading-[1.2] uppercase w-full">
                  Powered by NASA JPL and Swiss Ephemeris
                </p>
              </div>
              
              {/* Button */}
              <div className="flex gap-2.5 h-[55px] items-center justify-center overflow-clip px-8 py-4 rounded-[1000px] w-[200px] relative">
                <div className="absolute h-[116px] left-[calc(50%+0.5px)] top-[calc(50%+0.5px)] translate-x-[-50%] translate-y-[-50%] w-[367px]">
                  <div className="absolute inset-0 overflow-hidden pointer-events-none">
                    <Image
                      src="/images/backgrounds/button-bg.png"
                      alt=""
                      fill
                      className="absolute h-full left-[0.05%] max-w-none top-0 w-[99.91%]"
                    />
                  </div>
                </div>
                <div className="flex flex-col font-['Qedysans:Regular',_sans-serif] justify-center leading-[0] not-italic text-[#fffbf9] text-[24px] text-nowrap relative z-10">
                  <p className="leading-[1.2] whitespace-pre">Try Zori</p>
                </div>
              </div>
            </div>
          </div>

          {/* Desktop Image Cards */}
          <div className="hidden md:flex flex-row gap-8 items-center w-[1152px]">
            {/* Card 1 - Desktop */}
            <div className="bg-[rgba(38,36,35,0.85)] rounded-2xl overflow-hidden p-4 relative h-[240px] w-[363px] shadow-[-4px_4px_16px_0px_rgba(0,0,0,0.25)]">
              <div className="absolute h-[648px] left-[calc(50%+0.504px)] top-[calc(50%-105px)] translate-x-[-50%] translate-y-[-50%] w-[363.165px]">
                <Image
                  src="/images/backgrounds/about-image-1.png"
                  alt=""
                  fill
                  className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full"
                />
              </div>
              <div className="absolute h-[648px] left-[calc(50%+0.504px)] top-[calc(50%-105px)] translate-x-[-50%] translate-y-[-50%] w-[363.165px]">
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                  <Image
                    src="/images/backgrounds/about-image-2.png"
                    alt=""
                    width={965}
                    height={648}
                    className="absolute h-[111.72%] left-[-158.59%] max-w-none top-[41.57%] w-[265.54%]"
                  />
                </div>
              </div>
              <div className="absolute h-[1901px] left-[calc(50%+362.5px)] top-[calc(50%-40.5px)] translate-x-[-50%] translate-y-[-50%] w-[1768px]">
                <Image
                  src="/images/backgrounds/about-image-3.png"
                  alt=""
                  fill
                  className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full"
                />
              </div>
            </div>
            
            {/* Card 2 - Desktop */}
            <div className="bg-[rgba(38,36,35,0.85)] rounded-2xl overflow-hidden p-4 relative h-[240px] w-[363px] shadow-[-4px_4px_16px_0px_rgba(0,0,0,0.25)]">
              <div className="absolute h-[1901px] left-[calc(50%-0.164px)] top-[calc(50%-59.5px)] translate-x-[-50%] translate-y-[-50%] w-[1768px]">
                <Image
                  src="/images/backgrounds/about-image-3.png"
                  alt=""
                  fill
                  className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full"
                />
              </div>
              <div className="absolute left-[calc(50%+0.836px)] size-[120px] top-1/2 translate-x-[-50%] translate-y-[-50%]">
                <Image
                  src="/images/icons/phone-icon.svg"
                  alt=""
                  width={120}
                  height={120}
                  className="block max-w-none size-full"
                />
              </div>
            </div>
            
            {/* Card 3 - Desktop */}
            <div className="bg-[rgba(38,36,35,0.85)] rounded-2xl overflow-hidden p-4 relative h-[240px] w-[362px] shadow-[-4px_4px_16px_0px_rgba(0,0,0,0.25)]">
              <div className="absolute h-[1901px] left-[calc(50%-363.336px)] top-[calc(50%-40.5px)] translate-x-[-50%] translate-y-[-50%] w-[1768px]">
                <Image
                  src="/images/backgrounds/about-image-3.png"
                  alt=""
                  fill
                  className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}