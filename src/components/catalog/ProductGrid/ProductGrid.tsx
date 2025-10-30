import styled from 'styled-components';
import { useEffect } from 'react';
import { useCatalogStore } from '../../../store/catalogStore';
import { ProductCard } from '../ProductCard/ProductCard';

const Grid = styled.section`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
    gap: 16px;
`;

const Top = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export function ProductGrid() {
    const { items, total, page, pageSize, isLoading, error, load, setPage, filters, sort } = useCatalogStore();

    useEffect(() => {
        load();
    }, [load, page, pageSize, filters, sort]);

    if (error) return <div>Ошибка: {error}</div>;
    return (
        <div>
            <Top>
                <div>Найдено: {total}</div>
                {isLoading && <div>Загрузка…</div>}
            </Top>
            <Grid>
                {items.map((p) => (
                    <ProductCard key={p.id} product={p} />
                ))}
            </Grid>
            {total > pageSize && (
                <div style={{ display: 'flex', gap: 8, marginTop: 16 }}>
                    <button disabled={page === 1} onClick={() => setPage(page - 1)}>
                        Назад
                    </button>
                    <span>
                        Стр. {page} / {Math.ceil(total / pageSize)}
                    </span>
                    <button
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


