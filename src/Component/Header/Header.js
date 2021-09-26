import React from 'react';
import logo from '../../images/logo.png'
import headerImg from '../../images/doctor.jpg'
import './Header.css'
const Header = () => {
    return (
        <div className="header-section">
            <header className="header">
                <div className="logo">
                    <h1>Doctors </h1>
                </div>
                <div className="navigation">
                    <nav><a href="/home">Home</a>
                        <a href="/booking">Booking</a>
                        <a href="/about">About</a>
                        <a href="/Contact">Contact</a>
                    </nav>
                </div>
            </header>

            <div className="slider-main">
                <div className="slider-section">

                    <div className="header-text">
                        <h5>WE TAKE CARE OF YOUR </h5>
                        <h2>BRIGHTER </h2>
                        <h1>FUTURE</h1>
                        <h1>Hospital make budget : $1000000 </h1>

                    </div>
                    <div className="image-section">
                        <img src={headerImg} alt="" />
                    </div>

                </div>
            </div>


        </div>
    );
};

export default Header;