"use client";

export default function ArchVideo() {
  return (
    <div
      className="relative w-screen h-screen flex justify-center"
      style={{
        backgroundImage: "url('/brewing1.jpeg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* MASKED VIDEO ONLY */}
      <div
        className="relative mt-60 w-[267px] h-[482px]"
        style={{
          WebkitMaskImage: "url('/archmask.svg')",
          WebkitMaskRepeat: "no-repeat",
          WebkitMaskSize: "contain",
          WebkitMaskPosition: "center",

          maskImage: "url('/archmask.svg')",
          maskRepeat: "no-repeat",
          maskSize: "contain",
          maskPosition: "center",
        }}
      >
        <video
          src="/intro.mp4"
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
}
