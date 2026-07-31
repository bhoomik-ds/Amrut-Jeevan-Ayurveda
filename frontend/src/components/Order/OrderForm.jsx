import { useState } from "react";
import ThankYouModal from "../ThankYouModal/ThankYouModal";
import { createOrder } from "../../services/orderService";

function OrderForm() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
  });

  const [openModal, setOpenModal] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    const response = await createOrder(formData);

    console.log("Order Created:", response);

    setOpenModal(true);

    // Clear the form
    setFormData({
      name: "",
      phone: "",
    });

  } catch (error) {
    console.error("Error:", error);

    alert("Failed to place order.");
  }
};

  return (
    <>
      <form
        onSubmit={handleSubmit}
        className="space-y-5"
      >
        {/* Full Name */}

        <div>
          <label className="mb-2 block font-medium">
            Full Name
          </label>

          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter Full Name"
            required
            className="w-full rounded-lg border p-3 outline-none focus:border-green-700"
          />
        </div>

        {/* Phone */}

        <div>
          <label className="mb-2 block font-medium">
            Phone Number
          </label>

          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="+91XXXXXXXXXX"
            required
            className="w-full rounded-lg border p-3 outline-none focus:border-green-700"
          />
        </div>

        {/* Button */}

        <button
          type="submit"
          className="w-full rounded-lg bg-[#8C2F39] py-4 font-semibold text-white transition hover:bg-[#722730]"
        >
          Order Now
        </button>
      </form>

      {/* Thank You Modal */}

      <ThankYouModal
        isOpen={openModal}
        onClose={() => setOpenModal(false)}
      />
    </>
  );
}

export default OrderForm;