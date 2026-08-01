import ReviewCard from "./ReviewCard";

const reviews = [
  {
    id: 1,
    stars: 5,
    name: "राजेश कुमार",
    city: "पटना",
    review:
      "मैं पिछले कई वर्षों से गुटखा खाता था, जिससे मेरा मुँह ठीक से नहीं खुलता था। अमृत जीवन आयुर्वेद किट का नियमित उपयोग करने के बाद मुझे काफी आराम महसूस हुआ।",
  },
  {
    id: 2,
    stars: 5,
    name: "प्रिया शर्मा",
    city: "अहमदाबाद",
    review:
      "मुँह में जलन और तीखा खाना खाने में बहुत परेशानी होती थी। इस आयुर्वेदिक किट के उपयोग के बाद पहले से काफी सुधार महसूस हुआ।",
  },
  {
    id: 3,
    stars: 5,
    name: "सुनील पांडे",
    city: "सूरत",
    review:
      "मैंने कई उपचार किए लेकिन विशेष लाभ नहीं मिला। इस आयुर्वेदिक किट का नियमित उपयोग करने पर कुछ ही सप्ताह में सकारात्मक बदलाव महसूस हुआ।",
  },
  {
    id: 4,
    stars: 5,
    name: "अंकिता राठौर",
    city: "बेंगलुरु",
    review:
      "अब मुझे मुँह खोलने में पहले जैसी परेशानी नहीं होती। प्राकृतिक आयुर्वेदिक उत्पाद होने के कारण इसका उपयोग करके अच्छा अनुभव रहा।",
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
            ग्राहकों के अनुभव
          </span>

          <h2 className="mt-4 text-4xl font-bold text-[#16332B]">
            हमारे संतुष्ट ग्राहकों की राय
          </h2>

          <p className="mt-4 text-gray-600">
            अनेक ग्राहकों ने नियमित उपयोग के बाद सकारात्मक अनुभव साझा किए हैं।
            पढ़िए उनके अनुभव।
          </p>

        </div>

        {/* Review Cards */}

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