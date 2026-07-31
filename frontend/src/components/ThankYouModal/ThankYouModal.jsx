import { CheckCircle2 } from "lucide-react";

function ThankYouModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 px-4">

      <div className="w-full max-w-md rounded-3xl bg-white p-8 text-center shadow-2xl">

        <CheckCircle2
          size={70}
          className="mx-auto text-green-600"
        />

        <h2 className="mt-6 text-3xl font-bold text-[#16332B]">
          Thank You!
        </h2>

        <p className="mt-4 text-gray-600">
          Your order has been submitted successfully.
          <br />
          Our team will contact you shortly.
        </p>

        <button
          onClick={onClose}
          className="mt-8 w-full rounded-xl bg-[#8C2F39] py-4 font-semibold text-white hover:bg-[#722730]"
        >
          Close
        </button>

      </div>

    </div>
  );
}

export default ThankYouModal;