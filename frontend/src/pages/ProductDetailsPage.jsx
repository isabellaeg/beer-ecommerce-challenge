import { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { fetchProducts, fetchStockPrice } from '../services/api';
import { ProductDetail } from '../components/ProductDetail/ProductDetail';

function ProductDetailsPage() {
  const location = useLocation();
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);
  const [skuData, setSkuData] = useState([]);
  const [selectedSku, setSelectedSku] = useState(null);
  const [loading, setLoading] = useState(true);
  const [isClosing, setIsClosing] = useState(false);
  
  const slug = location.pathname.split('/product/')[1];
  const productId = slug ? slug.split('-')[0] : null;
  
  const handleClose = () => {
    setIsClosing(true);
    setTimeout(() => {
      navigate('/');
    }, 300);
  };
  
  const handleOverlayClick = () => {
    setIsClosing(true);
    setTimeout(() => {
      navigate('/');
    }, 300);
  };

  useEffect(() => {
    if (!productId) return;
    
    const loadProduct = async () => {
      try {
        const products = await fetchProducts();
        const foundProduct = products.find(p => p.id === parseInt(productId));
        setProduct(foundProduct);
      } catch (error) {
        console.error('Error loading product:', error);
      }
    };
    loadProduct();
  }, [productId]);

  useEffect(() => {
    if (!product) return;

    const loadSkuData = async () => {
      try {
        const baseSkuId = (product.id - 1) * 3;
        const skuIds = [
          `${baseSkuId + 1}`,
          `${baseSkuId + 2}`,
          `${baseSkuId + 3}`
        ];
        
        const skuPromises = skuIds.map(sku => fetchStockPrice(sku));
        const data = await Promise.all(skuPromises);
        setSkuData(data);
        setSelectedSku(data[0]); 
        setLoading(false);
      } catch (error) {
        console.error('Error loading SKU data:', error);
        setLoading(false);
      }
    };

    loadSkuData();
    
    const interval = setInterval(loadSkuData, 5000);
    return () => clearInterval(interval);
  }, [product]);

  if (loading || !product) {
    return null;
  }

  return (
    <ProductDetail
      product={product}
      selectedSku={selectedSku}
      skuData={skuData}
      isClosing={isClosing}
      onClose={handleClose}
      onOverlayClick={handleOverlayClick}
      onSkuSelect={setSelectedSku}
    />
  );
}

export default ProductDetailsPage;
