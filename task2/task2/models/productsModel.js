const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  productname: String,
  quantity: Number,
  price: Number
});

// Prevent OverwriteModelError
const Product = mongoose.models.Product || mongoose.model('Product', productSchema);

module.exports = Product;