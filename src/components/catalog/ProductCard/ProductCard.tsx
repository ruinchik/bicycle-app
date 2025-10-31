import { useState } from 'react';
import { useCartStore } from '../../../stores';
import { type Product } from '../../../types';
import './ProductCard.css';

type Props = {
    product: Product;
};

export function ProductCard({ product }: Props) {
    const [isAdded, setIsAdded] = useState(false);
    const addItem = useCartStore((s) => s.addItem);

    const handleAddToCart = () => {
        addItem(product, 1);
        setIsAdded(true);
        setTimeout(() => setIsAdded(false), 1000);
    };

    return (
        <div className="product-card">
            <div className="product-card__image">
                <img src={product.imageUrl} alt={product.title} />
                {product.isNew && <span className="product-card__badge">Новинка</span>}
                {!product.inStock && <div className="product-card__out-of-stock">Нет в наличии</div>}
            </div>
            
            <div className="product-card__content">
                <h3 className="product-card__title">{product.title}</h3>
                <p className="product-card__description">{product.description}</p>
                
                <div className="product-card__meta">
                    <span className="product-card__type">{product.type}</span>
                    <span className="product-card__manufacturer">{product.manufacturer}</span>
                    <span className="product-card__size">Размер: {product.frameSize}</span>
                </div>

                <div className="product-card__rating">
                    <span className="product-card__rating-stars">
                        {'★'.repeat(Math.round(product.rating))}
                        {'☆'.repeat(5 - Math.round(product.rating))}
                    </span>
                    <span>({product.rating})</span>
                </div>

                <div className="product-card__footer">
                    <div className="product-card__price">{product.price.toLocaleString()} ₽</div>
                    <button 
                        className={`product-card__add-btn ${isAdded ? 'product-card__add-btn--added' : ''}`}
                        onClick={handleAddToCart}
                        disabled={!product.inStock || isAdded}
                    >
                        {isAdded ? '✓ Добавлено' : (product.inStock ? 'В корзину' : 'Нет в наличии')}
                    </button>
                </div>
            </div>
        </div>
    );
}