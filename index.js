import express from 'express';
import morgan from 'morgan';
import productRoutes from './routes/productRoutes.js';
import userRoutes from './routes/userRoutes.js';
import mongoose from 'mongoose';
import fileUpload from 'express-fileupload';

const app = express();


//data base connect

mongoose.connect('mongodb+srv://rabyn900:moles900@cluster0.ikwdezp.mongodb.net/Shopify').then((val) => {

  app.listen(5000, () => {
    console.log('database connected and server is listening');
  });
}).catch((err) => {
  console.log(err);
});


//middleware
app.use(morgan('dev'));
app.use(express.json());
app.use(fileUpload({
  limits: { fileSize: 5 * 1024 * 1024 },
  abortOnLimit: true
}));

app.use(express.static('uploads'));


app.get('/', (req, res) => {

  return res.status(200).json({
    message: 'Welcome to Backened',
  });

});

app.use('/api/products', productRoutes);
app.use('/api/users', userRoutes);





//path define file
//response dine logic
// model banaune


