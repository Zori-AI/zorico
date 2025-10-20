'use client';

import Image from 'next/image';
import { useState } from 'react';

interface FAQItem {
  id: number;
  question: string;
  answer: string;
}

const faqData: FAQItem[] = [
  {
    id: 1,
    question: "What is Zori?",
    answer: "Zori is a personal astrology app that combines NASA JPL and Swiss Ephemeris data to give you accurate insights, forecasts, and guidance every day."
  },
  {
    id: 2,
    question: "How accurate are the forecasts?",
    answer: "Our forecasts are based on precise astronomical calculations using NASA JPL data and Swiss Ephemeris, ensuring high accuracy for all astrological predictions and insights."
  },
  {
    id: 3,
    question: "Do I need astrology knowledge to use it?",
    answer: "Not at all! Zori is designed for everyone, from complete beginners to astrology enthusiasts. The app provides clear, easy-to-understand explanations and guidance."
  },
  {
    id: 4,
    question: "What can I talk about with the AI astrologer?",
    answer: "You can discuss anything related to your astrological chart, ask about planetary transits, get relationship insights, career guidance, or simply explore your personality traits through astrology."
  },
  {
    id: 5,
    question: "Is my data safe?",
    answer: "Absolutely! We take your privacy seriously. All your personal data and birth information is encrypted and stored securely. We never share your information with third parties."
  }
];

export function FAQSection() {
  const [openItems, setOpenItems] = useState<number[]>([1]); // Первый вопрос открыт по умолчанию

  const toggleItem = (id: number) => {
    setOpenItems(prev => 
      prev.includes(id) 
        ? prev.filter(item => item !== id)
        : [...prev, id]
    );
  };

  return (
    <div className="container mx-auto px-8">
      <div className="flex flex-col gap-8 items-center max-w-[1152px] mx-auto">
        <p className="font-qedysans text-[36px] leading-[1.2] text-[#292827] text-center">
          FAQ
        </p>
        
        <div className="flex flex-col gap-4 items-center w-full">
          {faqData.map((item, index) => (
            <div key={item.id}>
              <div 
                className="flex gap-4 items-start rounded-[16px] w-full cursor-pointer transition-all duration-200"
                onClick={() => toggleItem(item.id)}
              >
                <div className="flex gap-2.5 items-center pt-1">
                  <div className="relative size-[10px] transition-transform duration-300">
                    <div className="absolute inset-[-5%]">
                      <Image
                        src={openItems.includes(item.id) ? "/images/ui/button-close.svg" : "/images/ui/button-plus.svg"}
                        alt={openItems.includes(item.id) ? "Expand" : "Collapse"}
                        width={10}
                        height={10}
                        className="block max-w-none w-[10px] h-[10px] transition-all duration-300"
                      />
                    </div>
                  </div>
                </div>
                <div className="flex flex-col gap-2 items-start flex-1">
                  <p className="font-jetbrains-mono text-[20px] font-normal text-[#292827] uppercase">
                    {item.question}
                  </p>
                  <div 
                    className={`overflow-hidden transition-all duration-300 ease-in-out ${
                      openItems.includes(item.id) 
                        ? 'max-h-96 opacity-100' 
                        : 'max-h-0 opacity-0'
                    }`}
                  >
                    <p className="font-raleway-medium text-[16px] font-medium leading-[1.5] text-[#52504e] w-full pt-2">
                      {item.answer}
                    </p>
                  </div>
                </div>
              </div>
              
              {index < faqData.length - 1 && (
                <div className="h-0 relative w-full">
                  <div className="absolute bottom-0 left-0 right-0 top-[-0.4px]">
                    <Image
                      src="/images/ui/divider-small.svg"
                      alt=""
                      width={1152}
                      height={1}
                      className="block max-w-none size-full"
                    />
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}