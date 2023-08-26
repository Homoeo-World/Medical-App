import mongoose from 'mongoose';

const loginSchema = mongoose.Schema({
    username: {
        type: String,
        unique: true.valueOf,
        required: true
    },
    password:{
        type:String,
        required: true
    }
})

var Login = mongoose.model('login', loginSchema);

export default Login;