import StepCard from "./StepCard";

const steps = [
  {
    step: "01",
    title: "Herbal Capsules",
    description:
      "Take one capsule after breakfast and dinner. It helps balance stomach acid and improves digestion."
  },
  {
    step: "02",
    title: "Herbal Powder",
    description:
      "Take the herbal powder with warm water before sleeping. It helps clean the digestive system and reduces bloating."
  }
];

function Process() {
  return (
    <section
      id="steps"
      className="bg-[#16332B] py-20"
    >
      <div className="mx-auto max-w-7xl px-6">

        <div className="mb-14 text-center">

          <p className="font-semibold uppercase tracking-widest text-yellow-400">
            How It Works
          </p>

          <h2 className="mt-4 text-4xl font-bold text-white">
            2-Step Ayurvedic Treatment
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-gray-300">
            A simple two-step routine that supports digestion and helps reduce acidity naturally.
          </p>

        </div>

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