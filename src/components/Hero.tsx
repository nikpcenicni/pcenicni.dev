import Link from 'next/link';
import React from 'react';
import Image from 'next/image';
interface HeroProps {
  backgroundImage: string;
  title: string;
  subtext: string;
  ctaText: string;
  ctaLink: string;
}

function Hero({ backgroundImage, title, subtext, ctaText, ctaLink }: HeroProps) {
  return (
    <div className="relative overflow-hidden py-16">
      {/* Background image */}
      <Image
        src={backgroundImage}
        alt=""
        width={1600}
        height={900}
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
      />
      {/* Overlay */}
      <div className="absolute top-0 left-0 w-full h-full opacity-20 z-10 bg-stroke"></div>
      {/* Content */}
      <div className="relative z-20 text-center py-24 md:py-32 lg:py-48">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-main">{title}</h1>
        <p className="pt-4 text-xl text-main">{subtext}</p>
        <Link href={ctaLink}>
          <p className="mt-5 py-2 px-8 rounded-xl inline-block bg-greenblue text-main hover:drop-shadow-2xl">
            {ctaText}
          </p>
        </Link>
      </div>
    </div>
  );
}

export default Hero;
