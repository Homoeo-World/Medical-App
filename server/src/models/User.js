import mongoose from 'mongoose';

const userSchema = mongoose.Schema({
    username: { //email
        type: String,
        unique: true,
        required: true
    },
    password:{
        type: String,
        required: true
    },
    address: [
        {
            type: String
        }
    ]
})

var User = mongoose.model('user', userSchema);

export default User;