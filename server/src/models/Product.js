import mongoose from 'mongoose';

const productSchema = mongoose.Schema({
    // id: {
    //     type: Number,
    //     unique: true,
    //     required: true,
    // },
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