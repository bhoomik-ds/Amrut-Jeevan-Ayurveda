function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-gray-200 bg-white/90 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#16332B] text-xl">
            🌿
          </div>

          <h1 className="text-2xl font-bold text-[#16332B]">
            Amrut Jeevan Ayurveda
          </h1>
        </div>

        {/* Navigation */}
        <nav className="hidden gap-8 font-medium text-gray-700 md:flex">
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
        </nav>

        {/* Button */}
        <a
          href="#order"
          className="rounded-lg bg-[#8C2F39] px-5 py-3 font-semibold text-white transition hover:bg-[#722730]"
        >
          Order Now
        </a>
      </div>
    </header>
  );
}

export default Header;
