import React, { useEffect, useState } from 'react';
import { getDatabaseCart, removeFromDatabaseCart } from '../../utilities/databaseManager';
import fakeData from '../../fakeData'
import ReviewItem from '../ReviewItem/ReviewItem';
import Cart from '../Cart/Cart'

const Review = () => {
    const [cart, setCart] = useState([])

    const removeProduct = (key) => {
        const newCart = cart.filter(pd => pd.key !== key)
        setCart(newCart)
        removeFromDatabaseCart(key)
    }

    useEffect(() => {
        const savedCart = getDatabaseCart();
        const productKeys = Object.keys(savedCart)
        const cartProducts = productKeys.map(key => {
            const product = fakeData.find(pd => pd.key === key)
            product.quantity = savedCart[key]
            return product;
        })
        setCart(cartProducts)
    }, [])
    return (
        <div style={{display:'flex'}}>
            <div style={{width:'70%'}}>
                {
                    cart.map(pd => <ReviewItem removeProduct={removeProduct} product={pd}></ReviewItem>)
                }
            </div>
            <div style={{borderLeft:'2px solid grey',padding:'20px'}}>
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Review;