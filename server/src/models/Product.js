import mongoose from 'mongoose';

const productSchema = mongoose.Schema({
    title: {
        type: String,
        unique: true,
        required: true
    },
    company:{
       type: String,
       required: true
    },
    quantity: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    discountedPrice: Number,
    description: String,
    category: {
        type: String,
        required: true
    }, 
    availabilityStatus: String

})


// productSchema.plugin(autoIncrement.plugin, 
//     {model: 'product', field:'productId', startAt: 0, incrementBy: 1});

var Product = mongoose.model('product', productSchema);
  

export default Product;



// DELETE ALL
// Product.deleteMany({}).then(function(){
//     console.log("Data deleted"); // Success
// }).catch(function(error){
//     console.log(error); // Failure
// });


// CREATION OF INDEX
// Product.collection.createIndex({ title: 1 }, { unique: true }, (err) => {
//     if (err) {
//       console.error('Error creating index on "title":', err);
//     } else {
//       console.log('Unique index on "title" created successfully.');
//     }
//   });