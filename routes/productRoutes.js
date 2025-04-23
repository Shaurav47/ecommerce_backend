import express from 'express';
import { addProduct, getProduct, getProducts, removeProduct, updateProduct } from '../controllers/productController.js';
import { notAllowed } from '../utils/notAllowed.js';

const router = express.Router();



router.route('/products').get(getProducts)
  .post(addProduct).all(notAllowed);


router.route('/produts/:id').get(getProduct).patch(updateProduct).delete(removeProduct);

export default router;












