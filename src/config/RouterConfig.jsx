import React from 'react'
import { Routes, Route, useParams } from 'react-router-dom'
import Home from "../pages/Home"
import ProductDetails from '../components/ProductDetails'
import ProductList from '../components/ProductList'
import Footer from '../components/Footer'

function RouterConfig() {


    return (

        <Routes>
            <Route path='/' element={<Home />} />

            <Route path='/product-details/:id' element={<ProductDetails />} />
            <Route path='/product-list' element={<ProductList />} />


        </Routes>

    )
}

export default RouterConfig
