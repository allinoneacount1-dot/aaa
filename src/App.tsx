import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { SolanaProvider } from './solana'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Products from './pages/Products'
import Docs from './pages/Docs'
import Contact from './pages/Contact'

export default function App() {
  return (
    <SolanaProvider>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/docs" element={<Docs />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </SolanaProvider>
  )
}
