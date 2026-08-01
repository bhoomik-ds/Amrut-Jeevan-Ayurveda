import {
  ShieldCheck,
  Truck,
  PhoneCall,
  BadgeCheck,
} from "lucide-react";

import OrderForm from "./OrderForm";

function Order() {
  return (
    <section
      id="order"
      className="bg-gradient-to-b from-[#FBF8F2] to-white py-20"
    >
      <div className="mx-auto grid max-w-7xl gap-14 px-6 lg:grid-cols-2 lg:items-center">

        {/* Left Side */}

        <div>

          <span className="inline-flex items-center rounded-full bg-[#16332B] px-5 py-2 text-sm font-medium text-white">
            🌿 सीमित समय का विशेष ऑफर
          </span>

          <h2 className="mt-6 text-4xl font-bold leading-tight text-[#16332B] md:text-5xl">
            आज ही ऑर्डर करें
            <br />
            अमृत जीवन आयुर्वेद
            <br />
            OSMF केयर किट
          </h2>

          <p className="mt-6 text-lg leading-8 text-gray-600">
            नीचे अपनी जानकारी भरें। हमारा हेल्थ एक्सपर्ट जल्द ही
            आपको कॉल करके आपके ऑर्डर की पुष्टि करेगा और आपकी
            सभी जानकारी प्रदान करेगा।
          </p>

          {/* Benefits */}

          <div className="mt-8 space-y-5">

            <div className="flex items-center gap-4">
              <Truck className="text-green-700" />
              <span className="text-gray-700">
                पूरे भारत में तेज़ डिलीवरी
              </span>
            </div>

            <div className="flex items-center gap-4">
              <BadgeCheck className="text-green-700" />
              <span className="text-gray-700">
                100% प्राकृतिक एवं आयुर्वेदिक उत्पाद
              </span>
            </div>

            <div className="flex items-center gap-4">
              <PhoneCall className="text-green-700" />
              <span className="text-gray-700">
                15–30 मिनट के भीतर कॉल द्वारा पुष्टि
              </span>
            </div>

            <div className="flex items-center gap-4">
              <ShieldCheck className="text-green-700" />
              <span className="text-gray-700">
                सुरक्षित ऑर्डर एवं कैश ऑन डिलीवरी उपलब्ध
              </span>
            </div>

          </div>

          {/* Trust Box */}

          <div className="mt-10 rounded-2xl border border-green-100 bg-green-50 p-5">

            <h3 className="font-semibold text-[#16332B]">
              हमारे साथ ऑर्डर क्यों करें?
            </h3>

            <p className="mt-2 text-sm leading-7 text-gray-600">
              ✔ ऑनलाइन पेमेंट की आवश्यकता नहीं
              <br />
              ✔ विश्वसनीय आयुर्वेदिक फ़ॉर्मूला
              <br />
              ✔ आपकी जानकारी पूरी तरह सुरक्षित रखी जाती है।
            </p>

          </div>

        </div>

        {/* Right Side */}

        <div className="rounded-3xl bg-white p-8 shadow-2xl">

          <div className="mb-6 text-center">

            <h3 className="text-2xl font-bold text-[#16332B]">
              अभी ऑर्डर करें
            </h3>

            <p className="mt-2 text-gray-600">
              नीचे दिया गया फ़ॉर्म भरें, हमारी टीम जल्द ही
              आपसे संपर्क करेगी।
            </p>

          </div>

          <OrderForm />

          {/* Bottom Trust */}

          <div className="mt-6 border-t pt-5 text-center">

            <p className="text-sm text-gray-500">
              🔒 आपकी व्यक्तिगत जानकारी हमारे पास पूरी तरह सुरक्षित रहेगी।
            </p>

          </div>

        </div>

      </div>
    </section>
  );
}

export default Order;