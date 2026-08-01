import { useState } from "react";

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
      className="py-20 bg-[#FBF8F2]"
    >
      <div className="max-w-3xl mx-auto px-6">

        {/* Heading */}

        <div className="text-center mb-12">

          <p className="text-[#8C2F39] uppercase tracking-widest text-sm font-semibold">
            आपकी प्रतिक्रिया
          </p>

          <h2 className="mt-3 text-3xl md:text-4xl font-bold text-[#16332B]">
            अपना अनुभव साझा करें
          </h2>

          <p className="mt-4 text-gray-600">
            हमारे उत्पाद का उपयोग करने के बाद अपना अनुभव साझा करें।
            आपकी प्रतिक्रिया हमारे लिए बहुत महत्वपूर्ण है।
          </p>

        </div>

        {/* Form */}

        <div className="bg-[#F2E9D8] rounded-3xl p-8 md:p-10">

          <form onSubmit={handleSubmit}>

            {/* Name */}

            <div className="mb-5">

              <label className="block mb-2 font-medium text-gray-700">
                आपका नाम
              </label>

              <input
                type="text"
                placeholder="अपना नाम दर्ज करें"
                className="w-full rounded-xl border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#E8A33D]"
              />

            </div>

            {/* City */}

            <div className="mb-5">

              <label className="block mb-2 font-medium text-gray-700">
                आपका शहर
              </label>

              <input
                type="text"
                placeholder="अपना शहर दर्ज करें"
                className="w-full rounded-xl border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#E8A33D]"
              />

            </div>

            {/* Rating */}

            <div className="mb-5">

              <label className="block mb-3 font-medium text-gray-700">
                अपनी रेटिंग दें
              </label>

              <div className="flex gap-2 text-3xl">

                {[1, 2, 3, 4, 5].map((star) => (
                  <button
                    type="button"
                    key={star}
                    onClick={() => setRating(star)}
                    className={`${
                      star <= rating
                        ? "text-yellow-500"
                        : "text-gray-300"
                    }`}
                  >
                    ★
                  </button>
                ))}

              </div>

            </div>

            {/* Experience */}

            <div className="mb-6">

              <label className="block mb-2 font-medium text-gray-700">
                अपना अनुभव लिखें
              </label>

              <textarea
                rows="5"
                placeholder="अपने अनुभव के बारे में लिखें..."
                className="w-full resize-none rounded-xl border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#E8A33D]"
              />

            </div>

            {/* Submit */}

            <button
              type="submit"
              className="w-full rounded-xl bg-[#8C2F39] py-4 font-semibold text-white transition hover:bg-[#742730]"
            >
              प्रतिक्रिया भेजें
            </button>

          </form>

        </div>

      </div>
    </section>
  );
}

export default Feedback;