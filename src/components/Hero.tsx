import Link from 'next/link';
import React from 'react';

interface HeroProps {
  backgroundImage: string;
  title: string;
  ctaText: string;
  ctaLink: string;
}

function Hero({ backgroundImage, title, ctaText, ctaLink }: HeroProps) {
  return (
    <div className="relative overflow-hidden py-16">
      {/* Background image */}
      <img
        src={backgroundImage}
        alt=""
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
      />
      {/* Overlay */}
      <div className="absolute top-0 left-0 w-full h-full opacity-20 z-10 bg-stroke"></div>
      {/* Content */}
      <div className="relative z-20 text-center py-24 md:py-32 lg:py-48">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-main">{title}</h1>
        <Link href={ctaLink}>
          <p className="mt-5 py-2 px-8 mt-8 rounded-xl inline-block bg-greenblue text-main hover:drop-shadow-2xl">
            {ctaText}
          </p>
        </Link>
      </div>
    </div>
  );
}

export default Hero;
