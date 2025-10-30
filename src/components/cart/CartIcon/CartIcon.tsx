import './CartIcon.css';
import { useCartStore } from '../../../store/cartStore';

export function CartIcon() {
    const totalQty = useCartStore((s) => s.totalQty());
    return (
        <button className="cart-icon" aria-label="Корзина">
            🛒
            {totalQty > 0 && <span className="cart-badge">{totalQty}</span>}
        </button>
    );
}


