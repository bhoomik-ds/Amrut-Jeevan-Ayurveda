function Footer() {
  return (
    <footer className="bg-[#16332B] text-white pt-12 pb-6 mt-5">
      <div className="max-w-7xl mx-auto px-6">
        {/* Top Footer */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 border-b border-white/20 pb-8">
          {/* Brand */}
          <div>
            <h2 className="text-2xl font-bold">Amrut Jeevan Ayurveda</h2>
          </div>

          {/* Links */}
          <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-300">
            <a href="#" className="hover:text-white transition">
              About Us
            </a>

            <a href="#" className="hover:text-white transition">
              Privacy Policy
            </a>

            <a href="#" className="hover:text-white transition">
              Contact Us
            </a>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="text-center text-sm text-gray-400 mt-6">
          © 2026 Vaidyam. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
}

export default Footer;
