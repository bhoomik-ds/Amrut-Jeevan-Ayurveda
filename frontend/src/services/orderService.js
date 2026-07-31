import api from "../api/api";

// Create Order
export const createOrder = async (orderData) => {
  const response = await api.post("/orders", orderData);
  return response.data;
};

// Get All Orders
export const getOrders = async () => {
  const response = await api.get("/orders");
  return response.data;
};

// Delete Order
export const deleteOrder = async (id) => {
  const response = await api.delete(`/orders/${id}`);
  return response.data;
};