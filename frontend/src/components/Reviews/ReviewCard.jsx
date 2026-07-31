function ReviewCard({ stars, review, name, city }) {
  return (
    <div className="bg-white border border-gray-200 rounded-3xl p-7 shadow-sm hover:shadow-lg transition">
      <div className="text-yellow-500 text-lg mb-3">
        {"★".repeat(stars)}
      </div>

      <p className="text-gray-600 leading-7 mb-5">
        "{review}"
      </p>

      <h4 className="font-bold text-[#16332B]">
        {name}, {city}
      </h4>
    </div>
  );
}

export default ReviewCard;