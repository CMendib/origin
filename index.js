const express = require('express');

//Para ejecutar express
const app = express();

//para definir un puerto a usar
const port = 8080;
const chalk = require ('chalk'); //para poner colores en la terminal https://www.npmjs.com/package/chalk

//Rutas
//Vamos a usar un método de express
// Puedo usar
// app.get()
// app.post()
// app.put()
// app.delete()


app.get('/',(req,res)=>{
  //Res es la respuesta
  // res.send Manda cualquier cosa
  res.send('Estoy respondiendo algo');
});


//Escuchar peticiones en un puerto
app.listen(port, ()=> {
  console.log(`escuchando en el puerto ${port}...`);
  console.log(chalk.cyan(`http://localhost:${port}`));

});
