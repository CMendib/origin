const products = require ('../../db.js'); //Nos salimos hasta centraaly


function getSingleProduct(req,res){
  //accediendo al id que viene en req
  const productId = req.params.id;
  //Items es lo que esta en db.js
  // for(let item of products.items) {
  //   if(item.id == productId) {
  //     res.json(item).status(200); // de que todo está bien
  //   }
  // }

//Lo que está arriba del for funciona y a continuación lo haremos con filter
  //
  // const requestProduct = products.items.fiter( function (item){
  //   return item.if == productId
  // })

  //lo anterior con arrow fiunction
  const requestedProduct = products.items.filter( item => item.id ==  productId)

  if(requestedProduct.length!=0) {
    res.json(requestedProduct[0]).status(200);
  } else {
    res.send(`No se encontró ese producto ${productId}`).status(404);

  }




  // res.send(`No se encontró ese producto ${productId}`).status(404);
  // res.json(products);

}



module.exports = getSingleProduct;
