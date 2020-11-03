import React from 'react'
import { FiArrowLeft } from 'react-icons/fi'
import { Link } from 'react-router-dom'

import LogoImg from '../../assets/images/logo.png'

import './styles.css'

const Navbar = (props) => {
    return (
        <header className="page-header">
            <nav className="page-header-navbar">
                <ul>
                    <li>
                        <Link to="/">
                            <FiArrowLeft size={30} />
                        </Link>
                    </li>
                    <li className="page-header-navbar-title">
                        Home
                    </li>
                    <li>
                        <img src={LogoImg} alt="Find User" />
                    </li>
                </ul>
            </nav>

            <div className="header-content">
                <strong>{props.description}</strong>
                <p>{props.totalUsers} usuários</p>
            </div>
        </header>
    )
}

export default Navbar