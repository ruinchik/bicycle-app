import { create } from 'zustand';
import { CatalogFilters, CatalogSort, PaginatedResult, Product } from '../types';
import { fetchProducts } from '../api/products';

type CatalogState = {
    items: Product[];
    total: number;
    page: number;
    pageSize: number;
    filters: CatalogFilters;
    sort: CatalogSort;
    isLoading: boolean;
    error?: string;
    setFilters: (f: Partial<CatalogFilters>) => void;
    setSort: (s: CatalogSort) => void;
    setPage: (p: number) => void;
    load: () => Promise<void>;
};

const defaultSort: CatalogSort = { key: 'popularity', order: 'desc' };

export const useCatalogStore = create<CatalogState>((set, get) => ({
    items: [],
    total: 0,
    page: 1,
    pageSize: 12,
    filters: {},
    sort: defaultSort,
    isLoading: false,
    error: undefined,
    setFilters: (f) => set((s) => ({ filters: { ...s.filters, ...f }, page: 1 })),
    setSort: (s) => set({ sort: s, page: 1 }),
    setPage: (p) => set({ page: p }),
    load: async () => {
        const { page, pageSize, filters, sort } = get();
        set({ isLoading: true, error: undefined });
        try {
            const res: PaginatedResult<Product> = await fetchProducts({ page, pageSize, filters, sort });
            set({ items: res.items, total: res.total, isLoading: false });
        } catch (e) {
            set({ isLoading: false, error: e instanceof Error ? e.message : 'Unknown error' });
        }
    },
}));


