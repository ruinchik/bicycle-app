import { useCartStore } from '../../../store/cartStore';
import './CartIcon.css';

export function CartIcon() {
    const totalQty = useCartStore((s) => s.totalQty());
    
    return (
        <button className="cart-icon" aria-label="Корзина">
            🛒
            {totalQty > 0 && (
                <span className="cart-icon__badge">{totalQty}</span>
            )}
        </button>
    );
}