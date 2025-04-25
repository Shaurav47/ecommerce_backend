import Product from "../models/Product.js";



export const getProducts = async (req, res) => {
  try {

    const products = await Product.find();
    return res.status(200).json(products);
  } catch (err) {
    return res.status(500).json({ message: `${err}` });
  }
}

export const getProduct = (req, res) => {
  return res.status(200).json({ message: 'addProducts' });
}



export const addProduct = async (req, res) => {
  const { title, description, price, image, category, brand } = req.body;
  try {


    await Product.create({
      title, description, price, image, category, brand
    });

    return res.status(200).json({ message: 'product added successfully' });
  } catch (err) {
    return res.status(400).json({ message: `${err}` });
  }
}




export const updateProduct = (req, res) => {
  return res.status(200).json({ message: 'addProducts' });
}
export const removeProduct = (req, res) => {
  return res.status(200).json({ message: 'addProducts' });
}