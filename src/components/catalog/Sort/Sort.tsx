import { useCatalogStore } from '../../../stores/catalogStore';
import { type SortKey, type SortOrder } from '../../../types';
import './Sort.css';

const SORT_OPTIONS: { key: SortKey; label: string }[] = [
    { key: 'popularity', label: 'По популярности' },
    { key: 'price', label: 'По цене' },
    { key: 'rating', label: 'По рейтингу' },
    { key: 'isNew', label: 'По новизне' }
];

export function Sort() {
    const { sort, setSort } = useCatalogStore();

    const handleKeyChange = (key: SortKey) => {
        setSort({ ...sort, key });
    };

    const handleOrderChange = (order: SortOrder) => {
        setSort({ ...sort, order });
    };

    // Определяем labels для порядка в зависимости от типа сортировки
    const getOrderLabels = (): [string, string] => {
        if (sort.key === 'price') {
            return ['Дешевле', 'Дороже'];
        }
        return ['Возр.', 'Убыв.'];
    };

    const [ascLabel, descLabel] = getOrderLabels();

    return (
        <div className="sort">
            <span className="sort__label">Сортировка:</span>
            
            <div className="sort__controls">
                <div className="sort__options">
                    {SORT_OPTIONS.map(option => (
                        <button
                            key={option.key}
                            className={`sort__option ${sort.key === option.key ? 'sort__option--active' : ''}`}
                            onClick={() => handleKeyChange(option.key)}
                        >
                            {option.label}
                        </button>
                    ))}
                </div>

                <div className="sort__order">
                    <button
                        className={`sort__order-btn ${sort.order === 'asc' ? 'sort__order-btn--active' : ''}`}
                        onClick={() => handleOrderChange('asc')}
                        aria-label={ascLabel}
                    >
                        {ascLabel}
                    </button>
                    <button
                        className={`sort__order-btn ${sort.order === 'desc' ? 'sort__order-btn--active' : ''}`}
                        onClick={() => handleOrderChange('desc')}
                        aria-label={descLabel}
                    >
                        {descLabel}
                    </button>
                </div>
            </div>
        </div>
    );
}