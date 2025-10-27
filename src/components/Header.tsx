'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
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

  // Function for smooth scrolling to a section with header offset
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const header = document.querySelector('.header-fixed');
      const headerHeight = header ? header.getBoundingClientRect().height : 80;
      
      const elementPosition = element.getBoundingClientRect().top + window.scrollY;
      const offsetPosition = elementPosition - headerHeight;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
    setActiveSection(sectionId);
    closeMobileMenu();
  };

  // Tracking active section on scroll by headings
  useEffect(() => {
    let throttleTimeout: NodeJS.Timeout | null = null;
    let activeSectionTimeout: NodeJS.Timeout | null = null;
    
    const handleScroll = () => {
      // Throttle for performance
      if (throttleTimeout) {
        return;
      }
      
      throttleTimeout = setTimeout(() => {
        const scrollY = window.scrollY;
        const viewportHeight = window.innerHeight;
        const triggerOffset = viewportHeight * 0.3; // Trigger at 30% from top of viewport
        
        let bestMatch = '';
        let minDistance = Infinity;
        
        const sections = [
          { navId: 'faq', headingId: 'faq-heading' },
          { navId: 'how-zori-works', headingId: 'how-zori-works-heading' },
          { navId: 'about', headingId: 'about-heading' },
          { navId: 'home', headingId: 'hero-heading' }
        ];
        
        // Calculate distance from top of screen to heading for each section
        for (const section of sections) {
          const headingElement = document.getElementById(section.headingId);
          if (headingElement) {
            const rect = headingElement.getBoundingClientRect();
            const elementTop = rect.top;
            const elementBottom = rect.bottom;
            
            // If heading is visible and above trigger
            if (elementTop < triggerOffset && elementBottom > 0 && elementTop > -100) {
              const distance = Math.abs(elementTop - 100);
              if (distance < minDistance) {
                minDistance = distance;
                bestMatch = section.navId;
              }
            }
          }
        }
        
        // Update active section only if changed
        if (activeSectionTimeout) {
          clearTimeout(activeSectionTimeout);
        }
        
        if (bestMatch) {
          activeSectionTimeout = setTimeout(() => {
            setActiveSection((currentSection) => {
              if (currentSection !== bestMatch) {
                return bestMatch;
              }
              return currentSection;
            });
          }, 200); // Increased delay 200ms for stability
        }
        
        throttleTimeout = null;
      }, 100);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleScroll);
    handleScroll(); // Initialize
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
      if (throttleTimeout) clearTimeout(throttleTimeout);
      if (activeSectionTimeout) clearTimeout(activeSectionTimeout);
    };
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
                loading="lazy"
              />
            </button>

            {/* Logo */}
            <Link href="/" className="md:h-8 h-auto w-[71px] md:w-[95px] relative shrink-0 block">
              <Image
                src="/images/logos/logo-vector.svg"
                alt="Zori"
                width={95}
                height={32}
                className="block max-w-none size-full"
                priority
              />
            </Link>

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
                        loading="lazy"
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
                        loading="lazy"
                      />
                    </div>
                  </div>
                )}
              </button>
              <button
                onClick={() => scrollToSection('how-zori-works')}
                className={`bg-[#f8f2ec] flex flex-col h-11 items-center justify-center px-4 relative shrink-0 cursor-pointer hover:opacity-80 nav-button ${
                  activeSection === 'how-zori-works' ? 'nav-active' : ''
                }`}
              >
                <span className="font-['JetBrains_Mono:Regular',_sans-serif] text-[20px] font-normal text-[#292827] uppercase leading-[22px] text-center whitespace-pre nav-text">
                  How it works
                </span>
                {activeSection === 'how-zori-works' && (
                  <div className="h-0 relative shrink-0 w-full">
                    <div className="absolute inset-[-0.5px_-1.04%]">
                      <Image
                        src="/images/ui/underline.svg"
                        alt=""
                        width={50}
                        height={2}
                        className="block max-w-none size-full"
                        loading="lazy"
                      />
                    </div>
                  </div>
                )}
              </button>
              <button
                onClick={() => scrollToSection('faq')}
                className={`bg-[#f8f2ec] flex flex-col h-11 items-center justify-center px-4 relative shrink-0 cursor-pointer hover:opacity-80 nav-button ${
                  activeSection === 'faq' ? 'nav-active' : ''
                }`}
              >
                <span className="font-['JetBrains_Mono:Regular',_sans-serif] text-[20px] font-normal text-[#292827] uppercase leading-[22px] text-center whitespace-pre nav-text">
                  FAQ
                </span>
                {activeSection === 'faq' && (
                  <div className="h-0 relative shrink-0 w-full">
                    <div className="absolute inset-[-0.5px_-1.04%]">
                      <Image
                        src="/images/ui/underline.svg"
                        alt=""
                        width={50}
                        height={2}
                        className="block max-w-none size-full"
                        loading="lazy"
                      />
                    </div>
                  </div>
                )}
              </button>
            </nav>

            {/* CTA Button */}
            <div className="flex items-center justify-center h-[32px] px-4 py-[10.5px] md:h-11 md:px-8 md:py-4 relative rounded-[1000px] shrink-0 overflow-clip">
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
