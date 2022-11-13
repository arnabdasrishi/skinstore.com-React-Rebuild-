import React from 'react'
import { Route, Routes } from 'react-router-dom'
import HomePage from '../Components/HomePage/HomePage'
import Login from '../Components/Login'
import ProductsDetailedPage from '../Components/ProductsPage/ProductsDetailedPage'
import ProductsPage from '../Components/ProductsPage/ProductsPage'

const AllRoutes = () => {
  return (
    <Routes>
        <Route path="/" element={<HomePage />}/>
        <Route path='/products' element={<ProductsPage />}/>
        <Route path="/products/:id" element={<ProductsDetailedPage />}/>
        <Route path="/login" element={<Login />}/>
    </Routes>
  )
}

export default AllRoutes