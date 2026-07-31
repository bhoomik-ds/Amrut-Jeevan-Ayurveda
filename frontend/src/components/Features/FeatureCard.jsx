function FeatureCard({ icon, title, description }) {
  return (
    <div className="rounded-2xl border border-gray-200 bg-white p-8 shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-lg">

      <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-xl bg-[#16332B] text-white">
        {icon}
      </div>

      <h3 className="mb-3 text-2xl font-bold text-[#16332B]">
        {title}
      </h3>

      <p className="leading-7 text-gray-600">
        {description}
      </p>

    </div>
  );
}

export default FeatureCard;