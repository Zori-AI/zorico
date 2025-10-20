'use client';

import Image from 'next/image';

interface WorkSectionCardProps {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  phoneImage: string;
  planets: Array<{
    src: string;
    alt: string;
    className: string;
  }>;
  isActive: boolean;
  onToggle: () => void;
  isFirst?: boolean;
}

export function WorkSectionCard({
  id,
  title,
  subtitle,
  description,
  phoneImage,
  planets,
  isActive,
  onToggle,
  isFirst = false
}: WorkSectionCardProps) {
  return (
    <div className="w-full">
      {/* Card Header */}
      <div 
        className={`border-t border-[rgba(123,120,119,0.25)] ${
          isFirst ? 'rounded-t-[32px]' : 'rounded-t-[16px]'
        } p-8 w-full cursor-pointer hover:bg-gray-50/30 transition-all duration-300 ${
          isActive ? 'bg-gray-50/20' : ''
        }`}
        style={{boxShadow: '0 -2px 4px rgba(0, 0, 0, 0.1)'}}
        onClick={onToggle}
      >
        <div className="flex gap-4 items-start">
          <span className="font-jetbrains-mono text-[20px] font-normal text-[#292827] uppercase">
            {String(id).padStart(2, '0')}
          </span>
          <span className="font-jetbrains-mono text-[48px] font-normal text-[#292827] uppercase">
            {title}
          </span>
        </div>
      </div>
      
      {/* Card Content with Overlay Effect */}
      <div className={`relative transition-all duration-500 ease-in-out ${
        isActive 
          ? 'max-h-[600px] opacity-100 transform translate-y-0' 
          : 'max-h-0 opacity-0 transform -translate-y-4 overflow-hidden'
      }`}>
        <div className={`bg-white/90 backdrop-blur-sm rounded-b-[32px] p-8 w-full transition-all duration-500 ${
          isActive 
            ? 'transform translate-y-0 shadow-lg' 
            : 'transform -translate-y-2'
        }`}>
          <div className="flex items-center justify-between px-[200px] w-full relative">
            {/* Phone Image */}
            <div className="flex gap-2.5 h-[499px] items-center w-[238px] relative">
              <div className="absolute h-[548px] left-[-68px] top-[-9.66px] w-[307.5px]">
                <Image
                  src={phoneImage}
                  alt=""
                  fill
                  className="object-cover"
                />
              </div>
            </div>
            
            {/* Content */}
            <div className="flex flex-col gap-4 items-start w-[340px]">
              <p className="font-qedysans text-[36px] leading-[1.2] text-[#292827] text-center whitespace-pre">
                {subtitle}
              </p>
              <p className="font-raleway-medium text-[16px] font-medium leading-[1.5] text-[#52504e] min-w-full w-[min-content]">
                {description}
              </p>
            </div>
            
            {/* Planets */}
            {planets.map((planet, planetIndex) => (
              <div key={planetIndex} className={planet.className}>
                <Image
                  src={planet.src}
                  alt={planet.alt}
                  width={255}
                  height={255}
                  className="object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
