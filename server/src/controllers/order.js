import express from 'express';
import Order from '../models/Order.js';


//post new product
export const postOrderDetails = async (req, res) => {
    console.log('postOrderDetails...', req.body)

    const orderDetails = req.body
    console.log('orderDetails', orderDetails)

    try{
        const newOrder = new Order(orderDetails)
        await newOrder.save();
        res.status(201).json('order details inserted')
    }
    catch(error){
        console.log('error while inserting the order details')
        res.status(500).json({"message":error.message})
    }
}

// get all orders for order history
export const getAllOrders = async (req, res) => {
    console.log('getAllOrders...')

    try{
        const orderHistory = await Order.find({})
        console.log('orderHistory', orderHistory)
        res.status(200).json(orderHistory)
    }
    catch(error){
        console.log('Error getting order history')
        res.status(500).json({"message":error.message})
    }
}



