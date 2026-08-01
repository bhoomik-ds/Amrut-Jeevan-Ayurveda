import { BadgeCheck, Leaf } from "lucide-react";

function Expert() {
  return (
    <section
      id="expert"
      className="bg-[#FBF8F2] py-20"
    >
      <div className="mx-auto max-w-7xl px-6">

        {/* Heading */}

        <div className="mx-auto mb-14 max-w-2xl text-center">

          <span className="text-sm font-semibold uppercase tracking-[4px] text-[#8C2F39]">
            विशेषज्ञ की सलाह
          </span>

          <h2 className="mt-4 text-4xl font-bold text-[#16332B]">
            आयुर्वेद विशेषज्ञों द्वारा अनुशंसित
          </h2>

          <p className="mt-4 text-lg text-gray-600">
            पारंपरिक आयुर्वेदिक सिद्धांतों पर आधारित विशेष हर्बल फ़ॉर्मूला,
            जो मुँह की जकड़न (OSMF), दर्द और सूजन से राहत देने में सहायक है।
          </p>

        </div>

        {/* Expert Card */}

        <div className="grid items-center gap-10 rounded-3xl border border-[#E8E8E8] bg-white p-10 shadow-xl md:grid-cols-[170px_1fr]">

          {/* Expert Image */}

          <img
            src="https://images.unsplash.com/photo-1622253692010-333f2da6031d?q=80&w=400&auto=format&fit=crop"
            alt="Ayurvedic Expert"
            className="mx-auto h-40 w-40 rounded-full object-cover shadow-lg"
          />

          {/* Content */}

          <div>

            <div className="mb-5 inline-flex items-center gap-2 rounded-full bg-green-100 px-4 py-2 text-sm font-medium text-green-700">
              <BadgeCheck size={18} />
              विशेषज्ञ द्वारा अनुशंसित
            </div>

            <blockquote className="text-lg italic leading-9 text-gray-700">
              "गुटखा, पान, खैनी और तंबाकू के लंबे समय तक सेवन से मुँह की
              जकड़न (OSMF) जैसी समस्याएँ हो सकती हैं। सही समय पर आयुर्वेदिक
              देखभाल और नियमित उपयोग से मुँह की कार्यक्षमता को बेहतर बनाने
              तथा दैनिक जीवन को अधिक आरामदायक बनाने में सहायता मिल सकती है।"
            </blockquote>

            {/* Expert Info */}

            <div className="mt-8">

              <h3 className="text-2xl font-bold text-[#16332B]">
                आयुर्वेद वेलनेस टीम
              </h3>

              <p className="mt-1 text-gray-500">
                पारंपरिक आयुर्वेदिक स्वास्थ्य मार्गदर्शन
              </p>

            </div>

            {/* Highlights */}

            <div className="mt-8 flex flex-wrap gap-5">

              <div className="flex items-center gap-2">
                <Leaf className="text-green-700" />
                <span>100% प्राकृतिक जड़ी-बूटियाँ</span>
              </div>

              <div className="flex items-center gap-2">
                <Leaf className="text-green-700" />
                <span>डबल-एक्शन आयुर्वेदिक फ़ॉर्मूला</span>
              </div>

              <div className="flex items-center gap-2">
                <Leaf className="text-green-700" />
                <span>मुँह की जकड़न (OSMF) में सहायक</span>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

export default Expert;