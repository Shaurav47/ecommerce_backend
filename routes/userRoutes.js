import express from 'express';
import { notAllowed } from '../utils/shareFunc.js';
import { getUserProfile, login, register, updateProfile } from '../controllers/userController..js';
import { loginSchema, registerSchema, validates } from '../utils/validator.js';
import { userCheck } from '../middlewares/userCheck.js';




const router = express.Router();


router.route('/login').post(validates.body(loginSchema), login).all(notAllowed);
router.route('/register').post(validates.body(registerSchema), register).all(notAllowed);
router.route('/profile').get(userCheck, getUserProfile).patch(userCheck, updateProfile).all(notAllowed);


export default router;