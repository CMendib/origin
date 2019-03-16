const products = require ('../../db'); //Nos salimos hasta centraaly

function createProducts(req,res){
  const newItem = req.body;
  newItem.id = products.items.length +1;
  products.items.push(newItem);
  res.send(newItem).status(201);
  // res.send('Estas agregando un POST');
}



module.exports = createProducts;
