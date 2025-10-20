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
      <div className="border-t border-[rgba(123,120,119,0.25)] rounded-t-[32px] p-8 w-full cursor-pointer transition-colors" style={{boxShadow: '0 -2px 4px rgba(0, 0, 0, 0.1)'}} onClick={() => toggleSection(1)}>
        <div className="flex gap-4 items-start">
          <span className="font-jetbrains-mono text-[20px] font-normal text-[#292827] uppercase">01</span>
          <span className="font-jetbrains-mono text-[48px] font-normal text-[#292827] uppercase">Natal chart</span>
        </div>
      </div>
      
      <div className={`transition-all duration-500 ease-in-out ${
        activeSections.has(1) ? 'max-h-[800px] opacity-100' : 'max-h-0 opacity-0'
      }`}>
        <div className="bg-[#f8f2ec] py-16 pb-30">
          <div className="flex items-center justify-between px-[200px] w-full relative">
            <div className="flex gap-2.5 h-[499px] items-center w-[238px] relative">
              <div className="absolute h-[548px] left-[-68px] top-[-9.66px] w-[307.5px]">
                <Image
                  src="/images/phones/phone-1.png"
                  alt=""
                  fill
                  className="object-cover"
                />
              </div>
            </div>
            <div className="flex flex-col gap-4 items-start w-[340px]">
              <p className="font-qedysans text-[36px] leading-[1.2] text-[#292827] text-center whitespace-pre">
                Your inner sky map
              </p>
              <p className="font-raleway-medium text-[16px] font-medium leading-[1.5] text-[#52504e] min-w-full w-[min-content]">
                Discover your strengths and shadow sides, the core patterns that define your reactions, relationships, and life path, including what you might not have noticed about yourself yet.
              </p>
            </div>
            {/* Decorative elements - Exact Figma positioning */}
            <div className="absolute left-[911px] top-[119px] w-[255px] h-[255px]">
              <Image
                src="/images/planets/uranus.png"
                alt=""
                width={255}
                height={255}
                className="object-cover"
              />
            </div>
            <div className="absolute left-[-21px] top-[-89px] w-[255px] h-[255px]">
              <Image
                src="/images/planets/moon.png"
                alt=""
                width={255}
                height={255}
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
      
      {/* Chat */}
      <div className="-mt-13 border-t border-[rgba(123,120,119,0.25)] rounded-t-[16px] p-8 w-full cursor-pointer transition-colors" style={{boxShadow: '0 -2px 4px rgba(0, 0, 0, 0.1)'}} onClick={() => toggleSection(2)}>
        <div className="flex gap-4 items-start">
          <span className="font-jetbrains-mono text-[20px] font-normal text-[#292827] uppercase">02</span>
          <span className="font-jetbrains-mono text-[48px] font-normal text-[#292827] uppercase">chat</span>
        </div>
      </div>
      
      <div className={`transition-all duration-500 ease-in-out ${
        activeSections.has(2) ? 'max-h-[800px] opacity-100' : 'max-h-0 opacity-0'
      }`}>
        <div className="bg-[#f8f2ec] py-16 pb-30">
          <div className="flex items-center justify-between px-[200px] w-full relative">
            {/* Decorative elements - Exact Figma positioning */}
            <div className="absolute left-[115px] top-[285px] w-[255px] h-[255px]">
              <Image
                src="/images/planets/mars.png"
                alt=""
                width={255}
                height={255}
                className="object-cover"
              />
            </div>
            <div className="absolute left-[926px] top-[-165px] w-[255px] h-[255px]">
              <Image
                src="/images/planets/mercury.png"
                alt=""
                width={255}
                height={255}
                className="object-cover"
              />
            </div>
            <div className="flex flex-col gap-4 items-start w-[340px]">
              <p className="font-qedysans text-[36px] leading-[1.2] text-[#292827] text-center whitespace-pre">
                Astrology that talks back
              </p>
              <p className="font-raleway-medium text-[16px] font-medium leading-[1.5] text-[#52504e] min-w-full w-[min-content]">
                Ask Zori what's worrying you right now and get a grounded, personal answer based on your natal chart and current transits.
              </p>
            </div>
            <div className="flex gap-2.5 h-[499px] items-center w-[238px] relative">
            <div className="absolute h-[548px] left-[-22px] top-[14.5px] w-[414px]">
              <Image
                src="/images/phones/phone-2.png"
                alt=""
                fill
                className="object-cover"
              />
            </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Calendar */}
      <div className="-mt-13 border-t bg-[#f8f2ec] border-[rgba(123,120,119,0.25)] rounded-t-[16px] p-8 w-full cursor-pointer transition-colors" style={{boxShadow: '0 -2px 4px rgba(0, 0, 0, 0.1)'}} onClick={() => toggleSection(3)}>
        <div className="flex gap-4 items-start">
          <span className="font-jetbrains-mono text-[20px] font-normal text-[#292827] uppercase">03</span>
          <span className="font-jetbrains-mono text-[48px] font-normal text-[#292827] uppercase">Calendar</span>
        </div>
      </div>
      
      <div className={`transition-all duration-500 ease-in-out ${
        activeSections.has(3) ? 'max-h-[800px] opacity-100' : 'max-h-0 opacity-0'
      }`}>
        <div className="bg-[#f8f2ec] py-16 pb-30">
          <div className="flex items-center justify-between px-[200px] w-full relative">
            <div className="flex gap-2.5 h-[499px] items-center w-[238px] relative">
              <div className="absolute h-[548px] left-[-65px] top-[-10px] w-[307.5px]">
                <Image
                  src="/images/phones/phone-3.png"
                  alt=""
                  fill
                  className="object-cover"
                />
              </div>
            </div>
            <div className="flex flex-col gap-4 items-start w-[340px]">
              <p className="font-qedysans text-[36px] leading-[1.2] text-[#292827] text-center whitespace-pre">
                Personal Cosmic Planner
              </p>
              <p className="font-raleway-medium text-[16px] font-medium leading-[1.5] text-[#52504e] min-w-full w-[min-content]">
                Plan in sync with the stars to know which days are best for action and which for rest, what the current period is signaling, and when to schedule important events to stay balanced and avoid chaos.
              </p>
            </div>
            {/* Decorative elements - Exact Figma positioning */}
            <div className="absolute left-[739px] top-[-74px] w-[255px] h-[255px]">
              <Image
                src="/images/planets/saturn.png"
                alt=""
                width={255}
                height={255}
                className="object-cover"
              />
            </div>
            <div className="absolute left-[420px] top-[285px] w-[255px] h-[255px]">
              <Image
                src="/images/planets/neptune.png"
                alt=""
                width={255}
                height={255}
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
      
      {/* Natal Interpretations */}
      <div className="-mt-13 bg-[#f8f2ec] border-t border-[rgba(123,120,119,0.25)] rounded-t-[16px] p-8 w-full cursor-pointer transition-colors" style={{boxShadow: '0 -2px 4px rgba(0, 0, 0, 0.1)'}} onClick={() => toggleSection(4)}>
        <div className="flex gap-4 items-start">
          <span className="font-jetbrains-mono text-[20px] font-normal text-[#292827] uppercase">04</span>
          <span className="font-jetbrains-mono text-[48px] font-normal text-[#292827] uppercase">natal interpretations</span>
        </div>
      </div>
      
      <div className={`overflow-hidden transition-all duration-500 ease-in-out ${
        activeSections.has(4) ? 'max-h-[800px] opacity-100' : 'max-h-0 opacity-0'
      }`}>
        <div className="bg-[#f8f2ec] py-16 pb-30">
          <div className="flex items-center justify-between pl-[150px] px-16 pr-[200px] w-full relative">
            <div className="flex flex-col gap-4 items-start w-[340px]">
              <p className="font-qedysans text-[36px] leading-[1.2] text-[#292827] text-center whitespace-pre">
                Your Star Mirror
              </p>
              <p className="font-raleway-medium text-[16px] font-medium leading-[1.5] text-[#52504e] min-w-full w-[min-content]">
                Zori reveals the light and dark sides of your personality across all 12 houses, helping to understand your nature more deeply and turn contrasts into harmony.
              </p>
            </div>
            <div className="flex gap-2.5 h-[499px] items-center w-[363px] relative">
              <div className="absolute h-[548px] left-[-67px] top-[-10px] w-[431px]">
                <Image
                  src="/images/phones/phone-4.png"
                  alt=""
                  fill
                  className="object-cover"
                />
              </div>
            </div>
            {/* Decorative elements - Exact Figma positioning */}
            <div className="absolute left-[918px] top-[252px] w-[255px] h-[255px]">
              <Image
                src="/images/planets/pluto.png"
                alt=""
                width={255}
                height={255}
                className="object-cover"
              />
            </div>
            <div className="absolute left-[321px] top-[-62px] w-[255px] h-[255px]">
              <Image
                src="/images/planets/jupiter.png"
                alt=""
                width={255}
                height={255}
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}