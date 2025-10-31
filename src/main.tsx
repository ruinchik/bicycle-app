import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { ThemingProvider } from './components/theme/ThemingProvider' // ← убедитесь в пути

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemingProvider>
      <App />
    </ThemingProvider>
  </StrictMode>,
)