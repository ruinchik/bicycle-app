import { useEffect } from 'react';
import { useCatalogStore } from '../../../store/catalogStore';
import { ProductCard } from '../ProductCard/ProductCard';
import './ProductGrid.css';

export function ProductGrid() {
    const { items, total, page, pageSize, isLoading, error, load, setPage } = useCatalogStore();

    useEffect(() => {
        load();
    }, [load]);

    if (error) {
        return <div className="product-grid__error">Ошибка: {error}</div>;
    }

    return (
        <div>
            <div className="product-grid__header">
                <div className="product-grid__total">Найдено: {total}</div>
                {isLoading && <div className="product-grid__loading">Загрузка...</div>}
            </div>
            
            <div className="product-grid">
                {items.map((product) => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </div>

            {total > pageSize && (
                <div className="product-grid__pagination">
                    <button 
                        className="product-grid__pagination-btn"
                        disabled={page === 1} 
                        onClick={() => setPage(page - 1)}
                    >
                        Назад
                    </button>
                    <span className="product-grid__pagination-info">
                        Страница {page} из {Math.ceil(total / pageSize)}
                    </span>
                    <button
                        className="product-grid__pagination-btn"
                        disabled={page >= Math.ceil(total / pageSize)}
                        onClick={() => setPage(page + 1)}
                    >
                        Вперёд
                    </button>
                </div>
            )}
        </div>
    );
}