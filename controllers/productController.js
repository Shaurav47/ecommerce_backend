import Product, { brands, categories } from "../models/Product.js";
import fs from 'fs';


export const getTop5 = (req, res, next) => {
  req.query.rating = { $gt: 4.5 };
  req.query.limit = 5;
  next();
}


export const getProducts = async (req, res) => {
  try {

    const queryObject = { ...req.query };
    const excludeFields = ['sort', 'page', 'limit', 'fields', 'skip', 'search']

    excludeFields.forEach((label) => delete queryObject[label])

    // let qryStr = JSON.stringify(queryObject);
    // // Replace "gt", "gte", "lt", "lte", "eq" inside the keys
    // qryStr = qryStr.replace(/\[(gte|gt|lte|lt|eq)\]/g, (_, operator) => `":{"$${operator}":`);

    // console.log(qryStr);


    let query = Product.find(queryObject);


    if (req.query.search) {

      const searchText = req.query.search.toLowerCase();
      if (categories.includes(searchText)) {
        queryObject.category = { $regex: searchText, $options: 'i' };
      } else if (brands.includes(searchText)) {
        queryObject.brand = { $regex: searchText, $options: 'i' };
      } else {
        queryObject.title = { $regex: searchText, $options: 'i' };
      }


    }

    if (req.query.sort) {
      const sorting = req.query.sort.split(/[\s,]+/).filter(Boolean).join(' ');
      query.sort(sorting);
    }


    if (req.query.fields) {
      const selects = req.query.fields.split(/[\s,]+/).filter(Boolean).join(' ');
      query.select(selects);
    }

    const page = req.query.page || 1;
    const limit = req.query.limit || 10;
    const skip = (page - 1) * 10;


    const products = await query.skip(skip).limit(limit).select('title rating price image');


    return res.status(200).json(products);
  } catch (err) {
    return res.status(500).json({ message: `${err}` });
  }
}

export const getProduct = (req, res) => {
  try {
    return res.status(200).json(req.product);
  } catch (err) {
    return res.status(500).json({ message: `${err}` });
  }
}



export const addProduct = async (req, res) => {
  const { title, description, price, category, brand } = req.body;
  try {
    await Product.create({
      title,
      description,
      price,
      image: req.image,
      category,
      brand
    });
    return res.status(200).json({ message: 'product added successfully' });
  } catch (err) {
    fs.unlink(`./uploads${req.image}`, (imageErr) => {
      return res.status(400).json({ message: `${err}` });
    });


  }
}




export const updateProduct = async (req, res) => {
  const product = req.product;
  const { title, description, price, category, brand } = req.body;
  try {

    product.title = title || product.title;
    product.description = description || product.description;
    product.price = price || product.price;
    product.category = category || product.category;
    product.brand = brand || product.brand;
    if (req.image) {
      fs.unlink(`./uploads${product.image}`, async (err) => {
        product.image = req.image;
        await product.save();
      })
    } else {
      await product.save();
    }

    return res.status(200).json({ message: 'product updated successfully' });
  } catch (err) {
    fs.unlink(`./uploads${req.image}`, (imageErr) => {
      return res.status(400).json({ message: `${err}` });
    });


  }
}










export const removeProduct = async (req, res) => {
  const product = req.product;
  try {
    fs.unlink(`./uploads${product.image}`, async (imageErr) => {
      if (imageErr) return res.status(400).json({ message: `${imageErr}` });
      await Product.findByIdAndDelete(product._id);
    })
    return res.status(200).json({ message: 'product removed successfully' });
  } catch (err) {
    return res.status(400).json({ message: `${err}` });

  }
}
