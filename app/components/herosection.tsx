"use client";

export default function ArchVideo() {
  return (
    <div
      className="relative w-screen h-screen"
      style={{
        backgroundImage: "url('/brewing1.jpeg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* RECTANGULAR VIDEO – MOBILE SAFE POSITION */}
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
          rounded-md"
          />

    </div>
  );
}
