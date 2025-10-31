import styled from 'styled-components';
import { useCatalogStore } from '../../../store/catalogStore';

const Wrap = styled.div`
    display: flex;
    gap: 12px;
    align-items: center;
`;
const Label = styled.span`
    color: var(--muted-text);
    font-size: 12px;
    text-transform: uppercase;
`;

export function Sort() {
    const sort = useCatalogStore((s) => s.sort);
    const setSort = useCatalogStore((s) => s.setSort);
    return (
        <Wrap>
            <Label>Сортировать по:</Label>
            <select
                value={sort.key}
                onChange={(e) => setSort({ key: e.target.value as any, order: sort.order })}
            >
                <option value="price">Цена</option>
                <option value="popularity">Популярность</option>
                <option value="rating">Рейтинг</option>
                <option value="isNew">Новизна</option>
            </select>
            <select
                value={sort.order}
                onChange={(e) => setSort({ key: sort.key, order: e.target.value as any })}
            >
                <option value="asc">По возрастанию</option>
                <option value="desc">По убыванию</option>
            </select>
        </Wrap>
    );
}


