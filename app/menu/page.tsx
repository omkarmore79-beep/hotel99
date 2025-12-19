import { Suspense } from "react";
import MenuClient from "./MenuClient";

export default function MenuPage() {
  return (
    <Suspense fallback={<div className="p-4 text-center">Loading menu...</div>}>
      <MenuClient />
    </Suspense>
  );
}
