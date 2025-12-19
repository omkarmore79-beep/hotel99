"use client";

import "../styles/menu.css";
import { categories } from "../data/categories";
import CategoryCarouselRow from "./CategoryCarouselRow";

export default function MenuSection() {
  const half = Math.ceil(categories.length / 2);

  const row1 = categories.slice(0, half);
  const row2 = categories.slice(half);

  return (
    <section id="menu" className="menu-section">
      <h2 className="menu-title">Our Menu</h2>

      {/* ROW 1 */}
      <CategoryCarouselRow categories={row1} />

      {/* ROW 2 */}
      <CategoryCarouselRow categories={row2} />
    </section>
  );
}
