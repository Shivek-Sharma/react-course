import express from 'express';

const app = express();
const PORT = process.env.PORT || 3000;

const products = [
  {
    id: 1,
    name: 'table wooden',
    price: 250,
    image: 'https://images.pexels.com/photos/164005/pexels-photo-164005.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  },
  {
    id: 2,
    name: 'table plastic',
    price: 200,
    image: 'https://images.pexels.com/photos/4050215/pexels-photo-4050215.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  },
  {
    id: 3,
    name: 'table wooden 2',
    price: 300,
    image: 'https://images.pexels.com/photos/4050441/pexels-photo-4050441.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  },
  {
    id: 4,
    name: 'table glass',
    price: 500,
    image: 'https://images.pexels.com/photos/5755707/pexels-photo-5755707.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  }
]

app.get('/api/products', (req, res) => {
  // http://loclhost:3000/api/products?search=wood
  if (req.query.search) {
    const filterProducts = products.filter((product) =>
      product.name.includes(req.query.search))

    return res.send(filterProducts);
  }

  setTimeout(() => {
    res.send(products);
  }, 3000);
});

app.listen(PORT, () => {
  console.log(`Server runnning at http://localhost:${PORT}`);
});