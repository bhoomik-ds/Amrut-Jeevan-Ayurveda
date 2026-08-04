import {
  Leaf,
  ShieldCheck,
  Truck,
  BadgePercent,
  Star,
} from "lucide-react";

import heroImage from "../../assets/heroimg.webp";

function Hero() {
  return (
    <section
      id="hero"
      className="relative overflow-hidden bg-gradient-to-br from-[#FBF8F2] via-white to-[#F6FAF6] py-16 md:py-24"
    >
      <div className="mx-auto flex max-w-7xl flex-col-reverse items-center gap-16 px-6 lg:flex-row">

        {/* LEFT SIDE */}

        <div className="flex-1">

          {/* Badge */}

          <div className="inline-flex items-center gap-2 rounded-full bg-[#16332B] px-5 py-2 text-white shadow-lg">
            <Leaf size={18} />
            <span className="text-sm font-medium">
              ✅ 100% प्राकृतिक और हर्बल
            </span>
          </div>

          {/* Heading */}

          <h1 className="mt-7 text-3xl md:text-5xl font-bold leading-tight text-[#16332B]">
            क्या गुटखा, पान या खैनी 
            <br />
            के कारण मुँह खोलने या 
            <br />
             तीखा एवं गर्म खाने में हो
             <br /> रही है परेशानी?
          </h1>

          {/* Description */}

          <p className="mt-6 max-w-xl text-lg leading-9 text-gray-600">
            <strong>कैप्सूल और लिक्विड का यह शक्तिशाली डबल-एक्शन आयुर्वेदिक कॉम्बो </strong>
            मुँह की नसों की जकड़न (OSMF), दर्द और सूजन से राहत देने में
            सहायक है। यह गालों के लचीलेपन को बेहतर बनाने और मुँह खोलने
            की क्षमता को सुधारने में सहायता करता है।
          </p>

          {/* Price */}

          <div className="mt-8 flex flex-wrap items-center gap-4">

            <span className="text-5xl font-bold text-[#8C2F39]">
              ₹1499
            </span>

            <span className="text-2xl text-gray-400 line-through">
              ₹2999
            </span>

            <span className="rounded-full bg-green-100 px-4 py-2 text-sm font-bold text-green-700">
              ₹1500 की बचत
            </span>

          </div>

          {/* Button */}

          <a
            href="#order"
            className="mt-8 inline-flex items-center justify-center rounded-xl bg-[#8C2F39] px-10 py-4 text-lg font-semibold text-white shadow-xl transition duration-300 hover:-translate-y-1 hover:bg-[#722730]"
          >
            🛒 अभी ऑर्डर करें
          </a>

          {/* Rating */}

          <div className="mt-6 flex items-center gap-3">

            <div className="flex text-yellow-500">
              <Star fill="currentColor" size={18} />
              <Star fill="currentColor" size={18} />
              <Star fill="currentColor" size={18} />
              <Star fill="currentColor" size={18} />
              <Star fill="currentColor" size={18} />
            </div>

            <span className="font-medium text-gray-600">
              4.9/5 रेटिंग • हजारों संतुष्ट ग्राहक
            </span>

          </div>

          {/* Trust Cards */}

          <div className="mt-10 grid gap-4 sm:grid-cols-2">

            <div className="flex items-center gap-3 rounded-2xl border bg-white p-4 shadow-sm">
              <ShieldCheck className="text-green-700" />
              <span className="font-semibold">
                100% आयुर्वेदिक
              </span>
            </div>

            <div className="flex items-center gap-3 rounded-2xl border bg-white p-4 shadow-sm">
              <Truck className="text-green-700" />
              <span className="font-semibold">
                कैश ऑन डिलीवरी
              </span>
            </div>

            <div className="flex items-center gap-3 rounded-2xl border bg-white p-4 shadow-sm">
              <BadgePercent className="text-green-700" />
              <span className="font-semibold">
                सीमित समय का ऑफर
              </span>
            </div>

            <div className="flex items-center gap-3 rounded-2xl border bg-white p-4 shadow-sm">
              <ShieldCheck className="text-green-700" />
              <span className="font-semibold">
                सुरक्षित ऑर्डर
              </span>
            </div>

          </div>

        </div>

        {/* RIGHT SIDE */}

        <div className="flex flex-1 justify-center">

          <div className="relative">

            {/* Offer Badge */}

            <div className="absolute -right-6 -top-6 z-20 rounded-full bg-[#8C2F39] px-6 py-4 text-center text-white shadow-xl">

              <p className="text-xs font-semibold">
                विशेष ऑफर
              </p>

              <p className="text-2xl font-bold">
                ₹1499
              </p>

            </div>

            {/* Product Card */}

            <div className="rounded-[40px] border border-[#E9E4DA] bg-[#F7F4EE] p-8 shadow-2xl">

              <img
                src={heroImage}
                alt="Amrut Jeevan Ayurveda Anti Addiction Kit"
                className="w-full max-w-md object-contain transition duration-500 hover:scale-105"
              />

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

export default Hero;