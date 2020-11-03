import React from 'react'
import { FiArrowLeft } from 'react-icons/fi'

import LogoImg from '../../assets/images/logo.png'

import './styles.css'

const Navbar = () => {
    return (
        <nav>
            <ul>
                <li>
                    <FiArrowLeft size={30} />
                </li>
                <li>
                    Home
                </li>
                <li>
                    <img src={LogoImg} alt="Find User"/>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar