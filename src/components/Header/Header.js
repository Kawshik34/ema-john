import React from 'react';
import logo from '../../images/logo.png';
import css from './Header.css'

const Header = () => {
    return (
        <div className="header">
            <img src={logo} alt="site logo"/>
            <nav>
                <a href="/shop">Shop</a>
                <a href="/order-review">Order Review</a>
                <a href="/manage-inventory">Manage Inventory</a>
            </nav>
        </div>
    );
};

export default Header;