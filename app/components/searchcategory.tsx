"use client";

export default function SearchBar({
  value,
  onChange,
}: {
  value: string;
  onChange: (v: string) => void;
}) {
  return (
    <div className="px-4 py-3">
      <input
        type="text"
        placeholder="Search dishes..."
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full px-4 py-3 rounded-xl border border-gray-300 outline-none focus:border-[#224b11]"
      />
    </div>
  );
}
