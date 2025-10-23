'use client';

import { useState, useEffect } from 'react';
import { MobileMenu } from "@/components/MobileMenu";
import Image from 'next/image';

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  // Функция для плавной прокрутки к секции
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
    setActiveSection(sectionId);
    closeMobileMenu();
  };

  // Отслеживание активной секции при прокрутке
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'how-zori-works'];
      const scrollPosition = window.scrollY + 100;

      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <header className="header-fixed bg-[#f8f2ec] shadow-[0px_4px_8px_0px_rgba(0,0,0,0.05)] z-[60]">
        <div className="mx-auto px-4 md:px-16 py-4">
          <div className="flex items-center justify-between">
            {/* Mobile Menu Button */}
            <button
              onClick={toggleMobileMenu}
              className="md:hidden p-2"
              aria-label="Open menu"
            >
              <Image
                src="/images/ui/burger-menu.svg"
                alt="Menu"
                width={16}
                height={12}
                className="w-4 h-3"
              />
            </button>

            {/* Logo */}
            <div className="h-8 w-[95px] relative shrink-0">
              <Image
                src="/images/logos/logo-vector.svg"
                alt="Zori"
                width={95}
                height={32}
                className="block max-w-none size-full"
                priority
              />
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-4">
              <button
                onClick={() => scrollToSection('home')}
                className={`bg-[#f8f2ec] flex flex-col h-11 items-center justify-center px-4 relative shrink-0 cursor-pointer hover:opacity-80 nav-button ${
                  activeSection === 'home' ? 'nav-active' : ''
                }`}
              >
                <span className="font-['JetBrains_Mono:Regular',_sans-serif] text-[20px] font-normal text-[#292827] uppercase leading-[22px] text-center whitespace-pre nav-text">
                  Home
                </span>
                {activeSection === 'home' && (
                  <div className="h-0 relative shrink-0 w-full">
                    <div className="absolute inset-[-0.5px_-1.04%]">
                      <Image
                        src="/images/ui/underline.svg"
                        alt=""
                        width={50}
                        height={2}
                        className="block max-w-none size-full"
                      />
                    </div>
                  </div>
                )}
              </button>
              <button
                onClick={() => scrollToSection('about')}
                className={`bg-[#f8f2ec] flex flex-col h-11 items-center justify-center px-4 relative shrink-0 cursor-pointer hover:opacity-80 nav-button ${
                  activeSection === 'about' ? 'nav-active' : ''
                }`}
              >
                <span className="font-['JetBrains_Mono:Regular',_sans-serif] text-[20px] font-normal text-[#292827] uppercase leading-[22px] text-center whitespace-pre nav-text">
                  about
                </span>
                {activeSection === 'about' && (
                  <div className="h-0 relative shrink-0 w-full">
                    <div className="absolute inset-[-0.5px_-1.04%]">
                      <Image
                        src="/images/ui/underline.svg"
                        alt=""
                        width={50}
                        height={2}
                        className="block max-w-none size-full"
                      />
                    </div>
                  </div>
                )}
              </button>
            </nav>

            {/* CTA Button */}
            <div className="flex items-center justify-center h-11 px-8 py-4 relative rounded-[1000px] shrink-0 overflow-clip">
              <div className="absolute h-[54px] left-[calc(50%+0.5px)] top-1/2 translate-x-[-50%] translate-y-[-50%] w-[209px]">
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                  <Image
                    src="/images/backgrounds/button-bg.png"
                    alt=""
                    width={209}
                    height={54}
                    className="absolute h-[107.41%] left-[6.34%] top-[-3.7%] w-[87.31%]"
                  />
                </div>
              </div>
              <div className="flex flex-col font-['Qedysans:Regular',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#fffbf9] text-[16px] text-nowrap">
                <span className="leading-[1.2] whitespace-pre">Try Zori</span>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <MobileMenu
        isOpen={isMobileMenuOpen}
        onClose={closeMobileMenu}
        onNavigate={scrollToSection}
        activeSection={activeSection}
      />
    </>
  );
}
