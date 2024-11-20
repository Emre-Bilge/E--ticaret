import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom';
import { setSelectedProduct } from '../redux/slices/productSlice';
import "../css/ProductDetails.css"
import { CiCirclePlus } from "react-icons/ci";
import { CiCircleMinus } from "react-icons/ci";
import { addToBasket, calculateBasket } from '../redux/slices/basketSlice';


function ProductDetails() {

    const { id } = useParams();

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const { products, selectedProduct } = useSelector((store) => store.product);
    const { title, price, description, image, category } = selectedProduct;

    const [count, setCount] = useState(0)

    useEffect(() => {
        getProductById();
    }, [])

    const getProductById = () => {
        products && products.map((product) => {
            if (product.id == id) {
                dispatch(setSelectedProduct(product))
            }
        })
    }

    const increaseFn = () => {
        setCount(count + 1)
    }

    const decreaseFn = () => {
        if (count <= 0) {
            setCount(count)
        } else {
            setCount(count - 1)
        }
    }

    const addBasket = () => {
        const payload = {
            id,
            title,
            price,
            image,
            description,
            count
        }
        dispatch(addToBasket(payload))
        dispatch(calculateBasket())
    }


    return (
        <div className='detail-flex-row'>
            <div>
                <img className='detail-img' src={image} alt="" />
            </div>
            <div className='detail-content'>
                <h3 style={{ fontFamily: "arial", fontSize: "25px" }}>{title}</h3>
                <p className='description1'>{description} </p>
                <h2 className='h2-style'><span className='span'>Fiyat :</span> {price}  ₺ </h2>

                <div className='flex-row'>
                    <CiCirclePlus onClick={increaseFn} className='product-details-icons' />
                    <span className='product-details-icons' onClick={increaseFn}> {count} </span>
                    <CiCircleMinus onClick={decreaseFn} className='product-details-icons' />

                </div>

                <div className='flex-row'>
                    <button className='details-button' onClick={addBasket} >Sepete Ekle</button>
                    <button onClick={() => navigate(`/product-list`)} style={{ marginLeft: "10px", backgroundColor: "rgb(193, 161, 150)", cursor: "pointer" }} className='details-button' >Anasayfaya Dön</button>
                </div>


            </div>


        </div >
    )
}

export default ProductDetails
