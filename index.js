import express from 'express';
import morgan from 'morgan';
import productRoutes from './routes/productRoutes.js';

const app = express();

//middleware
app.use(morgan('dev'));
app.use(express.json());


app.get('/', (req, res) => {
  return res.status(200).json({
    message: 'Welcome to Backened',
  });

});

app.use(productRoutes);





//path define file
//response dine logic
// model banaune


app.listen(5000, () => {
  console.log('server is listening');
});