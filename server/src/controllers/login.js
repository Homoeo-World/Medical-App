import express from 'express';
import mongoose from 'mongoose';
import bcrypt from 'bcrypt';

import Login from '../models/Login.js';

const router = express.Router();

//post login creds 
export const postLoginCreds = async (req, res) => {
    console.log('inside postLoginCreds')
    try{
        const { username, password } = req.body;

        const salt = await bcrypt.genSalt();
        const hashedPassword = await bcrypt.hash(req.body.password,salt);

        const creds = new Login({username: username, password: hashedPassword })

        await creds.save();
        res.status(201).json();
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
}

//authenticate 
// validate: username and pswd
export const validateCreds = async(req, res) => {
    console.log('inside validateCreds')
    const user = await Login.findOne({ username: req.body.username });

    if(user == null){
        return res.status(400).send('Cannot find user')
    }
    try{
        if(await bcrypt.compare(req.body.password, user.password)){
            res.status(200).send('Success')
        }
        else{
            res.status.send(200).send('Authentication failed!')
        }
    }catch{
        res.status(500).send()
    }

}

export default router;