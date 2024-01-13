import express from 'express';
import Product from '../models/Product.js';
import dotenv from 'dotenv';
import fs from 'fs';

dotenv.config();

//post new product
export const postNewProduct = async (req, res) => {
    console.log('inside postNewProduct\n' + req.body.productData);
    const {productData } = req.body;
    console.log(productData);

    try{
        const newProduct =  new Product(productData);
        await newProduct.save();
        res.status(201).json('data inserted');
    }
    catch(error){
        console.log('error while inserting data', error)
        res.status(500).json({ message: error.message });
    }
}

// get products based on search-query | search-term
export const searchAutocompleteProducts = async (req, res) => {
    console.log('searching for:-' + req.query.searchTerm);
    try {
        
        const searchResults = await Product.aggregate([
            {
                '$search': {
                    index: 'autoCompleteProducts',
                    "autocomplete": {
                      query: req.query.searchTerm, //o, om, om
                      path: 'title',
                    //   fuzzy:{
                    //       maxEdits:2, //spelling mistake
                    //       maxExpansions: 1
                    //   }
                    },
                }
            },
            { 
                "$project": {
                  "title": 1,
                  "_id":0
                }
            },
            {
                "$limit": 9
            }
            ]);
            // console.log(searchResults)
        //send result of search query from mongodb
        res.status(200).json(searchResults);
    }
    catch(error){
        console.log('error')
        res.status(500).json({ message: error.message });
    }
}


//getAllproducts
export const getAllproducts = async (req,res) => {
    console.log('inside getAllproducts');
    try{
        const products = await Product.find();
        // console.log(products)
        res.status(201).json(products);
    }
    catch(error){
        res.status(500).json({ message: error.message });
    }  
}

//get paginated response
export const getProducts = async (req, res) => {
    console.log('getProducts...')
    console.log(req.query)
    try{
        const page = parseInt(req.query.page) || 1;
        const pageSize = parseInt(req.query.pageSize) || 10;

        const skip = (page-1)*pageSize;

        const products = await Product.find().skip(skip).limit(pageSize);

        res.json(products);
    }
    catch(error){
        console.error(error);
        res.status(500).json({ message: 'Server error' });
    }
}

//get Product by Title
export const getProductByTitle = async(req, res) => {
    console.log('getProductByTitle...');
    console.log(req.query)
    
    try{
        const product = await Product.findOne({title : req.query.title})
        // console.log(product);
        res.status(200).json(product);
    }
    catch(error){
        console.log(error)
        res.send(500).json(error);
    }
    
}
