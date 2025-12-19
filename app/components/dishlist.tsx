"use client";

import { useState } from "react";
import type { Dish } from "../data/categories";
import DishModal from "./DishModal";

export default function DishList({ dishes }: { dishes: Dish[] }) {
  const [selectedDish, setSelectedDish] = useState<Dish | null>(null);

  return (
    <>
      <section className="px-6 py-6">
        <div className="grid grid-cols-2 gap-6">
          {dishes.map((dish, index) => {
            const isGreen = index % 2 === 0;

            return (
              <div
                key={dish.id}
                onClick={() => setSelectedDish(dish)}
                className={`
                  relative cursor-pointer
                  aspect-square rounded-3xl overflow-hidden
                  ${isGreen ? "bg-[#9bbf8a]" : "bg-[#eadbcc]"}
                `}
              >
                <img
                  src={dish.image}
                  alt={dish.name}
                  className="w-full h-full object-cover"
                />

                <div className="absolute bottom-0 left-0 w-full bg-black/40 px-3 py-2">
                  <p className="text-sm text-white font-medium">
                    {dish.name}
                  </p>
                  <p className="text-xs text-white/80">
                    ₹{dish.price}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* FULLSCREEN MODAL */}
      {selectedDish && (
        <DishModal
          dish={selectedDish}
          onClose={() => setSelectedDish(null)}
        />
      )}
    </>
  );
}
