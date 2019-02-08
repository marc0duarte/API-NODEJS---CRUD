const {products} = require('../db.json'); //esta es una forma abreviada de crear un const de nombre products, con el valor que trae el JSON en su sección products {products: valor}

module.exports = {

    getProducts: (req, res) => {
        res.json({products}); //esta es una forma abreviada de llamar a un JSON. Ejemplo {products} es igual a {products : products}
    },
    addProducts: (req, res) => {
        const { name } = req.body; 
//agrega datos enviados por POST al archivo db.JSON
        products.push({
            id: products.length,
            name           
        })
        res.json({
            'success': true,
            'msg': 'satisfactoriamente guardado'
        });
    },
    updateProduct: (req,res) => {
        const {id} = req.params;
        const {name} = req.body;

        products.forEach((product, i) => {
            if (product.id === Number(id)) {
                product.name = name;
            }
        });

        res.json({
            'success': true,
            'msg': 'satisfactoriamente actualizado'
        });
        
    },

    deleteProduct: (req, res) => {

        const {id} = req.params;

        products.forEach((product, i) => {
            
            if (product.id === Number(id)) {
                products.splice(i,1);
            }
        });

        res.json({
            'success': true,
            'msg': 'satisfactoriamente eliminado'
        });
    }
};