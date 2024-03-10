import mongoose from 'mongoose';

const medicineSchema = mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    company:{
        type: String,
        required: true
    },
    category:{
        type: String,
    },
    tags:{
        type: Array
    },
    subcategories:{
        type: Array
    }
})

var Medicine = mongoose.model('medicine', medicineSchema)

export default Medicine;