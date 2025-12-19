export default function Footer() {
  return (
    <footer className="w-full bg-[#224b11] pt-20 pb-12">
      {/* Cream Arch Card */}
      <div
        className="
          mx-auto
          max-w-[420px]
          bg-[#f7ffef]
          px-6
          pt-12
          pb-16
          rounded-t-3xl
          rounded-b-[220px]
          shadow-lg
        "
      >
        {/* SECTION: WHY SPECIAL */}
        <div className="mb-10">
          <h2 className="text-xl font-semibold text-[#224b11] mb-5 flex items-center gap-2">
            ✨ Why makes us special
          </h2>

          <ul className="space-y-4 text-[#224b11] text-sm leading-relaxed">
            <li className="flex gap-3">
              ☕ <span>Quality coffee, brewed right</span>
            </li>
            <li className="flex gap-3">
              🪑 <span>Comfortable seating & peaceful ambience</span>
            </li>
            <li className="flex gap-3">
              😊 <span>Friendly service that remembers you</span>
            </li>
            <li className="flex gap-3">
              🌿 <span>A perfect spot for daily coffee breaks</span>
            </li>
          </ul>
        </div>

        {/* DIVIDER */}
        <div className="h-[1px] bg-[#224b11]/20 my-8" />

        {/* SECTION: ABOUT */}
        <div>
          <h2 className="text-xl font-semibold text-[#224b11] mb-4 flex items-center gap-2">
            🏡 About Brewing Partners Café
          </h2>

          <p className="text-[#224b11] text-sm leading-relaxed">
            Brewing Partners Café is a cozy neighbourhood café in{" "}
            <span className="font-medium">Pimpri, Pune</span>, built around one
            simple idea —
            <span className="italic"> good coffee brings people together</span>.
            <br />
            <br />
            From carefully brewed cups to comforting café bites, Brewing
            Partners is a place where conversations flow as smoothly as the
            coffee.
            <br />
            <br />
            Whether you’re stopping by for a quick caffeine fix ⚡, catching up
            with friends 👥, or spending time working 💻 in a relaxed setting,
            the café offers a warm, welcoming atmosphere that feels familiar
            from the very first visit.
          </p>
        </div>

        {/* SMALL BRAND NOTE */}
        <div className="mt-10 text-center text-xs text-[#224b11]/70">
          Made with ☕ & ❤️ at Brewing Partners
        </div>
      </div>
    </footer>
  );
}
