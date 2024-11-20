import React from 'react'
import "../css/Product.css"
import { useNavigate } from 'react-router-dom';

function Product({ product }) {

    const { title, price, description, image, category, id } = product;

    const navigate = useNavigate()

    return (

        <div className='card'>
            <img className='img-style' src={image} />
            <div className='description'>
                <p style={{ height: "85px" }}> Ürün : <br /> {title}</p>
                <h3>Fiyatı :{price} ₺ </h3>


            </div>
            <div className='flex-row'>

                <button className='detail-button' onClick={() => navigate(`/product-details/${id}`)}>Detayına git</button>
            </div>
        </div >
    )
}

export default Product
