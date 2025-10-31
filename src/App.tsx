import { useState } from 'react';
import './App.css';
import { ThemeToggle } from './components/theme/ThemeToggle/ThemeToggle';
import { Filters } from './components/catalog/Filters/Filters';
import { Search } from './components/catalog/Search/Search';
import { Sort } from './components/catalog/Sort/Sort';
import { ProductGrid } from './components/catalog/ProductGrid/ProductGrid';
import { CartIcon } from './components/cart/CartIcon/CartIcon';
import { CartPage } from './components/cart/CartPage/CartPage';
import { Notification } from './components/ui/Notification/Notification';
import { useCartStore } from './stores';

function App() {
    const isCartOpen = useCartStore((s) => s.isCartOpen);
    const [notification, setNotification] = useState<{
        message: string;
        type: 'success' | 'error' | 'info';
        isVisible: boolean;
    }>({ message: '', type: 'info', isVisible: false });

    const showNotification = (message: string, type: 'success' | 'error' | 'info' = 'info') => {
        setNotification({ message, type, isVisible: true });
        setTimeout(() => {
            setNotification(prev => ({ ...prev, isVisible: false }));
        }, 3000);
    };

    return (
        <>
            <div className="app">
                <header className="app__header">
                    <h1 className="app__title">Веломагазин</h1>
                    <div className="app__controls">
                        <ThemeToggle />
                        <CartIcon />
                    </div>
                </header>
                
                <div className="app__layout">
                    <Filters />
                    <div className="app__content">
                        <h1 className="app__page-title">Велосипеды</h1>
                        <Search />
                        <Sort />
                        <ProductGrid />
                    </div>
                </div>
            </div>

            {/* Модальное окно корзины */}
            <CartPage />

            {/* Уведомления */}
            <Notification 
                message={notification.message}
                type={notification.type}
                isVisible={notification.isVisible}
            />
        </>
    );
}

export default App;