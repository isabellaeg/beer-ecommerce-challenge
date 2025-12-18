import { useNavigate } from 'react-router-dom';
import { FaStar } from 'react-icons/fa';
import './ProductCard.scss';

export const ProductCard = ({ product }) => {
  const navigate = useNavigate();

  const handleCardClick = () => {
    const brandSlug = product.brand.toLowerCase().replace(/\s+/g, '-');
    navigate(`/product/${product.id}-${brandSlug}`);
  };

  const handleAddToCart = (e) => {
    e.stopPropagation();
    window.alert(`Added ${product.name} to cart`);
  };

  return (
    <div className="product-card" onClick={handleCardClick}>
      <h3 className="product-card__title">{product.name}</h3>
      <img className="product-card__image" src={product.image} alt={product.name} />
      <div className="product-card__rating">
        <FaStar className="product-card__star" />
        <span className="product-card__rating-value">{product.rating}</span>
      </div>
      <div className="product-card__footer">
        <span className="product-card__price">${product.price}</span>
        <button className="product-card__button" onClick={handleAddToCart}>+</button>
      </div>
    </div>
  );
}

export default ProductCard;