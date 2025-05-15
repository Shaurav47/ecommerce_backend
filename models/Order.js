import mongoose from "mongoose";

const orderScnema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  totalAmount: {
    type: Number,
    required: true
  },
  orderItems: [
    {
      title: {
        type: String,
        required: true
      },
      image: {
        type: String,
        required: true
      },
      price: {
        type: Number,
        required: true
      },
      quantity: {
        type: Number,
        required: true
      }

    }
  ]

}, { timestamps: true });

const Order = mongoose.model('Order', orderScnema);
export default Order;