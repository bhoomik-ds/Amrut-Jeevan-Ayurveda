function Expert() {
  return (
    <section id="expert" className="py-20 bg-[#FBF8F2]">
      <div className="max-w-7xl mx-auto px-6">

        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <p className="text-[#8C2F39] uppercase tracking-widest font-semibold text-sm">
            Expert Advice
          </p>

          <h2 className="mt-3 text-3xl md:text-4xl font-bold text-[#16332B]">
            Doctor's Recommendation
          </h2>
        </div>

        {/* Expert Card */}
        <div className="grid md:grid-cols-[140px_1fr] gap-8 items-center bg-white border border-gray-200 rounded-3xl p-10 shadow-sm">

          {/* Doctor Image */}
          <img
            src="https://images.unsplash.com/photo-1622253692010-333f2da6031d?q=80&w=300&auto=format&fit=crop"
            alt="Doctor"
            className="w-36 h-36 rounded-full object-cover mx-auto"
          />

          {/* Doctor Details */}
          <div>
            <blockquote className="text-lg leading-8 text-gray-700 mb-6 italic">
              "Digestive problems can often be improved within 15–20 days with
              consistent use of this two-step Ayurvedic treatment. Its
              double-action formula supports digestive health from both inside
              and outside."
            </blockquote>

            <h3 className="text-xl font-bold text-[#16332B]">
              Dr. John Smith
            </h3>

            <p className="text-gray-500 mt-1">
              Experience: 10+ Years
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}

export default Expert;