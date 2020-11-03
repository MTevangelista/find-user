import React from 'react'
import { Link } from 'react-router-dom'
import { FiArrowRight } from 'react-icons/fi'

import LogoImg from '../../assets/images/logo.png'

import './styles.css'

const Landing = () => {
    return (
        <div id="page-landing">
            <div className="page-landing-top-content">
                <div className="logo-container">
                    <img src={LogoImg} alt="Find User" />
                </div>
            </div>
            <div className="page-landing-bottom-content">

                <Link to="home" className="enter-app">
                    <p>Entrar</p>
                    <FiArrowRight size={30} />
                </Link>

            </div>
        </div>
    )
}

export default Landing