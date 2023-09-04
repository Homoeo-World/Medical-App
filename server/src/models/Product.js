import mongoose from 'mongoose';

const productSchema = mongoose.Schema({
    id: {
        type: Number,
        unique: true,
        required: true,
    },
    title: {
        type: String,
        unique: true,
        required: true
    },
    company: String,
    quantity: String,
    price: {
        type: String,
        required: true
    },
    description: String

})


// productSchema.plugin(autoIncrement.plugin, 
//     {model: 'product', field:'productId', startAt: 0, incrementBy: 1});

var Product = mongoose.model('product', productSchema);

export default Product;