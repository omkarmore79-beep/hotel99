"use client";

import { useState } from "react";
import SplashScreen from "./components/splashscreen";
import HeroSection from "./components/herosection";
import MenuSection from "./components/menusection";
import Footer from "./components/footer"; 

export default function Page() {
  const [showSplash, setShowSplash] = useState(true);

  if (showSplash) {
    return <SplashScreen onFinish={() => setShowSplash(false)} />;
  }

  return (
    <main className="w-full">
      <HeroSection />

      <div className="relative w-full flex justify-center">
        <img
          src="/backgroundimage.jpeg"
          alt="background"
          className="w-[380px] max-w-full"
        />

        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-[380px] px-4">
          <MenuSection />
          <Footer />
        </div>
      </div>
    </main>
  );
}
