import styled from 'styled-components';
import { useCatalogStore } from '../../store/catalogStore';

const Bar = styled.aside`
    display: grid;
    gap: 12px;
    padding: 12px;
    background: var(--surface);
    border: 1px solid var(--border);
    border-radius: 8px;
`;

const Row = styled.label`
    display: grid;
    gap: 6px;
    color: var(--text);
`;

export function Filters() {
    const filters = useCatalogStore((s) => s.filters);
    const setFilters = useCatalogStore((s) => s.setFilters);
    return (
        <Bar>
            <Row>
                <span>Тип</span>
                <select
                    value={filters.type ?? ''}
                    onChange={(e) => setFilters({ type: (e.target.value || undefined) as any })}
                >
                    <option value="">Все</option>
                    <option value="горный">Горный</option>
                    <option value="шоссейный">Шоссейный</option>
                    <option value="городской">Городской</option>
                    <option value="гибридный">Гибридный</option>
                    <option value="BMX">BMX</option>
                    <option value="другой">Другой</option>
                </select>
            </Row>
            <Row>
                <span>Производитель</span>
                <input
                    placeholder="Например, Trek"
                    value={filters.manufacturer ?? ''}
                    onChange={(e) => setFilters({ manufacturer: e.target.value || undefined })}
                />
            </Row>
            <Row>
                <span>Размер рамы</span>
                <input
                    placeholder="M / 54 / 19"
                    value={filters.frameSize ?? ''}
                    onChange={(e) => setFilters({ frameSize: e.target.value || undefined })}
                />
            </Row>
            <Row>
                <span>Цена, ₽</span>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 8 }}>
                    <input
                        type="number"
                        placeholder="От"
                        value={filters.price?.min ?? ''}
                        onChange={(e) => setFilters({ price: { ...filters.price, min: e.target.value ? Number(e.target.value) : undefined } })}
                    />
                    <input
                        type="number"
                        placeholder="До"
                        value={filters.price?.max ?? ''}
                        onChange={(e) => setFilters({ price: { ...filters.price, max: e.target.value ? Number(e.target.value) : undefined } })}
                    />
                </div>
            </Row>
            <Row>
                <span>
                    <input
                        type="checkbox"
                        checked={!!filters.inStock}
                        onChange={(e) => setFilters({ inStock: e.target.checked || undefined })}
                    />{' '}
                    В наличии
                </span>
            </Row>
        </Bar>
    );
}


