import mongoose from 'mongoose';

const orderSchema = mongoose.Schema({
    user_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    order_items:{
        type: [{
            title:{
                type: String,
                required: true
            },
            company:{
                type: String,
                required: true
            },
            package:{
                type: String,
            },
            size:{
                type: String,
            },
            MRP:{
                type: Number,
                required: true
            },
            discountedPercentage:{
                type: Number,
                required: true
            },
            quantity:{
                type: Number,
                required: true
            }
        }],
        // type: Array,
        required: true
    },
    order_timestamp:{
        type: Date,
        default: Date.now
    },
    order_status:{
        type: String,
        enum: ['PENDING', 'DELIVERED', 'CANCELLED'],
        required: true
    },
    shipping_address:{
        type: String,
        required: true
    },
    order_total:{
        type: Number,
        required: true
    },
    order_instruction:{
        type: String
    },
    delivery_date:{
        type: Date,
    }   
})

var Order = mongoose.model('order', orderSchema)

export default Order;