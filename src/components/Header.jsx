import React, { useEffect, useState } from 'react'
import "../css/Header.css"
import { FaShoppingBasket } from "react-icons/fa";
import { CiLight } from "react-icons/ci";
import { FaRegMoon } from "react-icons/fa6";
import { useNavigate } from 'react-router-dom';
import Badge from '@mui/material/Badge';
import { useDispatch, useSelector } from 'react-redux';
import { setDrawer } from '../redux/slices/basketSlice';


function Header() {

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const { products } = useSelector((store) => store.basket)

    const [theme, setTheme] = useState(false);

    const changeTheme = () => {
        const root = document.getElementById("root");
        if (theme) {
            root.style.backgroundColor = "black";
            root.style.color = "#fff"
        } else {
            root.style.backgroundColor = "#fff";
            root.style.color = "black"
        }

        setTheme(!theme)

    }




    return (
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "10px" }}>
            <div className='flex-row'>
                <img onClick={() => { navigate("/") }} className="logo" src="../src/images/logo.png.jpeg" />
                <p className='logo-text'>BEYEM A.Ş.</p>
            </div>

            <div className='flex-row'>
                <input className='input' type="text" placeholder='Aramak için burası ⟳' />
                <div>
                    {
                        theme ? <FaRegMoon className='icons' onClick={changeTheme} style={{ color: "black" }} /> : <CiLight className='icons' onClick={changeTheme} />
                    }

                    <Badge onClick={() => dispatch(setDrawer())} badgeContent={products.length} color="error">
                        <FaShoppingBasket style={{ marginRight: "8px" }} className='icons' />
                    </Badge>


                </div>


            </div>
        </div>
    )
}

export default Header

