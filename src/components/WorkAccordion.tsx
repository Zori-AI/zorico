'use client';

import Image from 'next/image';
import { useState } from 'react';

export function WorkAccordion() {
  const [activeSections, setActiveSections] = useState<Set<number>>(new Set([1]));

  const toggleSection = (sectionNumber: number) => {
    setActiveSections(prev => {
      const newSet = new Set(prev);
      if (newSet.has(sectionNumber)) {
        newSet.delete(sectionNumber);
      } else {
        newSet.add(sectionNumber);
      }
      return newSet;
    });
  };

  return (
    <div className="flex flex-col w-full">
      {/* 01 Natal chart */}
      <div className="border-t border-[rgba(123,120,119,0.25)] rounded-t-[16px] md:rounded-t-[32px] p-4 md:p-8 w-full transition-colors" style={{boxShadow: '0 -8px 16px 0 rgba(0, 0, 0, 0.05)'}}>
        <div className="flex gap-2 md:gap-4 items-start">
          <span className="font-jetbrains-mono text-[16px] md:text-[20px] font-normal text-[#292827] uppercase">01</span>
          <span className="font-jetbrains-mono text-[24px] md:text-[48px] font-normal text-[#292827] uppercase">Natal chart</span>
        </div>
      </div>

      <div>
        <div className="bg-[#f8f2ec] py-0 mb-10 md:mb-[100px] lg:py-16 lg:mb-[20px]">
          <div className="flex flex-col md:flex-row items-center justify-between px-4 lg:px-[120px] xl:px-[200px] w-full relative ">
            <div className="flex gap-2.5 relative order-1 md:order-1">
              <div className="flex w-full max-w-[240px] justify-center sm:max-w-[280px] md:max-w-[324px]">
                <Image
                  src="/images/phones/natal-chart.png"
                  alt="Phone showing natal chart interface"
                  width={324}
                  height={579}
                  sizes="(max-width: 640px) 240px, (max-width: 768px) 280px, 324px"
                  className="h-auto w-full object-contain"
                  priority
                />
              </div>
              <div className="pointer-events-none absolute -right-[19%] -bottom-[-10%] z-0 w-[100px] h-[100px] md:right-auto md:bottom-auto md:left-[200%] md:top-[60%] md:w-[150px] md:h-[150px] md:translate-x-6 lg:left-[230%] lg:top-[109px] lg:translate-x-10 lg:w-[255px] lg:h-[255px] xl:left-[240%] xl:translate-x-12">
                <Image
                  src="/images/planets/uranus.png"
                  alt="Uranus planet decoration"
                  width={255}
                  height={255}
                  sizes="(max-width: 768px) 100px, (max-width: 1024px) 150px, 255px"
                  className="h-full w-full object-cover"
                  loading="lazy"
                />
              </div>
              <div className="pointer-events-none absolute -left-[14%] top-[-7%] z-0 w-[100px] h-[100px] md:left-[-16%] md:top-[-20%] md:w-[150px] md:h-[150px] lg:left-[-55%] lg:top-[-89px] lg:w-[255px] lg:h-[255px]">
                <Image
                  src="/images/planets/moon.png"
                  alt="Moon planet decoration"
                  width={255}
                  height={255}
                  sizes="(max-width: 768px) 100px, (max-width: 1024px) 150px, 255px"
                  className="h-full w-full object-cover"
                  loading="lazy"
                />
              </div>
            </div>
            <div className="relative z-10 flex flex-col gap-4 items-center md:items-start w-full md:w-[340px] order-2 md:order-2 md:pr-2 lg:pr-4">
              <p className="font-raleway-medium tracking-normal text-[24px] md:text-[36px] leading-[1.2] w-full text-[#292827] text-left whitespace-pre">
                Your inner sky map
              </p>
              <p className="font-raleway-medium text-[16px] font-medium leading-[1.5] text-[#52504e] text-left">
                Discover your strengths and shadow sides, the core patterns that define your reactions, relationships, and life path, including what you might not have noticed about yourself yet.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* 02 Chat */}
      <div className="-mt-6 md:-mt-13 border-t border-[rgba(123,120,119,0.25)] rounded-t-[16px] p-4 md:p-8 w-full cursor-pointer transition-colors" style={{boxShadow: '0 -8px 16px 0 rgba(0, 0, 0, 0.05)'}} onClick={() => toggleSection(2)}>
        <div className="flex gap-2 md:gap-4 items-start">
          <span className="font-jetbrains-mono text-[16px] md:text-[20px] font-normal text-[#292827] uppercase">02</span>
          <span className="font-jetbrains-mono text-[24px] md:text-[48px] font-normal text-[#292827] uppercase">chat</span>
        </div>
      </div>

      <div className={`transition-all duration-500 ease-in-out ${
        activeSections.has(2) ? 'max-h-[800px] opacity-100' : 'max-h-0 pointer-events-none opacity-0'
      }`}>
       <div className="bg-[#f8f2ec] py-0 mb-10 md:mb-[100px] lg:py-16 lg:mb-[20px]">
          <div className="flex flex-col md:flex-row items-center justify-between px-4 md:px-[64px] xl:px-[200px] xl:pr-[134px] w-full relative gap-6">
            <div className="absolute left-[1%] top-[2%] w-[100px] h-[100px] md:h-[150px] md:w-[150px] md:left-[30px] md:top-[325px] lg:left-[0px] lg:top-[285px] xl:left-[115px] xl:top-[285px] lg:w-[255px] lg:h-[255px]">
              <Image
                src="/images/planets/mars.png"
                alt="Mars planet decoration"
                width={255}
                height={255}
                sizes="(max-width: 768px) 100px, (max-width: 1024px) 150px, 255px"
                className="h-full w-full object-cover"
                loading="lazy"
              />
            </div>
            <div className="absolute left-[72%] top-[-90px] w-[100px] h-[100px] md:h-[150px] md:w-[150px] md:left-[620px] md:top-[-125px] lg:left-[816px] lg:top-[-185px] xl:left-[926px] xl:top-[-165px] lg:w-[255px] lg:h-[255px]">
              <Image
                src="/images/planets/mercury.png"
                alt="Mercury planet decoration"
                width={255}
                height={255}
                sizes="(max-width: 768px) 100px, (max-width: 1024px) 150px, 255px"
                className="h-full w-full object-cover"
                loading="lazy"
              />
            </div>
            <div className="flex flex-col gap-4 items-center md:items-start w-full md:w-[340px] order-2 md:order-1">
              <p className="font-raleway-medium tracking-normal text-[24px] md:text-[36px] leading-[1.2] text-[#292827] w-full text-left">
                Astrology that
                <br />
                talks back
              </p>
              <p className="font-raleway-medium text-[16px] font-medium leading-[1.5] text-[#52504e] text-left">
                Ask Zori what&apos;s worrying you right now and get a grounded, personal answer based on your natal chart and current transits.
              </p>
            </div>
            <div className="flex gap-2.5 items-center relative order-1 md:order-2">
              <div className="flex w-full max-w-[360px] justify-center sm:max-w-[420px] md:max-w-[487px]">
                <Image
                  src="/images/phones/phone-2.png"
                  alt="Phone showing chat interface"
                  width={487}
                  height={579}
                  sizes="(max-width: 640px) 360px, (max-width: 768px) 420px, 487px"
                  className="h-auto w-full object-contain"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 03 Self reflection */}
      <div className="-mt-6 md:-mt-13 border-t border-[rgba(123,120,119,0.25)] rounded-t-[16px] p-4 md:p-8 w-full cursor-pointer transition-colors" style={{boxShadow: '0 -8px 16px 0 rgba(0, 0, 0, 0.05)'}} onClick={() => toggleSection(3)}>
        <div className="flex gap-2 md:gap-4 items-start">
          <span className="font-jetbrains-mono text-[16px] md:text-[20px] font-normal text-[#292827] uppercase">03</span>
          <span className="font-jetbrains-mono text-[24px] md:text-[48px] font-normal text-[#292827] uppercase">Reflection</span>
        </div>
      </div>

      <div className={`transition-all duration-500 ease-in-out ${
        activeSections.has(3) ? 'max-h-[900px] opacity-100' : 'max-h-0 pointer-events-none opacity-0'
      }`}>
        <div className="bg-[#f8f2ec] py-0 mb-10 md:mb-[100px] lg:py-16 lg:mb-[20px]">
          <div className="flex flex-col md:flex-row items-center justify-between px-4 md:px-[64px] xl:px-[200px] xl:pr-[134px] w-full relative gap-6 md:min-h-[420px]">
            <div className="order-1 flex w-full justify-center md:max-w-[360px] shrink-0">
              <div className="flex w-full max-w-[240px] justify-center sm:max-w-[280px] md:max-w-[324px]">
                <Image
                  src="/images/phones/reflection-phone.png"
                  alt="Reflection: private journal entry on your device"
                  width={324}
                  height={579}
                  sizes="(max-width: 640px) 240px, (max-width: 768px) 280px, 324px"
                  className="h-auto w-full object-contain"
                  priority
                />
              </div>
            </div>
            <div className="order-2 flex w-full flex-col gap-4 items-center md:items-start pt-4 pb-6 text-left md:w-[340px] md:py-0 md:pb-0">
              <p className="font-raleway-medium tracking-normal text-[24px] md:text-[36px] leading-[1.2] text-[#292827] w-full max-w-full">
                Your Cosmic
                <br />
                Reflection Space
              </p>
              <p className="font-raleway-medium text-[16px] font-medium leading-[1.5] text-[#52504e] w-full max-w-full break-words [overflow-wrap:anywhere]">
                Write down what&apos;s on your mind. Zori saves it alongside your astrological context. Over time, patterns emerge: when you feel most creative, why certain weeks feel heavy, what the stars were doing last time you felt this way.
              </p>
            </div>
            {/* Same markup as Chat (02): Mars + Mercury, absolute siblings — no rounded masks, filters, or shadows */}
            <div className="absolute left-[1%] top-[2%] w-[100px] h-[100px] md:h-[150px] md:w-[150px] md:left-[30px] md:top-[325px] lg:left-[0px] lg:top-[285px] xl:left-[115px] xl:top-[285px] lg:w-[255px] lg:h-[255px]">
              <Image
                src="/images/planets/mars.png"
                alt="Mars planet decoration"
                width={255}
                height={255}
                sizes="(max-width: 768px) 100px, (max-width: 1024px) 150px, 255px"
                className="h-full w-full object-cover"
                loading="lazy"
              />
            </div>
            <div className="absolute left-[72%] top-[-90px] w-[100px] h-[100px] md:h-[150px] md:w-[150px] md:left-[620px] md:top-[-125px] lg:left-[816px] lg:top-[-185px] xl:left-[926px] xl:top-[-165px] lg:w-[255px] lg:h-[255px]">
              <Image
                src="/images/planets/mercury.png"
                alt="Mercury planet decoration"
                width={255}
                height={255}
                sizes="(max-width: 768px) 100px, (max-width: 1024px) 150px, 255px"
                className="h-full w-full object-cover"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>

      {/* 04 Calendar */}
      <div className="-mt-6 md:-mt-13 border-t bg-[#f8f2ec] border-[rgba(123,120,119,0.25)] rounded-t-[16px] p-4 md:p-8 w-full cursor-pointer transition-colors" onClick={() => toggleSection(4)} style={{boxShadow: '0 -8px 16px 0 rgba(0, 0, 0, 0.05)'}}>
        <div className="flex gap-2 md:gap-4 items-start">
          <span className="font-jetbrains-mono text-[16px] md:text-[20px] font-normal text-[#292827] uppercase">04</span>
          <span className="font-jetbrains-mono text-[24px] md:text-[48px] font-normal text-[#292827] uppercase">Calendar</span>
        </div>
      </div>

      <div className={`transition-all duration-500 ease-in-out ${
        activeSections.has(4) ? 'max-h-[800px] opacity-100' : 'max-h-0 pointer-events-none opacity-0'
      }`}>
        <div className="bg-[#f8f2ec] py-0 pt-4 mb-10 md:mb-[100px] lg:py-16 lg:mb-[20px]">
          <div className="flex flex-col md:flex-row items-center justify-between px-4 md:px-[64px] lg:px-[100px] xl:px-[200px] xl:pl-[133px] w-full relative gap-6">
            <div className="flex gap-2.5 items-center relative order-1 md:order-1">
              <div className="flex w-full max-w-[240px] justify-center sm:max-w-[280px] md:max-w-[324px]">
                <Image
                  src="/images/phones/calendar-phone.png"
                  alt="Phone showing calendar interface"
                  width={324}
                  height={579}
                  sizes="(max-width: 640px) 240px, (max-width: 768px) 280px, 324px"
                  className="h-auto w-full object-contain"
                  priority
                />
              </div>
            </div>
            <div className="flex flex-col gap-4 items-center md:items-start w-full md:w-[340px] order-2 md:order-2">
              <p className="font-raleway-medium tracking-normal text-[24px] md:text-[36px] leading-[1.2] text-[#292827] text-left whitespace-pre w-full">
                Personal Cosmic Planner
              </p>
              <p className="font-raleway-medium text-[16px] font-medium leading-[1.5] text-[#52504e] text-left">
                Plan your week with the forecast in view: see which days favor action, which call for rest, and how the current sky supports your choices.
              </p>
            </div>
            <div className="absolute left-[0%] top-[8%] w-[100px] h-[100px] md:h-[150px] md:w-[150px] md:left-[539px] md:top-[-24px] lg:left-[739px] lg:top-[-74px] lg:w-[255px] lg:h-[255px]">
              <Image
                src="/images/planets/saturn.png"
                alt="Saturn planet decoration"
                width={255}
                height={255}
                sizes="(max-width: 768px) 100px, (max-width: 1024px) 150px, 255px"
                className="h-full w-full object-cover"
                loading="lazy"
              />
            </div>
            <div className="absolute left-[64%] top-[-18%] w-[100px] h-[100px] md:h-[150px] md:w-[150px] md:left-[350px] md:top-[325px] lg:left-[420px] lg:top-[285px] lg:w-[255px] lg:h-[255px]">
              <Image
                src="/images/planets/neptune.png"
                alt="Neptune planet decoration"
                width={255}
                height={255}
                sizes="(max-width: 768px) 100px, (max-width: 1024px) 150px, 255px"
                className="h-full w-full object-cover"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>

      {/* 05 Natal interpretations */}
      <div className="-mt-6 md:-mt-13 bg-[#f8f2ec] border-t border-[rgba(123,120,119,0.25)] rounded-t-[16px] p-4 md:p-8 w-full cursor-pointer transition-colors" style={{boxShadow: '0 -8px 16px 0 rgba(0, 0, 0, 0.05)'}} onClick={() => toggleSection(5)}>
        <div className="flex gap-2 md:gap-4 items-start">
          <span className="font-jetbrains-mono text-[16px] md:text-[20px] font-normal text-[#292827] uppercase">05</span>
          <span className="font-jetbrains-mono text-[24px] md:text-[48px] font-normal text-[#292827] uppercase">natal interpretations</span>
        </div>
      </div>

      <div className={`transition-all duration-500 ease-in-out ${
        activeSections.has(5) ? 'max-h-[960px] opacity-100' : 'max-h-0 pointer-events-none opacity-0'
      }`}>
        <div className="bg-[#f8f2ec] py-0 mb-10 md:mb-[100px] lg:py-16 lg:mb-[20px]">
          {/* Original landing: copy left, phone right; Jupiter + Pluto as Figma-anchored absolutes (same idea as Calendar 04) */}
          <div className="flex flex-col md:flex-row md:items-center items-center justify-between px-4 md:px-[64px] lg:px-[100px] xl:px-[200px] xl:pl-[133px] w-full relative gap-8 md:gap-6 lg:gap-10 md:min-h-[420px] lg:min-h-[480px]">
            <div className="order-2 md:order-1 flex w-full min-w-0 max-w-[min(100%,420px)] flex-col gap-4 items-center md:items-start md:max-w-[400px] lg:max-w-[420px]">
              <p className="font-raleway-medium tracking-normal text-[24px] md:text-[36px] leading-[1.2] w-full text-left text-[#292827] whitespace-pre">
                Your Star Mirror
              </p>
              <p className="font-raleway-medium text-[16px] font-medium leading-[1.5] text-[#52504e] text-left break-words [overflow-wrap:anywhere]">
                Zori reveals the light and dark sides of your personality across all 12 houses, helping to understand your nature more deeply and turn contrasts into harmony.
              </p>
            </div>
            <div className="relative order-1 md:order-2 flex justify-center md:justify-end shrink-0">
              <div className="flex w-full max-w-[342px] justify-center sm:max-w-[399px] md:max-w-[462px]">
                <Image
                  src="/images/phones/natal-interpretations.png"
                  alt="Natal interpretations: light and shadow house screens"
                  width={462}
                  height={579}
                  sizes="(max-width: 640px) 342px, (max-width: 768px) 399px, 462px"
                  className="relative z-10 h-auto w-full object-contain drop-shadow-[0_12px_32px_rgba(0,0,0,0.08)]"
                  priority
                />
              </div>
            </div>
            <div className="pointer-events-none absolute left-[8%] top-[-6%] h-[100px] w-[100px] md:left-[234px] md:top-[-48px] md:h-[150px] md:w-[150px] lg:left-[321px] lg:top-[-62px] lg:h-[255px] lg:w-[255px]">
              <Image
                src="/images/planets/jupiter.png"
                alt=""
                width={255}
                height={255}
                sizes="(max-width: 768px) 100px, (max-width: 1024px) 150px, 255px"
                className="h-full w-full object-cover"
                loading="lazy"
              />
            </div>
            <div className="pointer-events-none absolute left-[52%] top-[38%] h-[100px] w-[100px] md:left-[580px] md:top-[200px] md:h-[150px] md:w-[150px] lg:left-[918px] lg:top-[252px] lg:h-[255px] lg:w-[255px]">
              <Image
                src="/images/planets/pluto.png"
                alt=""
                width={255}
                height={255}
                sizes="(max-width: 768px) 100px, (max-width: 1024px) 150px, 255px"
                className="h-full w-full object-cover"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
