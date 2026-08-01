function ReviewCard({ stars, review, name, city }) {
  return (
    <div className="rounded-2xl bg-white p-6 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl">

      {/* Header */}
      <div className="flex items-start justify-between">

        {/* Left Side */}
        <div className="flex items-center gap-4">

          {/* Avatar */}
          <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#4F8EF7] text-2xl text-white">
            👤
          </div>

          {/* Name */}
          <div>
            <h3 className="text-lg font-semibold text-[#16332B]">
              {name}
            </h3>

            <p className="text-sm text-gray-500">
              @{city.toLowerCase().replace(/\s+/g, "")}
            </p>
          </div>

        </div>

        {/* Stars */}
        <div className="text-lg text-yellow-400">
          {"★".repeat(stars)}
        </div>

      </div>

      {/* Review */}
      <p className="mt-6 text-[15px] leading-8 text-gray-600">
        {review}
      </p>

    </div>
  );
}

export default ReviewCard;