import { useState } from "react";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="sticky top-0 z-50 border-b border-gray-200 bg-white/90 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#16332B] text-xl">
            🌿
          </div>

          <h1 className="text-xl font-bold text-[#16332B] md:text-2xl">
            Amrut Jeevan Ayurveda
          </h1>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-8 font-medium text-gray-700 md:flex">
          <a href="#hero" className="hover:text-green-800">
            Home
          </a>

          <a href="#features" className="hover:text-green-800">
            Benefits
          </a>

          <a href="#steps" className="hover:text-green-800">
            Process
          </a>

          <a href="#expert" className="hover:text-green-800">
            Expert
          </a>

          <a href="#reviews" className="hover:text-green-800">
            Reviews
          </a>

          <a
            href="#order"
            className="rounded-lg bg-[#8C2F39] px-5 py-3 font-semibold text-white transition hover:bg-[#722730]"
          >
            Order Now
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="text-3xl text-[#16332B] md:hidden"
        >
          {menuOpen ? "✕" : "☰"}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="border-t border-gray-200 bg-white md:hidden">
          <nav className="flex flex-col p-5">
            <a href="#hero" onClick={closeMenu} className="py-3 font-medium">
              Home
            </a>

            <a
              href="#features"
              onClick={closeMenu}
              className="py-3 font-medium"
            >
              Benefits
            </a>

            <a href="#steps" onClick={closeMenu} className="py-3 font-medium">
              Process
            </a>

            <a href="#expert" onClick={closeMenu} className="py-3 font-medium">
              Expert
            </a>

            <a href="#reviews" onClick={closeMenu} className="py-3 font-medium">
              Reviews
            </a>

            <a
              href="#order"
              onClick={closeMenu}
              className="mt-4 rounded-lg bg-[#8C2F39] px-5 py-3 text-center font-semibold text-white"
            >
              Order Now
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}

export default Header;
