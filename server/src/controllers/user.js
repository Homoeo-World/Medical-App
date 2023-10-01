import express from 'express';
import mongoose from 'mongoose';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken'
import dotenv  from "dotenv"

import User from '../models/User.js';

const router = express.Router();
dotenv.config()

//post login creds 
export const postLoginCreds = async (req, res) => {
    console.log('inside postLoginCreds')
    try{
        const { username, password, address } = req.body;

        const salt = await bcrypt.genSalt();
        const hashedPassword = await bcrypt.hash(password, salt);

        const creds = new User({username: username, password: hashedPassword, address: address })

        await creds.save();
        res.status(201).json('successfully user added!');
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
}

//authenticate 
// validate: username and pswd
export const validateCreds = async(req, res) => {
    console.log('inside validateCreds')
    const user = await User.findOne({ username: req.body.username });

    if(user == null){
        return res.status(400).send('Cannot find user')
    }
    try{
        if(await bcrypt.compare(req.body.password, user.password)){
            // Create a JWT and send it to the client
            const token = jwt.sign({user: user.username}, process.env.SECRET_KEY)

            res.status(200).json({token:token, message:'Success'})
        }
        else{
            res.status.send(200).send('Authentication failed!')
        }
    }catch{
        res.status(500).send()
    }

}

//jwt-testing
export const authTest = async(req, res) => {
    console.log('inside authTest...');

    // Accessible only if authenticated
    console.log(req.user)
    const user = req.user
    res.json({ message: 'Protected route accessed', user});
};

//GET addresses by username
export const getAddressesbyUser = async(req, res) => {
    console.log('inside getAddressesbyUser...');

    const user = await User.findOne({ username: req.body.username });

    if(user == null){
        return res.status(400).send('Cannot find user')
    }
   
    const addresses = user.address;
    console.log(addresses);

    res.status(200).json(addresses)

}
  

export default router;