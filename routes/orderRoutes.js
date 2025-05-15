import express from 'express';
import { createOrder, getOrders, getUserOrders } from '../controllers/orderController.js';
import { adminCheck, userCheck } from '../middlewares/userCheck.js';
import { notAllowed } from '../utils/shareFunc.js';


const router = express.Router();


router.route('/').get(userCheck, adminCheck, getOrders)
  .post(userCheck, createOrder)
  .all(notAllowed);

router.route('/users').get(userCheck, getUserOrders);

export default router;