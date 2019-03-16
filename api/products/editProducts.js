const products = require ('../../db.js'); //Nos salimos hasta centraaly



function editProducts(req,res){
  const productId = req.params.id;
  const newProduct = req.body;
  // console.log(newProduct);
  const itemsList = products.items;

  for (let key in itemsList) {
    if (itemsList[key].id == productId){
      newProduct.id =  itemsList[key].id;
      itemsList[key] = newProduct;
      res.send(newProduct).status(202);
    }
  }
  res.send('No existe ese id').satus(404);

  // res.send('Estas modificando el producto ya que es un PUT');
}



module.exports = editProducts;
