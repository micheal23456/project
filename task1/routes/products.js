var express = require('express');
var router = express.Router();
const Product = require('../models/productsModel')
router.get('/create_product', (req,res)=>{
    res.render('./product/create', {error: null})
});
router.post('/create_product', (req, res) => {
    const { productname, quantity, price } = req.body;
    const product = new Product({
        productname,
        quantity,
        price
    });
    const validationError = product.validateSync();
    if (validationError) {
        res.render('./product/create', { error: validationError.errors});
    } else {
        product.save().then(() => {
                res.redirect('/products/retrieve_product');
            }).catch((error) => {
                console.error(error);
                
            });
   }
});
router.get('/retrieve_product', (req, res) => {

  Product.find().then(data => {
    res.render('./product/retrieve',{data:data})

  }).catch(error => {

    console.error(error);
    
  });

});



module.exports = router;