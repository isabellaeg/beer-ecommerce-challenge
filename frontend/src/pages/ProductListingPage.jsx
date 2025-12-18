import { useState, useEffect } from 'react';
import './ProductListingPage.scss';
import { ProductCard } from '../components/ProductCard/ProductCard';
import { fetchProducts } from '../services/api';

function ProductListingPage() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadProducts = async () => {
      try {
        const data = await fetchProducts();
        setProducts(data);
      } catch (error) {
        console.error('Error loading products:', error);
      } finally {
        setLoading(false);
      }
    };

    loadProducts();
  }, []);

  if (loading) {
    return <div className="list-container">Loading...</div>;
  }

  return (
    <div className="list-container">
      <div className='list-greeting'>
        <span className='list-greeting__subtitle'>Hi Mr. Michael,</span>
        <h2 className='list-greeting__title'>Welcome Back!</h2>
      </div>
      <h2 className='list-title'>Our Products</h2>
      <div className='list-products'>
        {products.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}

export default ProductListingPage;
