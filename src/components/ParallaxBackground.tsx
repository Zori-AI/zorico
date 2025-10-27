import Image from 'next/image';

export function ParallaxBackground() {
  return (
    <div className="absolute inset-0 w-full h-full pointer-events-none">
      {/* Static background */}
      <div className="absolute inset-0 w-full h-full">
        <Image
          src="/images/backgrounds/polaroid-bg.png"
          alt=""
          fill
          className="absolute inset-0 max-w-none object-cover pointer-events-none size-full"
        />
      </div>
    </div>
  );
}

