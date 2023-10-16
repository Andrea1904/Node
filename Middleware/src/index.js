import  express from 'express'
import  productsRouter from './router/product.js'
import { errorHandler,logErrors} from './middleware/error.handle.js';

const app= express();

app.use('/products', productsRouter);

routerApi(app);

app.use(logErrors);
app.use(errorHandler);

app.listen(8080,()=>{
  console.log("Server Up")
})

