const express = require('express');
const router = express.Router();

const {
        getProducts,
        addProducts,
        deleteProduct,
        updateProduct
    } = require('../controllers/products');

router.route('/')
    .get( (req,res) => {
        res.send('Rutas validas: /products, /products/(id)');
    }        
    );
    
//localhost:3000/products
router.route('/products')
    .get(getProducts)
    .post(addProducts);

//localhost:3000/products/4 --> id del producto a eliminar
router.route('/products/:id')
    .put(updateProduct)
    .delete(deleteProduct);

module.exports = router;