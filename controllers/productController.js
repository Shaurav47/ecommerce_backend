import Product, { brands, categories } from "../models/Product.js";

export const getProducts = async (req, res) => {
  try {

    const queryObject = { ...req.query };
    const excludeFields = ['sort', 'page', 'limit', 'fields', 'skip', 'search']

    excludeFields.forEach((label) => delete queryObject[label])
    delete queryObject['sort'];
    //let qryStr = JSON.stringify(queryObject);
    // qryStr = qryStr.replace(/\b(gte|gt|lte|lt|eq)\b/g, match => `$${match}`);
    // console.log(JSON.parse(qryStr));
    // console.log(queryObject);
    // {rating: {$gt: 4}}


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

    let query = Product.find(queryObject);




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


    const products = await query.skip(skip).limit(limit);


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
