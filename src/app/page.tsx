import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { AboutSection } from "@/components/AboutSection";
import { HowZoriWorksSection } from "@/components/HowZoriWorksSection";
import { Footer } from "@/components/Footer";
import { ParallaxBackground } from "@/components/ParallaxBackground";
import { CookieConsent } from "@/components/CookieConsent";

// Next.js 13+ automatically caches static pages
export const revalidate = false; // Static page, doesn't rebuild

export default function Home() {
  return (
    <div className="min-h-screen bg-[#f8f2ec]">
      <CookieConsent />
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
        <ParallaxBackground />

        <div className="relative py-8 md:py-16 z-10 w-full">
          <div className="container mx-auto px-4 md:px-0">
            <p id="how-zori-works-heading" className="font-qedysans text-[24px] md:text-[36px] leading-[1.2] text-[#FFFBF9] text-center drop-shadow-lg">
              How Zori works
            </p>
          </div>
        </div>
        <div className="relative z-10 w-full">
          <HowZoriWorksSection />
        </div>
        <div id="footer" className="relative z-10 w-full">
          <Footer />
        </div>
      </section>
    </div>
  );
}
