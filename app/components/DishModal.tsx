import type { Dish } from "../data/categories";

export default function DishModal({
  dish,
  onClose,
}: {
  dish: Dish;
  onClose: () => void;
}) {
  return (
    <div className="fixed inset-0 z-50 bg-[#224b11] flex flex-col">
      {/* CLOSE BUTTON */}
      <button
        onClick={onClose}
        className="absolute top-4 right-4 text-white text-2xl"
      >
        ✕
      </button>

      {/* IMAGE */}
      <div className="w-full h-[55vh]">
        <img
          src={dish.image}
          alt={dish.name}
          className="w-full h-full object-cover"
        />
      </div>

      {/* CONTENT */}
      <div className="flex-1 bg-[#f7ffef] rounded-t-3xl px-6 pt-6 -mt-6">
        <h2 className="text-2xl font-semibold text-[#224b11]">
          {dish.name}
        </h2>

        <p className="text-[#224b11] font-medium mt-1">
          ₹{dish.price}
        </p>

        <p className="text-[#224b11] text-sm leading-relaxed mt-4">
          {dish.description}
        </p>
      </div>
    </div>
  );
}
