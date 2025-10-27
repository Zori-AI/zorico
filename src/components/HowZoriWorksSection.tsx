import {ReviewsSection} from '@/components/ReviewsSection';
import {FAQSection} from '@/components/FAQSection';
import {WorkAccordion} from '@/components/WorkAccordion';

export function HowZoriWorksSection() {
  return (
    <div className="container mx-auto px-4 md:px-0">
      <div
        className="bg-[#f8f2ec] flex flex-col gap-8 md:gap-16 items-start rounded-[16px] md:rounded-[32px] max-w-[1152px] mx-auto pb-8 md:pb-16"
        id="how-zori-works-content">
        <WorkAccordion/>

        {/* Divider */}
        <div className="w-full px-16 flex justify-center">
          <div 
            className="w-full max-w-[800px] h-[1px]"
            style={{
              background: 'linear-gradient(90deg, #CCC8C7 0%, rgba(0, 0, 0, 0.5) 50.48%, #CCC8C7 100%)',
            }}
          />
        </div>

        {/* Reviews Section */}
        <div className="w-full">
          <ReviewsSection/>
        </div>

        {/* Divider */}
        <div className="w-full px-16 flex justify-center">
          <div 
            className="w-full max-w-[800px] h-[1px]"
            style={{
              background: 'linear-gradient(90deg, #CCC8C7 0%, rgba(0, 0, 0, 0.5) 50.48%, #CCC8C7 100%)',
            }}
          />
        </div>

        {/* FAQ Section */}
        <div id="faq" className="w-full">
          <FAQSection/>
        </div>
      </div>
    </div>
  );
}
