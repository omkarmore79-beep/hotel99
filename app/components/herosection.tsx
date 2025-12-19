"use client";

import { useRouter } from "next/navigation";

export default function ArchVideo() {
  const router = useRouter();

  return (
    <div
      className="relative w-screen h-screen"
      style={{
        backgroundImage: "url('/brewing1.jpeg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* VIDEO FITTED INSIDE BLACK SHAPE (SCALED DOWN) */}
      <svg
        viewBox="0 0 428 843"
        className="
          absolute
          left-1/2
          -translate-x-1/2
          top-[210px]
          w-[225px]
        "
      >
        <defs>
          <clipPath id="brewClip">
            <path d="M0.5 842.5H427.5V226.5V185L411 148L397.5 111L353.5 51L296 14.5L236 0.5H183L130 14.5L70 51L37.5 97.5L12 148L0.5 201V842.5Z" />
          </clipPath>
        </defs>

        <foreignObject
          width="428"
          height="843"
          clipPath="url(#brewClip)"
        >
          <video
            src="/intro.mp4"
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
          />
        </foreignObject>
      </svg>

      
    </div>
  );
}
