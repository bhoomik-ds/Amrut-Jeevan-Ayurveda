import axios from "axios";
import Order from "../models/Order.js";

// ============================
// Create New Order
// ============================
export const createOrder = async (req, res) => {
  try {
    const { name, phone, city } = req.body;

    if (!name || !phone || !city) {
      return res.status(400).json({
        success: false,
        message: "All fields are required.",
      });
    }

    // Save in MongoDB
    const order = await Order.create({
      name,
      phone,
      city,
    });

    // Send to Google Sheets
    try {
      await axios.post(
        "https://script.google.com/macros/s/AKfycbxvBjK_j2ifO89-shq7AKeQ2qTJuV87T4ya_HOd9uVfC3dtjNvJZrVuD43mmtrY12i_Qg/exec",
        {
          name,
          phone,
          city,
        }
      );

      console.log("✅ Order sent to Google Sheets");
    } catch (sheetError) {
      console.error("Google Sheets Error:", sheetError.message);
    }

    res.status(201).json({
      success: true,
      message: "Order created successfully.",
      data: order,
    });

  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,
      message: "Server Error",
    });
  }
};
// ============================
// Get All Orders
// ============================
export const getOrders = async (req, res) => {
  try {
    const orders = await Order.find().sort({ createdAt: -1 });

    res.status(200).json({
      success: true,
      count: orders.length,
      data: orders,
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,
      message: "Server Error",
    });
  }
};

// ============================
// Delete Order
// ============================
export const deleteOrder = async (req, res) => {
  try {
    const { id } = req.params;

    const order = await Order.findById(id);

    if (!order) {
      return res.status(404).json({
        success: false,
        message: "Order not found",
      });
    }

    await Order.findByIdAndDelete(id);

    res.status(200).json({
      success: true,
      message: "Order deleted successfully",
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,
      message: "Server Error",
    });
  }
};