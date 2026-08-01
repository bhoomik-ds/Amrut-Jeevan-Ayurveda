import {
  Leaf,
  ShieldCheck,
  HeartPulse,
  Sparkles,
  Truck,
  BadgeCheck,
} from "lucide-react";

import FeatureCard from "./FeatureCard";

const features = [
  {
    icon: <HeartPulse size={30} />,
    title: "मुँह खोलने में सहायता",
    description:
      "मुँह की जकड़न कम करने और मुँह खोलने की क्षमता को बेहतर बनाने में सहायक।",
  },
  {
    icon: <Leaf size={30} />,
    title: "100% प्राकृतिक और हर्बल",
    description:
      "चयनित आयुर्वेदिक जड़ी-बूटियों से तैयार, बिना किसी हानिकारक रसायन के।",
  },
  {
    icon: <Sparkles size={30} />,
    title: "दर्द व सूजन से राहत",
    description:
      "मुँह में दर्द, जलन और सूजन को कम करने में सहायक आयुर्वेदिक फ़ॉर्मूला।",
  },
  {
    icon: <ShieldCheck size={30} />,
    title: "रोज़ाना उपयोग के लिए सुरक्षित",
    description:
      "आयुर्वेदिक तत्वों से निर्मित, नियमित उपयोग के लिए उपयुक्त।",
  },
  {
    icon: <Truck size={30} />,
    title: "कैश ऑन डिलीवरी",
    description:
      "भारत के अधिकांश स्थानों पर कैश ऑन डिलीवरी की सुविधा उपलब्ध।",
  },
  {
    icon: <BadgeCheck size={30} />,
    title: "विश्वसनीय गुणवत्ता",
    description:
      "पारंपरिक आयुर्वेदिक सिद्धांतों के अनुसार गुणवत्ता पर विशेष ध्यान देकर तैयार।",
  },
];

function Features() {
  return (
    <section
      id="features"
      className="bg-gradient-to-b from-white to-[#FBF8F2] py-20"
    >
      <div className="mx-auto max-w-7xl px-6">

        <div className="mx-auto mb-14 max-w-3xl text-center">

          <span className="text-sm font-semibold uppercase tracking-[4px] text-[#8C2F39]">
            अमृत जीवन आयुर्वेद क्यों चुनें?
          </span>

          <h2 className="mt-4 text-4xl font-bold text-[#16332B]">
            मुँह की जकड़न (OSMF) के लिए प्राकृतिक आयुर्वेदिक समाधान
          </h2>

          <p className="mt-5 text-lg leading-8 text-gray-600">
            विशेष रूप से तैयार आयुर्वेदिक कैप्सूल और लिक्विड का डबल-एक्शन
            कॉम्बो, जो मुँह की जकड़न, दर्द और सूजन से राहत देने तथा
            मुँह खोलने की क्षमता में सुधार करने में सहायक है।
          </p>

        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              {...feature}
            />
          ))}
        </div>

      </div>
    </section>
  );
}

export default Features;