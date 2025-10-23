import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { AboutSection } from "@/components/AboutSection";
import { HowZoriWorksSection } from "@/components/HowZoriWorksSection";
import { Footer } from "@/components/Footer";
import Image from 'next/image';

export default function Home() {
  return (
    <div className="min-h-screen bg-[#f8f2ec]">
      <Header />
      <section id="home" className="section-offset md:py-[64px] w-full pt-[79px]">
        <HeroSection />
      </section>
      <div className="container overflow-hidden mx-auto flex flex-col gap-8 md:gap-[128px] items-center py-8 w-full">
        <section id="about" className="section-offset w-full">
          <AboutSection />
        </section>
      </div>
      <section id="how-zori-works" className="gradient-bg flex flex-col items-center pt-0 px-0 w-full relative overflow-hidden min-h-screen">
        {/* Parallax Background Layers */}
        <div className="absolute inset-0 w-full h-full pointer-events-none">
          {/* Layer 1 - Slowest parallax */}
          <div className="absolute inset-0 w-full h-full parallax-layer-1">
            <Image
              src="/images/backgrounds/polaroid-bg.png"
              alt=""
              fill
              className="absolute inset-0 max-w-none object-cover pointer-events-none size-full"
            />
          </div>
          
          {/* Layer 2 - Medium parallax */}
          <div className="absolute inset-0 w-full h-full parallax-layer-2">
            <Image
              src="/images/backgrounds/polaroid-bg.png"
              alt=""
              fill
              className="absolute inset-0 max-w-none object-cover pointer-events-none size-full"
            />
          </div>
          
          {/* Layer 3 - Fastest parallax */}
          <div className="absolute inset-0 w-full h-full parallax-layer-3">
            <Image
              src="/images/backgrounds/polaroid-bg.png"
              alt=""
              fill
              className="absolute inset-0 max-w-none object-cover pointer-events-none size-full"
            />
          </div>
        </div>

        <div className="relative py-8 md:py-16 z-10 w-full">
          <div className="container mx-auto px-4 md:px-0">
            <p className="font-qedysans text-[24px] md:text-[36px] leading-[1.2] text-[#FFFBF9] text-center drop-shadow-lg">
              How Zori works
            </p>
          </div>
        </div>
        <div className="relative z-10 w-full">
          <HowZoriWorksSection />
        </div>
        <div className="relative z-10 w-full">
          <Footer />
        </div>
      </section>
    </div>
  );
}
