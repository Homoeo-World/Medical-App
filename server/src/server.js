//index.js

import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import mongoose from'mongoose';
// import morgan from 'morgan';
import jwt from'jsonwebtoken';

import db from './db/db.js';
import config from './config/dev.js';
import userRoutes from './routes/user.js';
import productRoutes from './routes/product.js'
import medicineRoutes from './routes/medicine.js'
import orderRoutes from './routes/order.js'

const app = express();

app.use(bodyParser.urlencoded({limit: '50mb' , extended: true }));
app.use(bodyParser.json({limit: '50mb' }));
app.use(cors());
// app.use(morgan('dev'));

app.use('/login', userRoutes);
// app.use('/product', productRoutes);
app.use('/medicine', medicineRoutes)
app.use('/order', orderRoutes)

const port =  config.server.port || 3000;
app.listen(port);
console.log('Server started on port: ' + port);

export default app;




 // "node": ">=14 <15"
