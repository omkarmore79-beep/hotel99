"use client";

import Image from "next/image";

export default function ArchVideo() {
  return (
    <div
      className="relative w-screen h-screen"
      style={{
        backgroundImage: "url('/bgimage.jpeg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* 🔝 TOP CENTER BRAND BAR */}
      <div
        className="
          absolute
          top-15
          left-1/2
          -translate-x-1/2
          z-20
          p-2x-4
          flex
          items-center
          gap-1.5
        "
      >
        {/* Logo */}
        <Image
          src="/brewlogo.png"
          alt="Brewing Partners Logo"
          width={100}
          height={50}
          priority
        />

        {/* Divider */}
        <span className="text-[#9d6446] opacity-70">|</span>

        {/* Brand Name */}
        <span
          className="text-[#9d6446] text-xxl font-bold tracking-wide"
          style={{ fontFamily: "serif" }} // replace with your font if needed
        >
          Brewing Partners
        </span>
      </div>

      {/* 📱 RECTANGULAR VIDEO */}
      <video
        src="/intro.mp4"
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        className="
          absolute
          left-1/2
          top-1/2
          -translate-x-1/2
          translate-y-[-27%]
          w-[250px]
          h-[490px]
          object-cover
          rounded-md
        "
      />
    </div>
  );
}
