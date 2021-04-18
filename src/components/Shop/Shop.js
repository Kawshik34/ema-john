import { useState } from 'react';
import fakeData from '../../fakeData';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import css from './Shop.css';

const Shop = () => {

    const first7 = fakeData.slice(0, 7);
    const [products, setProducts] = useState(first7);
    const [cart,setCart] = useState([]);

    const handleAddProduct = (product) =>
    {
    const newCart = [...cart,product];
    setCart (newCart);
    }
    return (
        <div className='shop-container'>
            <div className="product-container">
                {
                    products.map(product => <Product showAddToCart={true} handleAddProduct={handleAddProduct} product={product}></Product>)
                }  
            </div>
            <div className="cart-container">
                <Cart  cart={cart} ></Cart>
            </div>
        </div>
    );
};

export default Shop;