import ReviewCard from "./ReviewCard";

const reviews = [
  {
    id: 1,
    stars: 5,
    name: "Rajesh Sharma",
    city: "Patna",
    review:
      "I had suffered from acidity and gas for years. Within 3 weeks of using this kit, I noticed a significant improvement.",
  },
  {
    id: 2,
    stars: 5,
    name: "Priya Mehta",
    city: "Ahmedabad",
    review:
      "The discomfort after meals has almost disappeared. My stomach feels much lighter than before.",
  },
  {
    id: 3,
    stars: 5,
    name: "Sunil Pandya",
    city: "Surat",
    review:
      "I tried many medicines without success. This kit started showing results in just 20 days.",
  },
  {
    id: 4,
    stars: 5,
    name: "Ankita Rathore",
    city: "Bangalore",
    review:
      "Now I can enjoy heavy meals without stomach discomfort. A very effective product.",
  },
];

function Reviews() {
  return (
    <section id="reviews" className="py-20 bg-[#FBF8F2]">
      <div className="max-w-7xl mx-auto px-6">

        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <p className="text-[#8C2F39] uppercase tracking-widest text-sm font-semibold">
            Customer Reviews
          </p>

          <h2 className="mt-3 text-3xl md:text-4xl font-bold text-[#16332B]">
            Real Customer Experiences
          </h2>
        </div>

        {/* Review Cards */}
        <div className="grid md:grid-cols-2 gap-6">
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