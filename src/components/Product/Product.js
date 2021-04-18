import React from 'react';
import Css from './Product.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingBag } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';



const Product = (props) => {
    const { img, name, seller, price, stock ,key} = props.product;
    console.log(props)
    return (
        <div className="product">
            <div>
                <img src={img} alt="" />
            </div>
            <div className="product-description">
                <h4 className="product-name"><Link to={"/product/"+key}>{name}</Link></h4>
                <br />
                <p><small>{seller}</small></p>
                <p><small>${price}</small></p>
                <p><small>Only {stock} left in the stock</small></p>
                {props.showAddToCart && <button class="cart-btn"  onClick={()=>props.handleAddProduct(props.product)}><FontAwesomeIcon icon={faShoppingBag} /><span class="atc">add to cart</span></button>}
            </div>
        </div>
    );
};

export default Product;

