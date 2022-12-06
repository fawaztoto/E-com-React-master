import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../assets/Library.svg'

const Footer = () => {
    return (
        
        <footer className=''>
            <div className="container">
                <div className="row row__column" >
                    <a href="/">
                        <figure className='footer__Logo'>
                            <img src={Logo} className='footer__logo--img' alt="" />
                        </figure>
                    </a>
                    <div className="footer__list">
                        <Link to="/" className='footer__link'>Home</Link>
                        <span className='footer__link no-cursor'>About</span>
                        <Link to="/books" className='footer__link'>Books</Link>
                        <Link to="/cart" className='footer__link'>Cart</Link>
                    </div>
                    <div className="footer__copyright">
                        Copyright &copy; 2022 Library
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
