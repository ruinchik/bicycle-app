import { useCartStore } from '../../../../stores'; // Если есть index.ts
import { CartItem } from '../CartItem/CartItem';
import { PromoCode } from '../PromoCode/PromoCode';
import './CartPage.css';

export function CartPage() {
    const { 
        items, 
        subtotal, 
        finalTotal, 
        discount,
        promoCode,
        clear,
        closeCart,
        isCartOpen 
    } = useCartStore();

    if (!isCartOpen) return null;

    const cartItems = Object.values(items);

    const handleOverlayClick = (e: React.MouseEvent) => {
        if (e.target === e.currentTarget) {
            closeCart();
        }
    };

    // Простая логика для отображения скидки
    const discountDisplay = promoCode ? 
        `-${discount}${discount <= 100 ? '%' : '₽'}` : 
        null;

    if (cartItems.length === 0) {
        return (
            <div className="cart-modal" onClick={handleOverlayClick}>
                <div className="cart-modal__content">
                    <div className="cart-page">
                        <div className="cart-page__header">
                            <h1 className="cart-page__title">Корзина</h1>
                            <button className="cart-page__close" onClick={closeCart}>
                                ×
                            </button>
                        </div>
                        <div className="cart-page__empty">
                            <div className="cart-page__empty-icon">🛒</div>
                            <h2>Корзина пуста</h2>
                            <p>Добавьте товары из каталога</p>
                            <button className="cart-page__continue" onClick={closeCart}>
                                Продолжить покупки
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="cart-modal" onClick={handleOverlayClick}>
            <div className="cart-modal__content">
                <div className="cart-page">
                    <div className="cart-page__header">
                        <h1 className="cart-page__title">Корзина</h1>
                        <div className="cart-page__actions">
                            <button className="cart-page__clear" onClick={clear}>
                                Очистить корзину
                            </button>
                            <button className="cart-page__close" onClick={closeCart}>
                                ×
                            </button>
                        </div>
                    </div>

                    <div className="cart-page__content">
                        <div className="cart-page__items">
                            {cartItems.map(item => (
                                <CartItem key={item.id} item={item} />
                            ))}
                        </div>

                        <div className="cart-page__sidebar">
                            <div className="cart-page__summary">
                                <h3 className="cart-page__summary-title">Итоги заказа</h3>
                                
                                <div className="cart-page__summary-row">
                                    <span>Товары ({cartItems.length})</span>
                                    <span>{subtotal().toLocaleString()} ₽</span>
                                </div>

                                {promoCode && (
                                    <div className="cart-page__summary-row cart-page__summary-row--discount">
                                        <span>Скидка по промокоду</span>
                                        <span>{discountDisplay}</span>
                                    </div>
                                )}

                                <PromoCode />

                                <div className="cart-page__summary-divider"></div>

                                <div className="cart-page__summary-row cart-page__summary-row--total">
                                    <span>Итого</span>
                                    <span>{finalTotal().toLocaleString()} ₽</span>
                                </div>

                                <button className="cart-page__checkout">
                                    Перейти к оформлению
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}