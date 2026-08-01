import { useState } from "react";
import ThankYouModal from "../ThankYouModal/ThankYouModal";
import { createOrder } from "../../services/orderService";

function OrderForm() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    city: "",
  });

  const [loading, setLoading] = useState(false);
  const [openModal, setOpenModal] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Phone Validation
    if (!/^[6-9]\d{9}$/.test(formData.phone)) {
      alert("Please enter a valid 10-digit mobile number.");
      return;
    }

    try {
      setLoading(true);

      const response = await createOrder(formData);

      console.log("Order Created:", response);

      setOpenModal(true);

      setFormData({
        name: "",
        phone: "",
        city: "",
      });
    } catch (error) {
      console.error(error);

      alert(
        error.response?.data?.message ||
          error.message ||
          "Failed to place order."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="space-y-5">

        {/* Full Name */}
        <div>
          <label className="mb-2 block font-medium text-[#16332B]">
            Full Name
          </label>

          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="e.g. Rahul Sharma"
            required
            className="w-full rounded-xl border border-gray-300 p-3 outline-none transition focus:border-[#16332B] focus:ring-2 focus:ring-green-200"
          />
        </div>

        {/* Phone */}
        <div>
          <label className="mb-2 block font-medium text-[#16332B]">
            Mobile Number
          </label>

          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="9876543210"
            maxLength={10}
            required
            className="w-full rounded-xl border border-gray-300 p-3 outline-none transition focus:border-[#16332B] focus:ring-2 focus:ring-green-200"
          />
        </div>

        {/* City */}
        <div>
          <label className="mb-2 block font-medium text-[#16332B]">
            City
          </label>

          <input
            type="text"
            name="city"
            value={formData.city}
            onChange={handleChange}
            placeholder="Ahmedabad"
            required
            className="w-full rounded-xl border border-gray-300 p-3 outline-none transition focus:border-[#16332B] focus:ring-2 focus:ring-green-200"
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={loading}
          className="w-full rounded-xl bg-[#8C2F39] py-4 text-lg font-semibold text-white transition hover:bg-[#722730] disabled:cursor-not-allowed disabled:opacity-70"
        >
          {loading ? "Submitting..." : "Order Now"}
        </button>

        {/* Trust Text */}
        <p className="text-center text-xs text-gray-500">
          🔒 Your information is 100% secure and will only be used to contact you about your order.
        </p>

      </form>

      <ThankYouModal
        isOpen={openModal}
        onClose={() => setOpenModal(false)}
      />
    </>
  );
}

export default OrderForm;