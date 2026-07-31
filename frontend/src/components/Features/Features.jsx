import { Leaf, ShieldCheck, HeartPulse } from "lucide-react";
import FeatureCard from "./FeatureCard";

const features = [
  {
    icon: <Leaf size={28} />,
    title: "Natural Herbs",
    description:
      "Made with carefully selected Ayurvedic herbs for better digestion."
  },
  {
    icon: <ShieldCheck size={28} />,
    title: "100% Safe",
    description:
      "No harmful chemicals. Pure Ayurvedic ingredients."
  },
  {
    icon: <HeartPulse size={28} />,
    title: "Healthy Digestion",
    description:
      "Supports digestion and reduces acidity, bloating and gas."
  }
];

function Features() {
  return (
    <section
      id="features"
      className="bg-white py-20"
    >
      <div className="mx-auto max-w-7xl px-6">

        <div className="mb-14 text-center">

          <p className="font-semibold uppercase tracking-widest text-[#8C2F39]">
            Why Choose Us
          </p>

          <h2 className="mt-4 text-4xl font-bold text-[#16332B]">
            Benefits You'll Love
          </h2>

        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">

          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}

        </div>

      </div>
    </section>
  );
}

export default Features;