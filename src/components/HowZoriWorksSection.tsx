import { ReviewsSection } from '@/components/ReviewsSection';
import { FAQSection } from '@/components/FAQSection';
import { WorkAccordion } from '@/components/WorkAccordion';

export function HowZoriWorksSection() {
  return (
    <div className="container mx-auto px-4 md:px-0">
        <div className="bg-[#f8f2ec] flex flex-col gap-8 md:gap-16 items-start rounded-[16px] md:rounded-[32px] max-w-[1152px] mx-auto pb-8 md:pb-16">
      <WorkAccordion />
      
      {/* Divider */}
      <div className="h-0 relative w-[300px] md:w-[800px] mx-auto">
        <div className="absolute bottom-0 left-0 right-0 top-[-0.4px]">
          <img alt="" className="block max-w-none size-full" src="/images/ui/divider-main.svg" />
        </div>
      </div>
      
      {/* Reviews Section */}
      <div className="w-full">
        <ReviewsSection />
      </div>
      
      {/* Divider */}
      <div className="h-0 relative w-[300px] md:w-[800px] mx-auto">
        <div className="absolute bottom-0 left-0 right-0 top-[-0.4px]">
          <img alt="" className="block max-w-none size-full" src="/images/ui/divider-main.svg" />
        </div>
      </div>
      
      {/* FAQ Section */}
      <div className="w-full">
        <FAQSection />
      </div>
      </div>
    </div>
  );
}