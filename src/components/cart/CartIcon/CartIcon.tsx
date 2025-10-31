import { useState, useEffect } from 'react';
import { useCartStore } from '../../../stores';
import './CartIcon.css';

export function CartIcon() {
    const [isBouncing, setIsBouncing] = useState(false);
    const totalQty = useCartStore((s) => s.totalQty());
    const openCart = useCartStore((s) => s.openCart);
    const prevTotalQty = useCartStore((s) => {
        // Это нужно для отслеживания изменений количества
        return s.totalQty();
    });
    
    useEffect(() => {
        if (totalQty > prevTotalQty) {
            setIsBouncing(true);
            setTimeout(() => setIsBouncing(false), 500);
        }
    }, [totalQty, prevTotalQty]);

    return (
        <button className="cart-icon" onClick={openCart} aria-label="Корзина">
            🛒
            {totalQty > 0 && (
                <span className={`cart-icon__badge ${isBouncing ? 'cart-icon__badge--bounce' : ''}`}>
                    {totalQty}
                </span>
            )}
        </button>
    );
}