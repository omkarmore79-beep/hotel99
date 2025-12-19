"use client";

import { motion } from "framer-motion";
import { useRouter } from "next/navigation";

interface Category {
  id: string;
  name: string;
  caption: string;
  image: string;
}

export default function CategoryCarousel({
  categories,
}: {
  categories: Category[];
}) {
  const router = useRouter(); // ✅ INSIDE component

  return (
    <div className="overflow-hidden w-full">
      <motion.div
        className="flex gap-6 cursor-grab active:cursor-grabbing"
        animate={{ x: ["0%", "-50%"] }}
        transition={{
          repeat: Infinity,
          duration: 20,
          ease: "linear",
        }}
        drag="x"
        dragConstraints={{ left: -600, right: 0 }}
        dragElastic={0.2}
      >
        {[...categories, ...categories].map((cat, index) => (
          <div
            key={index}
            className="category-card"
            onClick={() => router.push(`/menu?cat=${cat.id}`)} // ✅ NAVIGATION
          >
            <img src={cat.image} alt={cat.name} />
            <h3>{cat.name}</h3>
            <p>{cat.caption}</p>
          </div>
        ))}
      </motion.div>
    </div>
  );
}
