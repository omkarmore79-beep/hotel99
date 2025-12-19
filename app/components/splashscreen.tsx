"use client";

import { motion, Variants } from "framer-motion";
import { useEffect, useState } from "react";
import Image from "next/image";

const line1 = "Welcome";
const line2 = "to Brewing Partners";

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.06 },
  },
};

const letterVariants: Variants = {
  hidden: { opacity: 0, y: 10 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.35, ease: "easeOut" },
  },
};

export default function SplashScreen({
  onFinish,
}: {
  onFinish: () => void;
}) {
  const [showLine2, setShowLine2] = useState(false);
  const [stopSpin, setStopSpin] = useState(false);

  useEffect(() => {
    const t1 = setTimeout(() => setShowLine2(true), 900);
    const t2 = setTimeout(() => onFinish(), 4200);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
    };
  }, [onFinish]);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-white">
      <div className="text-center">

        {/* 🔄 FAST SPINNING LOGO */}
        <motion.div
          animate={{
            rotate: stopSpin ? 0 : 360,
          }}
          transition={{
            rotate: stopSpin
              ? { duration: 1.2, ease: "easeOut" } // smooth stop
              : { repeat: Infinity, duration: 0.35, ease: "linear" }, // VERY FAST
          }}
          className="flex justify-center"
        >
          <Image
            src="/brewlogo.png"
            alt="Brewing Partners Logo"
            width={150}
            height={200}
            priority
          />
        </motion.div>

        {/* LINE 1 */}
        <motion.h1
          className="text-4xl font-light text-black flex justify-center space-y-1 mt-4"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {line1.split("").map((char, i) => (
            <motion.span key={i} variants={letterVariants}>
              {char}
            </motion.span>
          ))}
        </motion.h1>

        {/* LINE 2 */}
        <motion.h2
          className="text-2xl font-normal mt-0.2 flex justify-center"
          style={{ opacity: showLine2 ? 1 : 0 }}
          variants={containerVariants}
          initial="hidden"
          animate={showLine2 ? "visible" : "hidden"}
          onAnimationComplete={() => setStopSpin(true)} // 🛑 STOP LOGO HERE
        >
          {line2.split("").map((char, i) => (
            <motion.span
              key={i}
              variants={letterVariants}
              style={{
                color: i < 3 ? "#000000" : "#96cbad",
              }}
            >
              {char === " " ? "\u00A0" : char}
            </motion.span>
          ))}
        </motion.h2>
      </div>
    </div>
  );
}
