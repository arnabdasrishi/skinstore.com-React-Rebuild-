import React from 'react'
import { Route, Routes } from 'react-router-dom'
import HomePage from '../Components/HomePage/HomePage'
import ProductsPage from '../Components/ProductsPage/ProductsPage'

const AllRoutes = () => {
  return (
    <Routes>
        <Route path="/" element={<HomePage />}/>
        <Route path='/products' element={<ProductsPage />}/>
    </Routes>
  )
}

export default AllRoutes