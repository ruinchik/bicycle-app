import { useState } from 'react';
import { useCatalogStore } from '../../../store/catalogStore';
import './Search.css';

export function Search() {
    const [searchTerm, setSearchTerm] = useState('');
    const setFilters = useCatalogStore((s) => s.setFilters);

    const handleSearch = (value: string) => {
        setSearchTerm(value);
        // Здесь можно добавить поиск по названию или описанию
        // Пока просто сбрасываем другие фильтры при поиске
        if (value.trim()) {
            setFilters({
                manufacturer: value,
                type: undefined,
                frameSize: undefined,
                price: {},
                inStock: undefined
            });
        } else {
            setFilters({});
        }
    };

    return (
        <div className="search">
            <input
                type="text"
                placeholder="Поиск велосипедов..."
                value={searchTerm}
                onChange={(e) => handleSearch(e.target.value)}
                className="search__input"
            />
            <button className="search__button">
                🔍
            </button>
        </div>
    );
}