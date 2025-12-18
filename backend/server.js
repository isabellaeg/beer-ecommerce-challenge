import express from 'express';
import cors from 'cors';
import { products } from './data/products.js';
import { stockPrice } from './data/stock-price.js';

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

app.get('/api/products', (req, res) => {
  try {
    res.json(products);
  } catch (error) {
    res.status(500).json({ error: 'Failed to get products' });
  }
});

app.get('/api/stock-price/:sku', (req, res) => {
  try {
    const { sku } = req.params;
    const item = stockPrice.find(item => item.sku === sku);
    
    if (!item) {
      return res.status(404).json({ error: 'SKU not found' });
    }
    
    res.json(item);
  } catch (error) {
    res.status(500).json({ error: 'Failed to get price' });
  }
});

app.listen(PORT, () => {
  console.log(`Backend server is running on http://localhost:${PORT}`);
});
