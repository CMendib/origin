// // Jalamos express
 const express = require ('express');
 const productsRouter = express.Router();

// Con lo siguente haremos que todo lo que llegue a cualquier ruta de products lo tratareos como json
productsRouter.use(express.json());

//Middlewares∫

 const getProducts = require('./getProducts');
 const createProducts = require('./createProducts');
 const editProducts = require('./editProducts');
 const deleteProducts = require('./deleteProducts');
const getSingleProduct = require ('./getSingleProduct');
productsRouter.get('/', getProducts);

//para que traiga un producto específico
productsRouter.get('/:id',getSingleProduct);

productsRouter.post('/',createProducts);
productsRouter.put('/:id',editProducts);
productsRouter.delete('/:id',deleteProducts);


 module.exports = productsRouter;
