import { create } from 'zustand';
import { type Product, type ProductId } from '../types';

export type CartItem = {
    id: ProductId;
    product: Product;
    qty: number;
};

type CartState = {
    items: Record<ProductId, CartItem>;
    addItem: (product: Product, qty?: number) => void;
    removeItem: (id: ProductId) => void;
    changeQty: (id: ProductId, delta: number) => void;
    clear: () => void;
    subtotal: () => number;
    totalQty: () => number;
};

export const useCartStore = create<CartState>((set, get) => ({
    items: {},
    addItem: (product, qty = 1) =>
        set((s) => {
            const existing = s.items[product.id];
            const nextQty = (existing?.qty ?? 0) + qty;
            return {
                items: {
                    ...s.items,
                    [product.id]: { id: product.id, product, qty: nextQty },
                },
            };
        }),
    removeItem: (id) => set((s) => {
        const copy = { ...s.items };
        delete copy[id];
        return { items: copy };
    }),
    changeQty: (id, delta) => set((s) => {
        const item = s.items[id];
        if (!item) return {} as any;
        const qty = item.qty + delta;
        if (qty <= 0) {
            const copy = { ...s.items };
            delete copy[id];
            return { items: copy };
        }
        return { items: { ...s.items, [id]: { ...item, qty } } };
    }),
    clear: () => set({ items: {} }),
    subtotal: () => Object.values(get().items).reduce((sum, it) => sum + it.product.price * it.qty, 0),
    totalQty: () => Object.values(get().items).reduce((sum, it) => sum + it.qty, 0),
}));


