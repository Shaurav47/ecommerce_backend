import mongoose from "mongoose";



const productSchema = new mongoose.Schema({
  title: {
    type: String,
    minLength: [10, 'please provide minimum 10 characters'],
    required: true
  },
  description: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  image: {
    type: String,
    required: true
  },
  category: {
    type: String,
    enum: ["men's clothing", "women's clothing", "jewelery", "electronics"],
    required: true
  },
  brand: {
    type: String,
    enum: ["Apple", "Samsung", "Addidas", "Google", "Tanishq"],
    required: true
  }
}, { timestamps: true });



const Product = mongoose.model('Product', productSchema);

export default Product;


