"use client";

import { motion, Variants } from "framer-motion";
import { useEffect, useState } from "react";

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

  useEffect(() => {
    const t1 = setTimeout(() => setShowLine2(true), 900);
    const t2 = setTimeout(() => onFinish(), 2600);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
    };
  }, [onFinish]);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-white">
      <div className="text-center space-y-2">
        {/* Line 1 - stays fixed */}
        <motion.h1
          className="text-4xl font-light text-black flex justify-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {line1.split("").map((char, i) => (
            <motion.span
              key={i}
              variants={letterVariants}
              className="inline-block"
            >
              {char}
            </motion.span>
          ))}
        </motion.h1>

        {/* Line 2 - space reserved, no layout shift */}
        <motion.h2
          className="text-2xl font-normal flex justify-center"
          style={{ opacity: showLine2 ? 1 : 0 }}
          variants={containerVariants}
          initial="hidden"
          animate={showLine2 ? "visible" : "hidden"}
        >
          {line2.split("").map((char, i) => (
            <motion.span
              key={i}
              variants={letterVariants}
              className="inline-block"
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
