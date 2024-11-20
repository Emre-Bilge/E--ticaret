import React from 'react'

import { FaWhatsapp } from "react-icons/fa";
import { CiFacebook } from "react-icons/ci";
import { FaInstagram } from "react-icons/fa6";
import { BiSolidPhoneIncoming } from "react-icons/bi";
import "../css/Footer.css"

function Footer() {
    return (
        <div className='footer'>

            <div className='footer1'>
                <a href="https://facebook.com"> <span className='footer-icons' > <FaWhatsapp /> facebook </span> </a>
                <a href="https://instagram.com"> <span className='footer-icons'> <FaInstagram /> instagram</span></a>
            </div>


            <div className='footer1'>

                <a href=""> <span className='footer-icons'> <BiSolidPhoneIncoming /> İletişim : (+90) 507 727 16 38 </span></a>
                <a href="https://watsapp.com"> <span className='footer-icons'><CiFacebook />whatsapp</span></a>
            </div>



        </div >
    );
}

export default Footer
