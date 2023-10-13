import  express from 'express'
import  productsRouter from './router/product.js'

const app= express();

app.use('/products', productsRouter);

app.listen(8080,()=>{
  console.log("Server Up")
})

