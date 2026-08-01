import StepCard from "./StepCard";

const steps = [
  {
    step: "01",
    title: "हर्बल कैप्सूल",
    description:
      "रोज़ सुबह नाश्ते के बाद और रात के भोजन के बाद 1-1 कैप्सूल लें। यह मुँह की जकड़न, दर्द और सूजन को कम करने में सहायक है।",
  },
  {
    step: "02",
    title: "हर्बल लिक्विड",
    description:
      "दिए गए निर्देशानुसार हर्बल लिक्विड का नियमित उपयोग करें। यह गालों के लचीलेपन को बेहतर बनाने और मुँह खोलने की क्षमता में सुधार करने में सहायता करता है।",
  },
];

function Process() {
  return (
    <section
      id="steps"
      className="bg-[#16332B] py-20"
    >
      <div className="mx-auto max-w-7xl px-6">

        {/* Section Heading */}

        <div className="mb-14 text-center">

          <p className="font-semibold uppercase tracking-widest text-yellow-400">
            उपयोग करने की विधि
          </p>

          <h2 className="mt-4 text-4xl font-bold text-white">
            2-स्टेप आयुर्वेदिक उपचार
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-gray-300">
            कैप्सूल और हर्बल लिक्विड का यह आसान 2-स्टेप रूटीन
            मुँह की जकड़न (OSMF), दर्द और सूजन से राहत देने तथा
            मुँह खोलने की क्षमता को बेहतर बनाने में सहायक है।
          </p>

        </div>

        {/* Steps */}

        <div className="grid gap-8 md:grid-cols-2">

          {steps.map((item) => (
            <StepCard
              key={item.step}
              step={item.step}
              title={item.title}
              description={item.description}
            />
          ))}

        </div>

      </div>
    </section>
  );
}

export default Process;