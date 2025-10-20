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
      <div className="container mx-auto flex flex-col gap-[128px] items-center py-[64px] w-full">
        <HeroSection />
        <AboutSection />
      </div>
      <section id="how-zori-works" className="bg-[#f8f2ec] flex flex-col items-center pt-0 px-0 w-full relative overflow-hidden">
        {/* Parallax Background */}
        <div className="absolute inset-0 flex flex-col items-start pointer-events-none">
          <div className="aspect-[1920/1080] mb-[-1px] relative w-full">
            <Image
              src="/polaroid-bg.png"
              alt=""
              fill
              className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full"
            />
          </div>
          <div className="aspect-[1920/1080] mb-[-1px] relative w-full">
            <Image
              src="/polaroid-bg.png"
              alt=""
              fill
              className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full"
            />
          </div>
          <div className="aspect-[1920/1080] mb-[-1px] relative w-full">
            <Image
              src="/polaroid-bg.png"
              alt=""
              fill
              className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full"
            />
          </div>
          <div className="aspect-[1920/1080] mb-[-1px] relative w-full">
            <Image
              src="/polaroid-bg.png"
              alt=""
              fill
              className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full"
            />
          </div>
          <div className="aspect-[1920/1080] mb-[-1px] relative w-full">
            <Image
              src="/polaroid-bg.png"
              alt=""
              fill
              className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full"
            />
          </div>
          <div className="aspect-[1920/1080] mb-[-1px] relative w-full">
            <Image
              src="/polaroid-bg.png"
              alt=""
              fill
              className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full"
            />
          </div>
          <div className="aspect-[1920/1080] mb-[-1px] relative w-full">
            <Image
              src="/polaroid-bg.png"
              alt=""
              fill
              className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full"
            />
          </div>
          <div className="aspect-[1920/1080] mb-[-1px] relative w-full">
            <Image
              src="/polaroid-bg.png"
              alt=""
              fill
              className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full"
            />
          </div>
        </div>

        <div className="relative py-16 z-10 w-full">
          <div className="container mx-auto">
            <p className="font-qedysans text-[36px] leading-[1.2] text-[#fffbf9] text-center">
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
