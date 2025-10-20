export function ReviewsSection() {
  return (
    <div className="flex flex-col gap-8 items-center w-full">
      <p className="font-qedysans text-[36px] text-[#292827] text-center leading-[1.2]">
        Zori Moments
      </p>
      
        <div className="relative w-full overflow-hidden">
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-[#f8f2ec] via-[#f8f2ec]/80 to-transparent z-10 pointer-events-none" />
          
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-[#f8f2ec] via-[#f8f2ec]/80 to-transparent z-10 pointer-events-none" />
        
        {/* Контейнер с горизонтальным скроллом */}
        <div className="flex gap-4 overflow-x-auto scrollbar-hide py-4 px-4">
          <div className="backdrop-blur-[2px] border border-[rgba(22,21,18,0.5)] rounded-2xl p-8 w-[266px] flex-shrink-0 flex flex-col gap-8">
            <div className="flex flex-col gap-2">
              <p className="font-jetbrains-mono text-[20px] text-[#292827] uppercase leading-[1.2]">
                Nova
              </p>
            </div>
            <p className="font-raleway-medium text-[16px] text-[#52504e] leading-[1.5]">
              Zori helps me start every morning with clarity and peace 🌙✨
            </p>
          </div>
          <div className="backdrop-blur-[2px] border border-[rgba(22,21,18,0.5)] rounded-2xl p-8 w-[266px] flex-shrink-0 flex flex-col gap-8">
            <div className="flex flex-col gap-2">
              <p className="font-jetbrains-mono text-[20px] text-[#292827] uppercase leading-[1.2]">
                Luna
              </p>
            </div>
            <p className="font-raleway-medium text-[16px] text-[#52504e] leading-[1.5]">
              I finally understand my moods — the app feels truly personal 😊
            </p>
          </div>
          <div className="backdrop-blur-[2px] border border-[rgba(22,21,18,0.5)] rounded-2xl p-8 w-[266px] flex-shrink-0 flex flex-col gap-8">
            <div className="flex flex-col gap-2">
              <p className="font-jetbrains-mono text-[20px] text-[#292827] uppercase leading-[1.2]">
                Aurora
              </p>
            </div>
            <p className="font-raleway-medium text-[16px] text-[#52504e] leading-[1.5]">
              Beautiful design and gentle daily insights. I use it every day 💖🌸
            </p>
          </div>
          <div className="backdrop-blur-[2px] border border-[rgba(22,21,18,0.5)] rounded-2xl p-8 w-[266px] flex-shrink-0 flex flex-col gap-8">
            <div className="flex flex-col gap-2">
              <p className="font-jetbrains-mono text-[20px] text-[#292827] uppercase leading-[1.2]">
                Ethan
              </p>
            </div>
            <p className="font-raleway-medium text-[16px] text-[#52504e] leading-[1.5]">
              Zori became my little ritual — a moment to reconnect with myself 🧘‍♀️
            </p>
          </div>
          <div className="backdrop-blur-[2px] border border-[rgba(22,21,18,0.5)] rounded-2xl p-8 w-[266px] flex-shrink-0 flex flex-col gap-8">
            <div className="flex flex-col gap-2">
              <p className="font-jetbrains-mono text-[20px] text-[#292827] uppercase leading-[1.2]">
                Selene
              </p>
            </div>
            <p className="font-raleway-medium text-[16px] text-[#292827] opacity-80 leading-[1.5]">
              Accurate, calming, and inspiring. Exactly what I needed ✨🙏
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}