function StepCard({ step, title, description }) {
  return (
    <div className="rounded-2xl border border-white/20 bg-white/10 p-8 backdrop-blur-sm">

      <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-yellow-400">
        Step {step}
      </p>

      <h3 className="mb-4 text-2xl font-bold text-white">
        {title}
      </h3>

      <p className="leading-7 text-gray-200">
        {description}
      </p>

    </div>
  );
}

export default StepCard;