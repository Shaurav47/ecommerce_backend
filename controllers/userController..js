import User from "../models/User.js";
import bcrypt from 'bcrypt';

export const login = async (req, res) => {
  const { email, password } = req.body;
  try {

  } catch (err) {

  }

}
export const register = async (req, res) => {
  const { username, email, password } = req.body;
  try {
    const isExist = await User.findOne({ email: email });
    if (isExist) return res.status(409).json({ message: 'user already exist' });
    const hashPass = bcrypt.hashSync(password, 10);
    await User.create({ username, email, password: hashPass });
    return res.status(200).json({ message: 'user registered successfully' });
  } catch (err) {
    return res.status(400).json({ message: `${err}` });
  }

}
