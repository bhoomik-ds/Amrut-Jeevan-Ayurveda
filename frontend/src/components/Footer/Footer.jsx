import {
  PhoneCall,
  Mail,
  ShieldCheck,
  Truck,
  BadgeCheck,
} from "lucide-react";

function Footer() {
  return (
    <footer className="mt-10 bg-gradient-to-br from-[#16332B] via-[#21463C] to-[#0F241E] text-white">

      <div className="mx-auto max-w-7xl px-6 py-14">

        {/* Top */}

        <div className="grid gap-10 lg:grid-cols-3">

          {/* Brand */}

          <div>

            <h2 className="text-3xl font-bold">
              🌿 अमृत जीवन आयुर्वेद
            </h2>

            <p className="mt-5 leading-8 text-gray-300">
              मुँह की जकड़न (OSMF), दर्द और सूजन के लिए
              प्राकृतिक आयुर्वेदिक समाधान।
              पारंपरिक जड़ी-बूटियों पर आधारित विशेष
              डबल-एक्शन फ़ॉर्मूला।
            </p>

            <a
              href="#order"
              className="mt-6 inline-flex rounded-xl bg-[#8C2F39] px-6 py-3 font-semibold text-white transition hover:bg-[#722730]"
            >
              अभी ऑर्डर करें
            </a>

          </div>

          {/* Quick Links */}

          <div>

            <h3 className="mb-5 text-xl font-semibold">
              Quick Links
            </h3>

            <div className="space-y-3 text-gray-300">

              <a href="#hero" className="block hover:text-white">
                🏠 होम
              </a>

              <a href="#features" className="block hover:text-white">
                ✅ लाभ
              </a>

              <a href="#steps" className="block hover:text-white">
                ⚡ उपयोग विधि
              </a>

              <a href="#expert" className="block hover:text-white">
                👨‍⚕️ विशेषज्ञ
              </a>

              <a href="#reviews" className="block hover:text-white">
                ⭐ ग्राहक अनुभव
              </a>

              <a href="#order" className="block hover:text-white">
                🛒 ऑर्डर करें
              </a>

            </div>

          </div>

          {/* Contact */}

          <div>

            <h3 className="mb-5 text-xl font-semibold">
              संपर्क करें
            </h3>

            <div className="space-y-4 text-gray-300">

              <div className="flex items-center gap-3">

                <PhoneCall className="text-green-400" />

                <span>+91 8160601057</span>

              </div>

              

            </div>

            {/* Trust Cards */}

            <div className="mt-8 space-y-3">

              <div className="flex items-center gap-3 rounded-xl bg-white/10 p-3">

                <Truck size={20} className="text-yellow-300" />

                <span>पूरे भारत में डिलीवरी</span>

              </div>

              <div className="flex items-center gap-3 rounded-xl bg-white/10 p-3">

                <BadgeCheck size={20} className="text-yellow-300" />

                <span>कैश ऑन डिलीवरी उपलब्ध</span>

              </div>

              <div className="flex items-center gap-3 rounded-xl bg-white/10 p-3">

                <ShieldCheck size={20} className="text-yellow-300" />

                <span>100% सुरक्षित ऑर्डर</span>

              </div>

            </div>

          </div>

        </div>

        {/* Divider */}

        <div className="my-10 h-px bg-white/15"></div>

        {/* Bottom */}

        <div className="flex flex-col items-center justify-between gap-4 text-sm text-gray-400 md:flex-row">

          <p>
            © 2026 अमृत जीवन आयुर्वेद। सर्वाधिकार सुरक्षित।
          </p>

          <p>
            Made with ❤️ for Better Health
          </p>

        </div>

      </div>

    </footer>
  );
}

export default Footer;