import ReviewCard from "./ReviewCard";

const reviews = [
  {
    id: 1,
    stars: 5,
    name: "Rajesh Sharma",
    city: "Patna",
    review:
      "I had suffered from acidity and gas for years. Within just 3 weeks of using Amrut Jeevan Ayurveda, my digestion improved significantly and I finally felt relief.",
  },
  {
    id: 2,
    stars: 5,
    name: "Priya Mehta",
    city: "Ahmedabad",
    review:
      "The discomfort after meals has almost disappeared. My stomach feels much lighter, healthier, and I can enjoy my daily food without acidity.",
  },
  {
    id: 3,
    stars: 5,
    name: "Sunil Pandya",
    city: "Surat",
    review:
      "I tried many medicines without success. This Ayurvedic kit started showing visible results in just 20 days. Highly recommended.",
  },
  {
    id: 4,
    stars: 5,
    name: "Ankita Rathore",
    city: "Bangalore",
    review:
      "Now I can enjoy heavy meals without stomach discomfort. A natural product with excellent results and no side effects.",
  },
];

function Reviews() {
  return (
    <section
      id="reviews"
      className="bg-gradient-to-b from-[#FBF8F2] to-white py-20"
    >
      <div className="mx-auto max-w-7xl px-6">

        {/* Heading */}
        <div className="mx-auto mb-14 max-w-2xl text-center">

          <span className="text-sm font-semibold uppercase tracking-[4px] text-[#8C2F39]">
            Customer Reviews
          </span>

          <h2 className="mt-4 text-4xl font-bold text-[#16332B]">
            Real Customer Experiences
          </h2>

          <p className="mt-4 text-gray-600">
            Trusted by hundreds of happy customers who experienced
            better digestion, reduced acidity, and a healthier life.
          </p>

        </div>

        {/* Cards */}

        <div className="grid gap-8 md:grid-cols-2">
          {reviews.map((review) => (
            <ReviewCard
              key={review.id}
              stars={review.stars}
              review={review.review}
              name={review.name}
              city={review.city}
            />
          ))}
        </div>

      </div>
    </section>
  );
}

export default Reviews;