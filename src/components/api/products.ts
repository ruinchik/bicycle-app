import { http } from './http';
import { CatalogFilters, CatalogSort, PaginatedResult, Product } from '../types';

type FetchProductsParams = {
    page?: number;
    pageSize?: number;
    filters?: CatalogFilters;
    sort?: CatalogSort;
};

export async function fetchProducts(params: FetchProductsParams = {}): Promise<PaginatedResult<Product>> {
    const { page = 1, pageSize = 12, filters, sort } = params;
    const query = new URLSearchParams();
    query.set('page', String(page));
    query.set('pageSize', String(pageSize));
    if (filters?.type) query.set('type', filters.type);
    if (filters?.manufacturer) query.set('manufacturer', filters.manufacturer);
    if (filters?.price?.min != null) query.set('priceMin', String(filters.price.min));
    if (filters?.price?.max != null) query.set('priceMax', String(filters.price.max));
    if (filters?.frameSize) query.set('frameSize', filters.frameSize);
    if (filters?.inStock != null) query.set('inStock', String(filters.inStock));
    if (sort) {
        query.set('sortKey', sort.key);
        query.set('sortOrder', sort.order);
    }
    return http.get(`/products?${query.toString()}`);
}


