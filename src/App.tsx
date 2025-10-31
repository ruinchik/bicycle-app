import './App.css';
import { ThemeToggle } from './components/theme/ThemeToggle/ThemeToggle';
import { Filters } from './components/catalog/Filters/Filters';
import { Sort } from './components/catalog/Sort/Sort';
import { ProductGrid } from './components/catalog/ProductGrid/ProductGrid';
import { CartIcon } from './components/catalog/CartIcon/CartIcon';

function App() {
  return (
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
          <Sort />
          <ProductGrid />
        </div>
      </div>
    </div>
  );
}

export default App;