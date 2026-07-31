import { Leaf, ShieldCheck } from "lucide-react";

function Hero() {
  return (
    <section
      id="hero"
      className="bg-[#FBF8F2] py-16 md:py-24"
    >
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-12 px-6 lg:flex-row">

        {/* Left Side */}
        <div className="flex-1">

          {/* Badge */}
          <div className="inline-flex items-center gap-2 rounded-full bg-[#16332B] px-5 py-2 text-white">
            <Leaf size={18} />
            <span className="text-sm font-medium">
              100% Natural & Ayurvedic
            </span>
          </div>

          {/* Heading */}
          <h1 className="mt-6 text-4xl font-bold leading-tight text-[#16332B] md:text-6xl">
            Relief from Gas,
            <br />
            Acidity &
            <br />
            Indigestion
          </h1>

          {/* Description */}
          <p className="mt-6 max-w-xl text-lg leading-8 text-gray-600">
            A powerful Ayurvedic formula made with natural herbs that helps
            improve digestion, reduce acidity, and keep your stomach healthy.
          </p>

          {/* Price */}
          <div className="mt-8 flex items-center gap-4">
            <span className="text-4xl font-bold text-[#8C2F39]">
              ₹899
            </span>

            <span className="text-2xl text-gray-400 line-through">
              ₹1499
            </span>
          </div>

          {/* Button */}
          <button
            className="mt-8 rounded-xl bg-[#8C2F39] px-8 py-4 text-lg font-semibold text-white transition hover:scale-105"
          >
            Order Now
          </button>

          {/* Trust */}
          <div className="mt-10 flex flex-wrap gap-6">

            <div className="flex items-center gap-2">
              <ShieldCheck className="text-green-700" />
              <span>100% Ayurvedic</span>
            </div>

            <div className="flex items-center gap-2">
              <ShieldCheck className="text-green-700" />
              <span>10,000+ Happy Customers</span>
            </div>

          </div>

        </div>

        {/* Right Side */}

        <div className="flex flex-1 justify-center">

          <img
            src="https://images.unsplash.com/photo-1512069772995-ec65ed45afd6?q=80&w=900&auto=format&fit=crop"
            alt="Ayurvedic Product"
            className="w-full max-w-md rounded-3xl shadow-2xl"
          />

        </div>

      </div>
    </section>
  );
}

export default Hero;