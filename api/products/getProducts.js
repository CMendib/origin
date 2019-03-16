const products = require ('../../db.js'); //Nos salimos hasta centraaly


function getProducts(req,res){
  // console.log(products);
  // res.send('Estas haciendo una petición a products');
  res.json(products);

}



module.exports = getProducts;
