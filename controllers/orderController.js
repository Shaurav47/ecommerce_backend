import Order from "../models/Order.js";



export const getOrders = async (req, res) => {
  try {
    const orders = await Order.find({});
    return res.status(200).json(orders);
  } catch (err) {
    return res.status(400).json({ message: `${err}` });
  }
}


export const getUserOrders = async (req, res) => {

  try {
    const orders = await Order.find({ userId: req.userId });
    return res.status(200).json(orders);
  } catch (err) {

    return res.status(400).json({ message: `${err}` });

  }
}

export const createOrder = async (req, res) => {
  const { totalAmount, orderItems } = req.body;
  try {

    await Order.create({ totalAmount, orderItems, userId: req.userId });

    return res.status(200).json({ message: 'order created successfully' });

  } catch (err) {
    return res.status(400).json({ message: `${err}` });
  }
}