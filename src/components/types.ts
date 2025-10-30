export type ProductId = string;

export type Product = {
    id: ProductId;
    title: string;
    description: string;
    imageUrl: string;
    price: number;
    rating: number;
    popularity: number;
    isNew: boolean;
    inStock: boolean;
    type: 'горный' | 'шоссейный' | 'городской' | 'гибридный' | 'BMX' | 'другой';
    manufacturer: string;
    frameSize: string;
};

export type PriceRange = { min?: number; max?: number };

export type CatalogFilters = {
    type?: Product['type'];
    manufacturer?: string;
    price?: PriceRange;
    frameSize?: string;
    inStock?: boolean;
};

export type SortKey = 'price' | 'popularity' | 'rating' | 'isNew';
export type SortOrder = 'asc' | 'desc';

export type CatalogSort = { key: SortKey; order: SortOrder };

export type PaginatedResult<T> = {
    items: T[];
    total: number;
    page: number;
    pageSize: number;
};


