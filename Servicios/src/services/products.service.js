import { faker }   from '@faker-js/faker';

class ProductsService {

  constructor(){
    this.products = []; // en memoria
    this.generate();
  }

  // en este momento tenemos deprecada la libreria
  generate() {
    const limit = 100;
    for (let index = 0; index < limit; index++) {
      this.products.push({
        id: faker.datatype.uuid(),
        name: faker.commerce.productName(),
        price: parseInt(faker.commerce.price(), 10),
        image: faker.image.imageUrl(),
      });
    }
  }

  async create(data) {
    const product = {
      id: faker.datatype.uuid(),
      ...data
    };
    this.products.push(product);
    return product;
  }
  async find() {
    return this.products;
  }

  async findOne(id) {
    return this.products.find(item => item.id === id);
  }

  async  update(id,changes){const index=this.products.findIndex(item=>item.id===id);if(index===-1){throw new Error('product not found');}
const product=this.products[index];this.products[index]={...product,...changes};return this.products[index];}


async delete(id) {
    const index = this.products.findIndex(item => item.id === id);
    if (index === -1) {
      throw new Error('product not found');
    }
    this.products.splice(index, 1);
    return { id };
  }

}

export default ProductsService