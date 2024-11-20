import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getAllProducts } from '../redux/slices/productSlice';
import Product from './Product';




function ProductList() {

    const dispatch = useDispatch();
    const { products } = useSelector((store) => store.product)



    useEffect(() => {
        dispatch(getAllProducts())
    }, [])

    return (
        <div className='flex-row' style={{ flexWrap: "wrap", gap: "10px", marginTop: "25px" }}>
            {
                products && products.map((product) =>
                    <Product key={product.id} product={product} />
                )
            }
        </div>
    )
}

export default ProductList
