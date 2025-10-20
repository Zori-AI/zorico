import Image from 'next/image';

export function AboutSection() {
  return (
    <div className="bg-[#f8f2ec] py-16">
      <div className="container mx-auto px-4 md:px-16">
        <div className="flex flex-col gap-8 items-center justify-center mx-auto">
          {/* Title and Text - Exact Figma Layout */}
          <div className="flex flex-col gap-4 items-center">
            <h2 className="font-qedysans leading-[1.2] text-[#292827] text-[36px] text-center w-[255px]">
              About Zori
            </h2>
            
            {/* Text Content - Exact Figma Layout */}
            <div className="flex flex-col md:flex-row gap-4 items-center justify-center w-[960px]">
              <p className="font-raleway-medium leading-[1.5] text-[#52504e] text-[16px] text-right w-[464px]">
                Zori doesn't give generic advice, but offers personal insights based on your natal chart and current life context. 
                <br />
                Through ongoing communication in the chat, Zori becomes not just an astrologer, but a personal guide — a constant source of clarity, emotional support, and direction.
              </p>
              
              {/* Vertical Separator - Exact Figma Layout */}
              <div className="flex flex-row items-center self-stretch">
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
              
              <p className="font-raleway-medium leading-[1.5] text-[#52504e] text-[16px] w-[464px]">
                Merging ancient astrological wisdom with modern AI to deliver advice that is personal, caring, and relevant to your situation.
                <br />
                Available 24/7, Zori is there through both highs and lows, helping users find meaning in events and confidence in their path.
              </p>
            </div>
          </div>
          
          {/* Image Cards - Exact Figma Layout */}
          <div className="flex gap-8 items-center w-[1152px]">
            {/* Card 1 - Exact Figma Dimensions */}
            <div className="backdrop-blur-[1.443px] backdrop-filter bg-[rgba(38,36,35,0.85)] rounded-2xl overflow-hidden p-4 relative h-[240px] w-[363px]">
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
            
            {/* Card 2 - Exact Figma Dimensions */}
            <div className="backdrop-blur-[1.443px] backdrop-filter bg-[rgba(38,36,35,0.85)] rounded-2xl overflow-hidden p-4 relative h-[240px] w-[363px]">
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
            
            {/* Card 3 - Exact Figma Dimensions */}
            <div className="backdrop-blur-[1.443px] backdrop-filter bg-[rgba(38,36,35,0.85)] rounded-2xl overflow-hidden p-4 relative h-[240px] w-[362px]">
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