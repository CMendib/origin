const products = require ('../../db'); //Nos salimos hasta centraalycpara traer la base


function deleteProducts(req,res){
  deleteId = req.params.id;
  products.items = products.items.filter( item => item.id != deleteId);


  res.send(products.items).status(202);
}



module.exports = deleteProducts;
