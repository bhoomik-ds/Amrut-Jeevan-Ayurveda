import { useState } from "react";
import {
  User,
  MapPin,
  MessageSquare,
  Send,
  ShieldCheck,
  Star,
} from "lucide-react";

function Feedback() {
  const [rating, setRating] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();

    alert("धन्यवाद! आपकी प्रतिक्रिया सफलतापूर्वक प्राप्त हो गई है।");

    e.target.reset();
    setRating(0);
  };

  return (
    <section
      id="feedback"
      className="bg-gradient-to-b from-[#FBF8F2] to-white py-24"
    >
      <div className="mx-auto max-w-5xl px-6">

        {/* Heading */}

        <div className="mb-14 text-center">

          <span className="rounded-full bg-[#16332B]/10 px-5 py-2 text-sm font-semibold text-[#16332B]">
            ⭐ आपकी प्रतिक्रिया
          </span>

          <h2 className="mt-5 text-4xl font-bold text-[#16332B]">
            अपना अनुभव साझा करें
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-lg leading-8 text-gray-600">
            आपके अनुभव से अन्य लोगों को सही निर्णय लेने में सहायता मिलेगी।
          </p>

        </div>

        {/* Card */}

        <div className="rounded-[32px] border border-[#ECE7DD] bg-white p-8 shadow-2xl md:p-12">

          <form
            onSubmit={handleSubmit}
            className="space-y-7"
          >

            {/* Name */}

            <div>

              <label className="mb-3 flex items-center gap-2 font-semibold text-[#16332B]">

                <User size={18} />

                आपका नाम

              </label>

              <input
                type="text"
                placeholder="अपना पूरा नाम दर्ज करें"
                className="w-full rounded-2xl border border-gray-200 bg-gray-50 px-5 py-4 transition focus:border-[#16332B] focus:bg-white focus:outline-none"
              />

            </div>

            {/* City */}

            <div>

              <label className="mb-3 flex items-center gap-2 font-semibold text-[#16332B]">

                <MapPin size={18} />

                आपका शहर

              </label>

              <input
                type="text"
                placeholder="अपना शहर दर्ज करें"
                className="w-full rounded-2xl border border-gray-200 bg-gray-50 px-5 py-4 transition focus:border-[#16332B] focus:bg-white focus:outline-none"
              />

            </div>

            {/* Rating */}

            <div>

              <label className="mb-4 font-semibold text-[#16332B] block">
                अपनी रेटिंग दें
              </label>

              <div className="flex gap-3">

                {[1, 2, 3, 4, 5].map((star) => (

                  <button
                    key={star}
                    type="button"
                    onClick={() => setRating(star)}
                    className="transition hover:scale-125"
                  >

                    <Star
                      size={34}
                      fill={
                        star <= rating
                          ? "#FACC15"
                          : "transparent"
                      }
                      className={
                        star <= rating
                          ? "text-yellow-400"
                          : "text-gray-300"
                      }
                    />

                  </button>

                ))}

              </div>

            </div>

            {/* Review */}

            <div>

              <label className="mb-3 flex items-center gap-2 font-semibold text-[#16332B]">

                <MessageSquare size={18} />

                अपना अनुभव

              </label>

              <textarea
                rows="5"
                placeholder="अपने अनुभव के बारे में लिखें..."
                className="w-full resize-none rounded-2xl border border-gray-200 bg-gray-50 px-5 py-4 transition focus:border-[#16332B] focus:bg-white focus:outline-none"
              />

            </div>

            {/* Submit */}

            <button
              type="submit"
              className="flex w-full items-center justify-center gap-3 rounded-2xl bg-gradient-to-r from-[#8C2F39] to-[#A83D48] py-4 text-lg font-semibold text-white shadow-xl transition hover:scale-[1.02]"
            >

              <Send size={20} />

              प्रतिक्रिया भेजें

            </button>

          </form>

          {/* Bottom */}

          <div className="mt-8 rounded-2xl bg-green-50 p-5">

            <div className="flex items-center gap-3 text-green-700">

              <ShieldCheck size={22} />

              <span className="font-medium">
                आपकी व्यक्तिगत जानकारी पूरी तरह सुरक्षित रखी जाएगी।
              </span>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

export default Feedback;