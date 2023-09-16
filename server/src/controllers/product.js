import express from 'express';
import Product from '../models/Product.js';
import dotenv from 'dotenv';
import fs from 'fs';

dotenv.config();
const Router = express.Router();

//post new product
export const postNewProduct = async (req, res) => {
    console.log('inside postNewProduct\n' + req.body);
    //impement mechanism for auto-increment of id   
    try{
        const newProduct =  new Product(req.body);
        await newProduct.save();
        res.status(201).json('data inserted');
    }
    catch(error){
        console.log('error while inserting data')
        res.status(500).json({ message: error.message });
    }
}

// get products based on search-query | search-term
export const searchAutocompleteProducts = async (req, res) => {
    console.log('searching for:-' + req.body.searchTerm);
    try {
        
        const searchResults = await Product.aggregate([
            {
                '$search': {
                    index: 'autoCompleteProducts',
                    "autocomplete": {
                      query: req.body.searchTerm,
                      path: 'title',
                      //fuzzy:{}
                    },
                }
            },
            { 
                "$project": {
                  "title": 1
                }
            },
            {
                "$limit": 9
            }
            ]);
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
        res.status(201).json(products);
    }
    catch(error){
        res.status(500).json({ message: error.message });
    }
    
}
