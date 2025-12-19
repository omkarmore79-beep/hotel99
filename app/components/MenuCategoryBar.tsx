"use client";

import { useRouter } from "next/navigation";
import type { Category } from "../data/categories";

export default function MenuCategoryBar({
  categories,
  active,
  onSelect,
}: {
  categories: Category[];
  active: Category;
  onSelect: (cat: Category) => void;
}) {
  const router = useRouter();

  return (
    <div className="px-4 py-3 border-b">
      <div
        className="
          flex gap-4
          overflow-x-auto
          whitespace-nowrap
          scrollbar-hide
        "
      >
        {categories.map((cat) => {
          const isActive = active.id === cat.id;

          return (
            <button
              key={cat.id}
              type="button"
              onClick={() => {
                onSelect(cat);
                router.push(`/menu?cat=${cat.id}`);
              }}
              className={`px-5 py-2 rounded-full transition
                ${
                  isActive
                    ? "bg-[#224b11] text-[#f7ffef]"
                    : "bg-transparent border border-[#224b11] text-[#224b11]"
                }`}
            >
              {cat.name}
            </button>
          );
        })}
      </div>
    </div>
  );
}
