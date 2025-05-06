import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Home from './pages/home/home'
import Header from './components/header'
import Footer from './components/footer'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Header />
    <Home />
    <Footer />
  </StrictMode>,
)
