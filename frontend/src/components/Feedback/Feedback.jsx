import { useState } from "react";

function Feedback() {
  const [rating, setRating] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();

    alert("Thank you! Your feedback has been received.");

    e.target.reset();
    setRating(0);
  };

  return (
    <section id="feedback" className="py-20 bg-[#FBF8F2]">
      <div className="max-w-3xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-12">
          <p className="text-[#8C2F39] uppercase tracking-widest text-sm font-semibold">
            Your Feedback
          </p>

          <h2 className="mt-3 text-3xl md:text-4xl font-bold text-[#16332B]">
            Share Your Experience
          </h2>
        </div>

        {/* Form */}
        <div className="bg-[#F2E9D8] rounded-3xl p-8 md:p-10">

          <form onSubmit={handleSubmit}>

            {/* Name */}
            <div className="mb-5">
              <label className="block mb-2 font-medium text-gray-700">
                Your Name
              </label>

              <input
                type="text"
                placeholder="Enter your name"
                className="w-full rounded-xl border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#E8A33D]"
              />
            </div>

            {/* City */}
            <div className="mb-5">
              <label className="block mb-2 font-medium text-gray-700">
                Your City
              </label>

              <input
                type="text"
                placeholder="Enter your city"
                className="w-full rounded-xl border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#E8A33D]"
              />
            </div>

            {/* Rating */}
            <div className="mb-5">
              <label className="block mb-3 font-medium text-gray-700">
                Rating
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
                Your Experience
              </label>

              <textarea
                rows="5"
                placeholder="Write your experience..."
                className="w-full rounded-xl border border-gray-300 px-4 py-3 resize-none focus:outline-none focus:ring-2 focus:ring-[#E8A33D]"
              />
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="w-full bg-[#8C2F39] hover:bg-[#742730] text-white font-semibold py-4 rounded-xl transition"
            >
              Submit Feedback
            </button>

          </form>

        </div>

      </div>
    </section>
  );
}

export default Feedback;