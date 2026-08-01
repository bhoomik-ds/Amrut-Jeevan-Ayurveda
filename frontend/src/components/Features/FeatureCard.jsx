function FeatureCard({
  icon,
  title,
  description,
}) {
  return (
    <div
      className="
      group
      rounded-3xl
      border
      border-[#E7E7E7]
      bg-white
      p-8
      shadow-sm
      transition-all
      duration-300
      hover:-translate-y-2
      hover:border-[#16332B]
      hover:shadow-xl
    "
    >

      {/* Icon */}

      <div
        className="
        mb-6
        flex
        h-16
        w-16
        items-center
        justify-center
        rounded-2xl
        bg-[#16332B]
        text-white
        transition
        group-hover:scale-110
      "
      >
        {icon}
      </div>

      {/* Title */}

      <h3 className="mb-4 text-2xl font-bold text-[#16332B]">
        {title}
      </h3>

      {/* Description */}

      <p className="leading-8 text-gray-600">
        {description}
      </p>

    </div>
  );
}

export default FeatureCard;