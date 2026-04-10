import Image from 'next/image';

export function AboutSection() {
  return (
    <div className="bg-[#f8f2ec] md:py-16">
      <div className="container mx-auto px-4 md:px-16">
        <div className="flex flex-col gap-8 items-center justify-center mx-auto">
          {/* Title and Text */}
          <div className="flex flex-col gap-4 items-center">
            <h2
              id="about-heading"
              className="font-raleway-medium leading-[1.2] tracking-normal text-[#292827] text-[24px] md:text-[36px] text-center w-full md:w-[255px]">
              About Zori
            </h2>

            <div className="flex flex-col md:flex-row items-start justify-center w-full xl:w-[960px]">
              <p
                className="font-raleway-medium leading-[1.5] text-[#52504e] text-[16px] text-left md:text-right w-full xl:w-[464px]">
                Zori doesn&apos;t give generic advice, but offers personal insights based on your natal chart and current
                life context.
                Through ongoing communication in the chat, Zori becomes not just an astrologer, but a personal guide — a
                constant source of clarity, emotional support, and direction.
              </p>

              {/* Vertical Separator - Hidden on Mobile */}
              <div className="md:flex flex-row items-center my-4 md:my-0 md:mx-4 self-stretch">
                <div className="w-full h-[1px] md:min-w-[1px] md:h-full md:bg-[#D9D9D9] relative w-0">

                  <div className="absolute inset-[-0.35%_-0.5px]">
                    <Image
                      src="/images/ui/divider-line.svg"
                      alt=""
                      width={1}
                      height={144}
                      className="block max-w-none size-full"
                      loading="lazy"
                    />
                  </div>
                </div>
              </div>

              <p
                className="font-raleway-medium m-0 leading-[1.5] text-[#52504e] text-[16px] text-left md:text-left w-full xl:w-[464px]">
                Merging ancient astrological wisdom with modern AI to deliver advice that is personal, caring, and
                relevant to your situation.
                <br />
                Available 24/7, Zori is there through both highs and lows, helping users find meaning in events and
                confidence in their path.
              </p>
            </div>
          </div>

          {/* Mobile Content Block */}
          <div className="block md:hidden w-full">
            <div className="">
              <div
                className="w-full h-auto rounded-2xl"
                style={{
                  boxShadow: "-4px 4px 16px 0px #00000040"
                }}>
                  <Image
                    src="/images/backgrounds/about-mobile-moon.png"
                    alt=""
                    width={400}
                    height={240}
                    sizes="100vw"
                    className="h-auto w-full object-contain"
                    priority
                  />
              </div>
            </div>
          </div>

          {/* Desktop Image Cards */}
          <div className="hidden md:flex flex-row gap-8 w-full items-center">
            <div className="flex-1 min-w-0">
              <Image
                src="/images/backgrounds/about-image-1.png"
                alt=""
                width={363}
                height={240}
                sizes="(max-width: 1280px) 33vw, 363px"
                className="h-auto w-full rounded-2xl shadow-[-4px_4px_16px_0px_rgba(0,0,0,0.25)]"
                loading="lazy"
              />
            </div>
            <div className="flex-1 min-w-0">
              <Image
                src="/images/backgrounds/about-image-2.png"
                alt=""
                width={386}
                height={272}
                sizes="(max-width: 1280px) 33vw, 386px"
                className="h-auto w-full rounded-2xl shadow-[-4px_4px_16px_0px_rgba(0,0,0,0.25)]"
                loading="lazy"
              />
            </div>
            <div className="flex-1 min-w-0">
              <Image
                src="/images/backgrounds/about-image-3.png"
                alt=""
                width={362}
                height={240}
                sizes="(max-width: 1280px) 33vw, 362px"
                className="h-auto w-full rounded-2xl shadow-[-4px_4px_16px_0px_rgba(0,0,0,0.25)]"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
