import express from 'express';
import { addProduct, getProduct, getProducts, getTop5, removeProduct, updateProduct } from '../controllers/productController.js';

import { fileCheck } from '../middlewares/checkFile.js';
import { notAllowed } from '../utils/shareFunc.js';
import { checkId } from '../middlewares/checkId.js';

const router = express.Router();





router.route('/products').get(getProducts)
  .post(fileCheck, addProduct).all(notAllowed);

router.route('/products/top-5').get(getTop5, getProducts).all(notAllowed);

router.route('/products/:id').get(getProduct).patch(checkId, updateProduct).delete(checkId, removeProduct).all(notAllowed);

export default router;












