import { ReviewsSection } from '@/components/ReviewsSection';
import { FAQSection } from '@/components/FAQSection';
import { WorkAccordion } from '@/components/WorkAccordion';

export function HowZoriWorksSection() {
  return (
    <div className="container mx-auto px-4 md:px-0">
        <div className="bg-[#f8f2ec] flex flex-col gap-8 md:gap-16 items-start rounded-[16px] md:rounded-[32px] max-w-[1152px] mx-auto pb-8 md:pb-16">
      <WorkAccordion />
      
 {/* Divider */}
 <div className="w-full px-16 flex justify-center">
      <svg className='hidden md:block' width="808" height="9" viewBox="0 0 808 9" fill="none" xmlns="http://www.w3.org/2000/svg">
<g filter="url(#filter0_d_8932_46918)">
<line x1="4" y1="0.200391" x2="804" y2="0.200391" stroke="url(#paint0_linear_8932_46918)" strokeWidth="0.4" shapeRendering="crispEdges"/>
</g>
<defs>
<filter id="filter0_d_8932_46918" x="0" y="0" width="808" height="8.40039" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
<feFlood floodOpacity="0" result="BackgroundImageFix"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dy="4"/>
<feGaussianBlur stdDeviation="2"/>
<feComposite in2="hardAlpha" operator="out"/>
<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_8932_46918"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_8932_46918" result="shape"/>
</filter>
<linearGradient id="paint0_linear_8932_46918" x1="4" y1="0.900391" x2="804" y2="0.900391" gradientUnits="userSpaceOnUse">
<stop stopColor="#CCC8C7"/>
<stop offset="0.504808" stopOpacity="0.5"/>
<stop offset="1" stopColor="#CCC8C7"/>
</linearGradient>
</defs>
</svg>
<svg width="768" className='block md:hidden' height="3" viewBox="0 0 768 3" fill="none" xmlns="http://www.w3.org/2000/svg">
<line x1="-0.000534757" y1="2.25313" x2="767.997" y2="0.199657" stroke="url(#paint0_linear_8964_57498)" strokeWidth="0.4"/>
<defs>
<linearGradient id="paint0_linear_8964_57498" x1="0.00133689" y1="2.95312" x2="767.999" y2="0.899655" gradientUnits="userSpaceOnUse">
<stop stopColor="#CCC8C7"/>
<stop offset="0.504808" stopOpacity="0.5"/>
<stop offset="1" stopColor="#CCC8C7"/>
</linearGradient>
</defs>
</svg>

      </div>
      
      {/* Reviews Section */}
      <div className="w-full">
        <ReviewsSection />
      </div>
      
      {/* Divider */}
      <div className="w-full px-16 flex justify-center">
      <svg className='hidden md:block' width="808" height="9" viewBox="0 0 808 9" fill="none" xmlns="http://www.w3.org/2000/svg">
<g filter="url(#filter0_d_8932_46918)">
<line x1="4" y1="0.200391" x2="804" y2="0.200391" stroke="url(#paint0_linear_8932_46918)" strokeWidth="0.4" shapeRendering="crispEdges"/>
</g>
<defs>
<filter id="filter0_d_8932_46918" x="0" y="0" width="808" height="8.40039" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
<feFlood floodOpacity="0" result="BackgroundImageFix"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dy="4"/>
<feGaussianBlur stdDeviation="2"/>
<feComposite in2="hardAlpha" operator="out"/>
<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_8932_46918"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_8932_46918" result="shape"/>
</filter>
<linearGradient id="paint0_linear_8932_46918" x1="4" y1="0.900391" x2="804" y2="0.900391" gradientUnits="userSpaceOnUse">
<stop stopColor="#CCC8C7"/>
<stop offset="0.504808" stopOpacity="0.5"/>
<stop offset="1" stopColor="#CCC8C7"/>
</linearGradient>
</defs>
</svg>
<svg width="768" className='block md:hidden' height="3" viewBox="0 0 768 3" fill="none" xmlns="http://www.w3.org/2000/svg">
<line x1="-0.000534757" y1="2.25313" x2="767.997" y2="0.199657" stroke="url(#paint0_linear_8964_57498)" strokeWidth="0.4"/>
<defs>
<linearGradient id="paint0_linear_8964_57498" x1="0.00133689" y1="2.95312" x2="767.999" y2="0.899655" gradientUnits="userSpaceOnUse">
<stop stopColor="#CCC8C7"/>
<stop offset="0.504808" stopOpacity="0.5"/>
<stop offset="1" stopColor="#CCC8C7"/>
</linearGradient>
</defs>
</svg>

      </div>
      
      {/* FAQ Section */}
      <div className="w-full">
        <FAQSection />
      </div>
      </div>
    </div>
  );
}