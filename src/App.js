import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router'
import Layout from './components/Layout/Layout'
import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import ProductsPage from './pages/ProductsPage'
import ContactsPage from './pages/ContactsPage'
import NotFound from './pages/NotFound'

const App = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/about' element={<AboutPage/>} />
          <Route path='/products' element={<ProductsPage/>} />
          <Route path='/contacts' element={<ContactsPage/>} />
          <Route path='*' element={<NotFound/>}/>
        
        </Routes>
      </Layout>
    </BrowserRouter>
  )
}

export default App