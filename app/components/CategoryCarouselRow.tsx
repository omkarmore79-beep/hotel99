"use client";

import { useRouter } from "next/navigation";

export default function CategoryCarouselRow({ categories }: any) {
  const router = useRouter();

  return (
    <div className="w-full mb-6 px-4">
      <div
        className="
          flex gap-6
          overflow-x-auto
          scrollbar-hide
        "
      >
        {categories.map((cat: any) => (
          <div
            key={cat.id}
            className="category-card flex-shrink-0"
            onClick={() => router.push(`/menu?cat=${cat.id}`)}
          >
            <img src={cat.image} alt={cat.name} />
            <h3>{cat.name}</h3>
            <p>{cat.caption}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
