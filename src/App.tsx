import './App.css'
import styled from 'styled-components'
import { ThemeToggle } from './components/theme/ThemeToggle/ThemeToggle'
import { Filters } from './components/catalog/Filters/Filters'
import { Sort } from './components/catalog/Sort/Sort'
import { ProductGrid } from './components/catalog/ProductGrid/ProductGrid'
import { CartIcon } from './components/cart/CartIcon/CartIcon'

const Page = styled.div`
  display: grid;
  gap: 16px;
  padding: 16px;
  width: 100%;
`

const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
`

const Layout = styled.div`
  display: grid;
  grid-template-columns: 260px 1fr;
  gap: 16px;
`

function App() {
  return (
    <Page>
      <Header>
        <h2 style={{ margin: 0 }}>Веломагазин</h2>
        <div style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
          <ThemeToggle />
          <CartIcon />
        </div>
      </Header>
      <Layout>
        <Filters />
        <div style={{ display: 'grid', gap: 12 }}>
          <Sort />
          <ProductGrid />
        </div>
      </Layout>
    </Page>
  )
}

export default App
