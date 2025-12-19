"use client";

import { useSearchParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

import { categories } from "../data/categories";
import type { Category } from "../data/categories";

import MenuCategoryBar from "../components/MenuCategoryBar";
import DishList from "../components/DishList";

export default function MenuClient() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const catFromUrl = searchParams.get("cat");

  const [activeCategory, setActiveCategory] =
    useState<Category>(categories[0]);

  useEffect(() => {
    if (catFromUrl) {
      const found = categories.find(
        (c) => c.id === catFromUrl
      );
      if (found) {
        setActiveCategory(found);
      }
    }
  }, [catFromUrl]);

  return (
    <main className="w-full flex justify-center">
      <div className="relative w-full max-w-[420px]">

        <img
          src="/menupage.jpeg"
          alt="menu background"
          className="w-full block"
        />

        <div className="absolute top-0 left-0 w-full min-h-full z-10">

          <div className="px-4 pt-4">
            <button
              onClick={() => router.push("/")}
              className="text-sm font-medium text-[#224b11]"
            >
              ← Back
            </button>
          </div>

          <MenuCategoryBar
            categories={categories}
            active={activeCategory}
            onSelect={setActiveCategory}
          />

          <DishList dishes={activeCategory.dishes} />
        </div>
      </div>
    </main>
  );
}
