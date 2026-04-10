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
      {/* Natal chart */}
      <div className="border-t border-[rgba(123,120,119,0.25)] rounded-t-[16px] md:rounded-t-[32px] p-4 md:p-8 w-full cursor-pointer transition-colors" style={{boxShadow: '0 -8px 16px 0 rgba(0, 0, 0, 0.05)'}} onClick={() => toggleSection(1)}>
        <div className="flex gap-2 md:gap-4 items-start">
          <span className="font-jetbrains-mono text-[16px] md:text-[20px] font-normal text-[#292827] uppercase">01</span>
          <span className="font-jetbrains-mono text-[24px] md:text-[48px] font-normal text-[#292827] uppercase">Natal chart</span>
        </div>
      </div>

      <div className={`transition-all duration-500 ease-in-out ${
        activeSections.has(1) ? 'max-h-[800px] opacity-100' : 'max-h-0 pointer-events-none opacity-0'
      }`}>
        <div className="bg-[#f8f2ec] py-0 mb-10 md:mb-[100px] lg:py-16 lg:mb-[20px]">
          <div className="flex flex-col md:flex-row items-center justify-between px-4 lg:px-[120px] xl:px-[200px] w-full relative ">
            <div className="flex gap-2.5 relative order-1 md:order-1">
              <div className="min-w-[172px] max-w-[233px] px-[18%] md:px-0 md:max-w-[80%] flex justify-center items-center">
                <Image
                  src="/images/phones/phone-1.png"
                  alt="Phone showing natal chart interface"
                  width={307}
                  height={548}
                  priority
                />
              </div>
              {/* Decorative elements - Mobile responsive */}
              <div className="-right-[19%] -bottom-[-10%] w-[100px] h-[100px] md:w-[150px] md:h-[150px]   md:block absolute md:top-[60%] md:left-[200%]  lg:left-[230%] xl:left-[235%] lg:top-[109px] lg:w-[255px] lg:h-[255px]">
                <Image
                  src="/images/planets/uranus.png"
                  alt="Uranus planet decoration"
                  width={255}
                  height={255}
                  className="object-cover"
                  loading="lazy"
                />
              </div>
              <div className="-left-[14%] top-[-7%] w-[100px] h-[100px] md:w-[150px] md:h-[150px] md:left-[-16%] md:top-[-20%] md:block absolute lg:left-[-55%] lg:top-[-89px] lg:w-[255px] lg:h-[255px]">
                <Image
                  src="/images/planets/moon.png"
                  alt="Moon planet decoration"
                  width={255}
                  height={255}
                  className="object-cover "
                  loading="lazy"
                />
              </div>
            </div>
            <div className="flex flex-col gap-4 items-center md:items-start w-full md:w-[340px] order-2 md:order-2">
              <p className="font-qedysans text-[24px] md:text-[36px] leading-[1.2] w-full text-[#292827] text-left whitespace-pre">
                Your inner sky map
              </p>
              <p className="font-raleway-medium text-[16px] font-medium leading-[1.5] text-[#52504e] text-left">
                Discover your strengths and shadow sides, the core patterns that define your reactions, relationships, and life path, including what you might not have noticed about yourself yet.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Chat */}
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
            {/* Decorative elements - Mobile responsive */}
            <div className="absolute left-[1%] top-[2%] w-[100px] h-[100px] md:h-[150px] md:w-[150px] md:left-[30px] md:top-[325px] lg:left-[0px] lg:top-[285px] xl:left-[115px] xl:top-[285px] lg:w-[255px] lg:h-[255px]">
              <Image
                src="/images/planets/mars.png"
                alt="Mars planet decoration"
                width={255}
                height={255}
                className="object-cover"
                loading="lazy"
              />
            </div>
            <div className="absolute left-[72%] top-[-90px] w-[100px] h-[100px] md:h-[150px] md:w-[150px] md:left-[620px] md:top-[-125px] lg:left-[816px] lg:top-[-185px] xl:left-[926px] xl:top-[-165px] lg:w-[255px] lg:h-[255px]">
              <Image
                src="/images/planets/mercury.png"
                alt="Mercury planet decoration"
                width={255}
                height={255}
                className="object-cover"
                loading="lazy"
              />
            </div>
            <div className="flex flex-col gap-4 items-center md:items-start w-full md:w-[340px] order-2 md:order-1">
              <p className="font-qedysans text-[24px] md:text-[36px] leading-[1.2] text-[#292827] w-full text-left whitespace-pre">
                Astrology that talks back
              </p>
              <p className="font-raleway-medium text-[16px] font-medium leading-[1.5] text-[#52504e] text-left">
                Ask Zori what's worrying you right now and get a grounded, personal answer based on your natal chart and current transits.
              </p>
            </div>
            <div className="flex gap-2.5 h-[280px] md:h-[499px] items-center relative order-1 md:order-2">
            <div className="flex w-[232px] md:w-[330px] lg:w-[304px] xl:w-[414px]">
              <Image
                src="/images/phones/phone-2.png"
                alt="Phone showing chat interface"
                width={414}
                height={499}
                priority
          
              />
            </div>
            </div>
          </div>
        </div>
      </div>

      {/* Calendar */}
      <div className="-mt-6 md:-mt-13 border-t bg-[#f8f2ec] border-[rgba(123,120,119,0.25)] rounded-t-[16px] p-4 md:p-8 w-full cursor-pointer transition-colors" onClick={() => toggleSection(3)} style={{boxShadow: '0 -8px 16px 0 rgba(0, 0, 0, 0.05)'}}>
        <div className="flex gap-2 md:gap-4 items-start">
          <span className="font-jetbrains-mono text-[16px] md:text-[20px] font-normal text-[#292827] uppercase">03</span>
          <span className="font-jetbrains-mono text-[24px] md:text-[48px] font-normal text-[#292827] uppercase">Calendar</span>
        </div>
      </div>

      <div className={`transition-all duration-500 ease-in-out ${
        activeSections.has(3) ? 'max-h-[800px] opacity-100' : 'max-h-0 pointer-events-none opacity-0'
      }`}>
        <div className="bg-[#f8f2ec] py-0 pt-4 mb-10 md:mb-[100px] lg:py-16 lg:mb-[20px]">
          <div className="flex flex-col md:flex-row items-center justify-between px-4 md:px-[64px] lg:px-[100px] xl:px-[200px] xl:pl-[133px] w-full relative gap-6">
            <div className="flex gap-2.5 h-[280px] md:h-[499px] items-center relative order-1 md:order-1">
              <div className="max-w-[172px] md:max-w-[240px] xl:w-[306px] xl:h-[547px]">
                <Image
                  src="/images/phones/phone-3.png"
                  alt="Phone showing calendar interface"
                  width={306}
                  height={547}
                  priority
                />
              </div>
            </div>
            <div className="flex flex-col gap-4 items-center md:items-start w-full md:w-[340px] order-2 md:order-2">
              <p className="font-qedysans text-[24px] md:text-[36px] leading-[1.2] text-[#292827] text-left whitespace-pre w-full">
                Personal Cosmic Planner
              </p>
              <p className="font-raleway-medium text-[16px] font-medium leading-[1.5] text-[#52504e] text-left">
                Plan in sync with the stars to know which days are best for action and which for rest, what the current period is signaling, and when to schedule important events to stay balanced and avoid chaos.
              </p>
            </div>
            {/* Decorative elements - Mobile responsive */}
            <div className="absolute left-[0%] top-[8%] w-[100px] h-[100px] md:h-[150px] md:w-[150px] md:left-[539px] md:top-[-24px] lg:left-[739px] lg:top-[-74px] lg:w-[255px] lg:h-[255px]">
              <Image
                src="/images/planets/saturn.png"
                alt="Saturn planet decoration"
                width={255}
                height={255}
                className="object-cover"
                loading="lazy"
              />
            </div>
            <div className="absolute left-[64%] top-[-18%] w-[100px] h-[100px] md:h-[150px] md:w-[150px] md:left-[350px] md:top-[325px] lg:left-[420px] lg:top-[285px] lg:w-[255px] lg:h-[255px]">
              <Image
                src="/images/planets/neptune.png"
                alt="Neptune planet decoration"
                width={255}
                height={255}
                className="object-cover"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Natal Interpretations */}
      <div className="-mt-6 md:-mt-13 bg-[#f8f2ec] border-t border-[rgba(123,120,119,0.25)] rounded-t-[16px] p-4 md:p-8 w-full cursor-pointer transition-colors" style={{boxShadow: '0 -8px 16px 0 rgba(0, 0, 0, 0.05)'}} onClick={() => toggleSection(4)}>
        <div className="flex gap-2 md:gap-4 items-start">
          <span className="font-jetbrains-mono text-[16px] md:text-[20px] font-normal text-[#292827] uppercase">04</span>
          <span className="font-jetbrains-mono text-[24px] md:text-[48px] font-normal text-[#292827] uppercase">natal interpretations</span>
        </div>
      </div>

      <div className={`transition-all duration-500 ease-in-out ${
        activeSections.has(4) ? 'max-h-[800px] opacity-100' : 'max-h-0 pointer-events-none opacity-0'
      }`}>
        <div className="bg-[#f8f2ec] py-0 mb-10 md:mb-[100px] lg:py-16 lg:mb-[20px]">
          <div className="flex flex-col md:flex-row items-center justify-between px-4 md:px-[64px] lg:px-[100px] xl:px-[200px] xl:pl-[133px] w-full relative gap-6">
            <div className="flex flex-col gap-4 items-center md:items-start w-full md:w-[340px] order-2 md:order-1">
              <p className="font-qedysans text-[24px] md:text-[36px] leading-[1.2] text-[#292827] w-full text-left whitespace-pre">
                Your Star Mirror
              </p>
              <p className="font-raleway-medium text-[16px] font-medium leading-[1.5] text-[#52504e] text-left">
                Zori reveals the light and dark sides of your personality across all 12 houses, helping to understand your nature more deeply and turn contrasts into harmony.
              </p>
            </div>
            <div className="flex gap-2.5 h-[280px] md:h-[499px] items-center relative order-1 md:order-2">
              <div className="max-w-[203px] md:max-w-[330px] lg:max-w-[304px] xl:max-w-[431px]">
                <Image
                  src="/images/phones/phone-4.png"
                  alt="Phone showing natal interpretations interface"
                  width={431}
                  height={548}
                  priority
                />
              </div>
            </div>
            {/* Decorative elements - Mobile responsive */}
            <div className="absolute right-[0%] md:right-none top-[-10%] h-[100px] w-[100px] md:left-[82%] md:top-[72%] md:h-[150px] md:w-[150px] lg:left-[818px] lg:top-[252px] xl:left-[918px] xl:top-[252px] xl:left-[718px] xl:top-[252px]">
              <Image
                src="/images/planets/pluto.png"
                alt="Pluto planet decoration"
                width={255}
                height={255}
                className="object-cover"
                loading="lazy"
              />
            </div>
            <div className="absolute left-[0%] md:right-none top-[22%] h-[100px] w-[100px] md:left-[32%] md:top-[2%] md:h-[150px] md:w-[150px] lg:left-[321px] lg:top-[-62px] xl:w-[255px] xl:h-[255px]">
              <Image
                src="/images/planets/jupiter.png"
                alt="Jupiter planet decoration"
                width={255}
                height={255}
                className="object-cover"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Self reflection */}
      <div className="-mt-6 md:-mt-13 border-t border-[rgba(123,120,119,0.25)] rounded-t-[16px] p-4 md:p-8 w-full cursor-pointer transition-colors" style={{boxShadow: '0 -8px 16px 0 rgba(0, 0, 0, 0.05)'}} onClick={() => toggleSection(5)}>
        <div className="flex gap-2 md:gap-4 items-start">
          <span className="font-jetbrains-mono text-[16px] md:text-[20px] font-normal text-[#292827] uppercase">05</span>
          <span className="font-jetbrains-mono text-[24px] md:text-[48px] font-normal text-[#292827] uppercase">Self reflection</span>
        </div>
      </div>

      <div className={`transition-all duration-500 ease-in-out ${
        activeSections.has(5) ? 'max-h-[900px] opacity-100' : 'max-h-0 pointer-events-none opacity-0'
      }`}>
        <div className="bg-[#f8f2ec] py-0 mb-10 md:mb-[100px] lg:py-16 lg:mb-[20px]">
          <div className="flex flex-col md:flex-row items-center justify-between px-4 lg:px-[120px] xl:px-[200px] w-full relative gap-6">
            <div className="flex gap-2.5 relative order-1 md:order-1 w-full justify-center md:w-auto">
              <div className="flex flex-row items-end justify-center gap-3 sm:gap-4 md:gap-6 px-[4%] md:px-0 max-w-full">
                <div className="flex min-w-0 max-w-[min(46vw,240px)] md:max-w-[220px] justify-center items-center">
                  <Image
                    src="/images/phones/reflection-1.png"
                    alt="Reflection: journal entry screen"
                    width={256}
                    height={784}
                    className="h-auto w-full object-contain max-h-[min(70vh,560px)]"
                    sizes="(max-width: 768px) 46vw, 220px"
                  />
                </div>
                <div className="flex min-w-0 max-w-[min(46vw,240px)] md:max-w-[220px] justify-center items-center">
                  <Image
                    src="/images/phones/reflection-2.png"
                    alt="Reflection: entry saved screen"
                    width={256}
                    height={784}
                    className="h-auto w-full object-contain max-h-[min(70vh,560px)]"
                    sizes="(max-width: 768px) 46vw, 220px"
                  />
                </div>
              </div>
              <div className="absolute -right-[8%] bottom-[5%] w-[100px] h-[100px] md:w-[150px] md:h-[150px] md:right-[-18%] md:bottom-[8%] lg:right-[-25%] lg:bottom-[12%] pointer-events-none">
                <Image
                  src="/images/planets/moon.png"
                  alt=""
                  width={255}
                  height={255}
                  className="object-cover opacity-90"
                  loading="lazy"
                />
              </div>
              <div className="absolute -left-[10%] top-[0%] w-[90px] h-[90px] md:w-[130px] md:h-[130px] md:-left-[20%] md:top-[5%] pointer-events-none">
                <Image
                  src="/images/planets/neptune.png"
                  alt=""
                  width={255}
                  height={255}
                  className="object-cover opacity-90"
                  loading="lazy"
                />
              </div>
            </div>
            <div className="flex flex-col gap-4 items-center md:items-start w-full md:w-[340px] order-2 md:order-2 shrink-0">
              <p className="font-qedysans text-[24px] md:text-[36px] leading-[1.2] text-[#292827] w-full text-left whitespace-pre">
                A quiet space for what matters
              </p>
              <p className="font-raleway-medium text-[16px] font-medium leading-[1.5] text-[#52504e] text-left">
                Write what is on your mind in a simple, private journal. Your reflections stay on your device, with history when you want to look back — and a calm moment of confirmation when you save an entry.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
