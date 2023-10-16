import { Router } from 'express'
import productService from '../services/products.service.js'


const router = Router();

// crear la instalacia del producto porque es una claser

const  productManager = new productService()
router.get('/', async (req, res) => { // lo volvemos asyncrono
  const productos = await productManager.find()
 // res.status(200).json(productos).send("Estamos probando");
  res.status(200).json(productos);
});

router.get('/filter', (req, res) => {
  res.send('Yo soy un filter');
});

router.get('/:id', (req, res) => {
  const { id } = req.params;
  res.json({
    id,
    name: 'Product 2',
    price: 2000
  });
});

router.post('/', (req, res) => {
  const body = req.body;
  const newProduct = productManager.create(body)
  res.status(201).json(newProduct)
});

router.patch('/:id', async (req, res) => {
  try { // al colocar el asyn podemos controlar el error 
    const { id } = req.params;
    const body = req.body;
    console.log(body)
    const product = await productManager.update(id, body);
    res.json(product);
  } catch (error) {
    res.status(404).json({
      message: error.message
    });
  }
});

router.delete('/:id', async (req, res) => {
  try{
  const { id } = req.params;
  const rta = await productManager.delete(id);
  res.json(rta);
  }catch(error){
    res.status(404).json({
      message: error.message
    });
  }
});

export default router