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
          sizes="100vw"
          className="pointer-events-none absolute inset-0 size-full max-w-none object-cover"
        />
      </div>
    </div>
  );
}

