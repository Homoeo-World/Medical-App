import express from 'express';
import Product from '../models/Product.js';
import dotenv from 'dotenv';
import fs from 'fs';

import { Storage } from '@google-cloud/storage';
import { Readable } from 'stream';

// Initialize storage
const storage = new Storage({
    // keyFilename: `/etc/secrets/credentials.json`
  keyFilename: `C:/Users/Gauri/FULL_STACK/credentials_hw.json`,
})

const bucketName = 'homoeo-world-medicine-images';
const bucket = storage.bucket(bucketName);



dotenv.config();

//post new product
export const postNewProduct = async (req, res) => {
    console.log('inside postNewProduct\n' + req.body);
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

let successfulUploads = 0;

export const uploadMedicineImagesPOC = async(req, res) =>{
    console.log('inside uploadMedicineImagesPOC...')

    const imageBlobs = req.body.data._j;
    const productImages = req.body.productImages;
    const productTitle = req.body.productTitle;

    console.log('productImages', productImages)
    console.log('productTitle', productTitle);

    if (!imageBlobs) {
        return res.status(400).json({ error: 'No image data found in the request.' });
    }

    for(let i=0;i<productImages.length;i++){
            const destinationFileName = `images/${productTitle}/${productImages[i].name}`;
            const fileUpload = bucket.file(destinationFileName);

            const imageBlob = imageBlobs[i]

            const stream = fileUpload.createWriteStream({});  

            stream.on('error', (err) => {
                console.error(`Error uploading file: ${err}`);
                if(successfulUploads === 0){
                    res.status(500).json({ error: 'Error uploading file.' });
                } 
            });

            stream.on('finish', () => {
                successfulUploads+=1;
                if(successfulUploads === productImages.length){
                    res.status(200).json('File uploaded successfully');
                    console.log(`All files uploaded to ${bucketName}.`); 
                }
                
            });

            // Create a readable stream from the file buffer
            const buffer = Buffer.from(imageBlob, 'base64');
            const readableStream = Readable.from([buffer]);
            readableStream.pipe(stream);
    }

}
