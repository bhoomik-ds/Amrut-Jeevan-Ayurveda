function Footer() {
  return (
    <footer className="bg-[#16332B] text-white pt-12 pb-6 mt-5">
      <div className="max-w-7xl mx-auto px-6">

        {/* Top Footer */}

        <div className="flex flex-col md:flex-row justify-between items-center gap-6 border-b border-white/20 pb-8">

          {/* Brand */}

          <div className="text-center md:text-left">

            <h2 className="text-2xl font-bold">
              अमृत जीवन आयुर्वेद
            </h2>

            <p className="mt-3 max-w-md text-sm leading-6 text-gray-300">
              प्राकृतिक आयुर्वेदिक उपचार के माध्यम से
              मुँह की जकड़न (OSMF), दर्द और सूजन से राहत
              प्रदान करने हेतु समर्पित।
            </p>

          </div>

          {/* Links */}

          <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-300">

            <a
              href="#hero"
              className="transition hover:text-white"
            >
              होम
            </a>

            <a
              href="#features"
              className="transition hover:text-white"
            >
              लाभ
            </a>

            <a
              href="#expert"
              className="transition hover:text-white"
            >
              विशेषज्ञ
            </a>

            <a
              href="#reviews"
              className="transition hover:text-white"
            >
              ग्राहक अनुभव
            </a>

            <a
              href="#order"
              className="transition hover:text-white"
            >
              ऑर्डर करें
            </a>

          </div>

        </div>

        {/* Contact */}

        <div className="mt-8 text-center">

          <p className="text-gray-300">
            📞 +91 XXXXXXXXXX
          </p>

          <p className="mt-2 text-gray-300">
            📧 support@amrutjeevanayurveda.com
          </p>

        </div>

        {/* Bottom */}

        <div className="mt-8 border-t border-white/20 pt-6 text-center text-sm text-gray-400">

          © 2026 अमृत जीवन आयुर्वेद | सर्वाधिकार सुरक्षित।

        </div>

      </div>
    </footer>
  );
}

export default Footer;