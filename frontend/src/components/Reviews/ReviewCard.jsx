import { Star, Quote, User } from "lucide-react";

function ReviewCard({
  name,
  city,
  stars,
  review,
}) {
  return (
    <div className="group relative overflow-hidden rounded-3xl border border-[#E8E4DA] bg-white p-7 shadow-md transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">

      {/* Top Accent */}
      <div className="absolute left-0 top-0 h-1 w-full bg-gradient-to-r from-[#16332B] via-[#2E5B4E] to-[#8C2F39]" />

      {/* Quote Icon */}
      <Quote
        size={42}
        className="absolute right-6 top-6 rotate-180 text-[#E9E9E9]"
        strokeWidth={1.5}
      />

      {/* Header */}
      <div className="flex items-start gap-5">

        {/* Premium Avatar */}
        <div className="flex-shrink-0">

          <div className="flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-[#D9E6DF] to-[#BFD2C8] shadow-lg ring-4 ring-white">

            <User
              size={40}
              className="text-[#16332B]"
              strokeWidth={2}
            />

          </div>

        </div>

        {/* Customer Info */}
        <div className="flex-1">

          <h3 className="text-xl font-bold text-[#16332B]">
            {name}
          </h3>

          <p className="mt-1 text-sm text-gray-500">
            📍 {city}
          </p>

          <div className="mt-2 flex items-center gap-2">

            <div className="flex text-[#F4B400]">
              {Array.from({ length: stars }).map((_, index) => (
                <Star
                  key={index}
                  size={16}
                  fill="currentColor"
                />
              ))}
            </div>

            <span className="text-sm font-semibold text-green-600">
              Verified Buyer
            </span>

          </div>

        </div>

      </div>

      {/* Divider */}
      <div className="my-6 h-px bg-gray-100"></div>

      {/* Review */}
      <p className="text-[16px] leading-8 text-gray-600 italic">
        "{review}"
      </p>

    </div>
  );
}

export default ReviewCard;