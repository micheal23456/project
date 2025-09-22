const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate-v2')// imported the mongoose-paginate


const productSchema = new mongoose.Schema({
    productname: {
        type: String,
        required: [true, 'Name is required'],
        maxlength: [500, 'Name cannot exceed 500 characters']
    },
    quantity: {
        type: Number,
        required: [true, 'Price is required'],
        min: [0, 'Price cannot be negative']
        
    },
    price: {
        type: Number,
        required: [true, 'Price is required'],
        min: [0, 'Price cannot be negative']
    }
});

productSchema.plugin(mongoosePaginate);// use the plugin
const Product = mongoose.model('Product', productSchema);

module.exports = Product;