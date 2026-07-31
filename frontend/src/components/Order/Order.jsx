import OrderForm from "./OrderForm";

function Order() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-10 items-center">
        {/* Left Side */}
        <div>
          <h2 className="text-4xl font-bold mb-4">
            Place Your Order
          </h2>

          <p className="text-gray-600 mb-6">
            Fill in your details and our team will contact you shortly to
            confirm your order.
          </p>

          <ul className="space-y-3 text-gray-700">
            <li>✅ Fast Delivery</li>
            <li>✅ 100% Natural Product</li>
            <li>✅ Cash on Delivery Available</li>
            <li>✅ Customer Support</li>
          </ul>
        </div>

        {/* Right Side */}
        <div className="bg-white rounded-xl shadow-lg p-8">
          <OrderForm />
        </div>
      </div>
    </section>
  );
}

export default Order;