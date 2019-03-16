const express = require('express');
const router = express.Router();
const products = require('./products');

//cualqiue perticion que llegue a esrta ruta lo enviaremos a products
// router.use('/products', products);


// el '/' sirve para indicar que la peticion es a la dirección que se indicó
// en este caso fue http://localhost:8080/api 
router.all('/', function(req,res){

  res.json({
    products: "http://localhost:8080/api/products"
  });
})

router.use ('/products', products)


module.exports=router;
