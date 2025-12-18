import { FaArrowLeftLong } from 'react-icons/fa6';
import { BsThreeDots } from 'react-icons/bs';
import { HiOutlineShoppingBag } from 'react-icons/hi2';
import './ProductDetail.scss';

export const ProductDetail = ({ 
  product, 
  selectedSku, 
  skuData, 
  isClosing, 
  onClose, 
  onOverlayClick, 
  onSkuSelect 
}) => {
  return (
    <>
      <div className={`details-overlay ${isClosing ? 'closing' : ''}`} onClick={onOverlayClick}></div>
      <div className={`details-container ${isClosing ? 'closing' : ''}`}>
        <div className="details-header">
          <button className="details-header__back" onClick={onClose}><FaArrowLeftLong /></button>
          <h1 className="details-header__title">Detail</h1>
          <button className="details-header__menu" onClick={() => window.alert('Menu options')}>
            <BsThreeDots />
          </button>
        </div>

        <div className="details-image-container">
          <img className="details-image" src={product.image} alt={product.name} />
        </div>

        <div className="details-info">
          <div className="details-info__header">
            <h2 className="details-info__name">{product.name}</h2>
            <span className="details-info__price">${(selectedSku?.price / 100).toFixed(2)}</span>
          </div>
          
          <div className="details-info__meta">
            <span className="details-info__origin">Origin: {product.origin}</span>
            <span className="details-info__stock">Stock: {selectedSku?.stock}</span>
          </div>
        </div>

        <div className="details-description">
          <h3 className="details-description__title">Description</h3>
          <p className="details-description__text">
            {product.description}
            <span className="details-description__read-more"> Read more</span>
          </p>
        </div>

        <div className="details-size">
          <h3 className="details-size__title">Size</h3>
          <div className="details-size__options">
            {skuData.map(sku => (
              <button 
                key={sku.sku}
                className={`details-size__option ${selectedSku?.sku === sku.sku ? 'details-size__option--active' : ''}`}
                onClick={() => onSkuSelect(sku)}
              >
                {sku.size}
              </button>
            ))}
          </div>
        </div>

        <div className="details-footer">
          <button className="details-footer__cart-icon" onClick={() => window.alert('View shopping cart')}>
            <HiOutlineShoppingBag />
          </button>
          <button 
            className="details-footer__add-to-cart"
            onClick={() => window.alert(`Added ${product.name} to cart`)}
          >
            Add to cart
          </button>
        </div>
      </div>
    </>
  );
};
