//index.js

import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import mongoose from'mongoose';
// import morgan from 'morgan';
import jwt from'jsonwebtoken';

import db from './db/db.js';
import config from './config/dev.js';
import loginRoutes from './routes/login.js';
import productRoutes from './routes/product.js'

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());
// app.use(morgan('dev'));

app.use('/login', loginRoutes);
app.use('/product', productRoutes);

const port = process.env.PORT || config.server.port;
app.listen(port);
console.log('Server started on port: ' + port);

export default app;