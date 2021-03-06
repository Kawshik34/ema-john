import { useState } from 'react';
import fakeData from '../../fakeData';
import { addToDatabaseCart } from '../../utilities/databaseManager';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import css from './Shop.css';

const Shop = () => {

    const first7 = fakeData.slice(0, 7);
    const [products, setProducts] = useState(first7);
    const [cart,setCart] = useState([]);

    const handleAddProduct = (product) =>
    {
    
    const toBeAddedKey = product.key;
    const sameProduct = cart.find(pd=>pd.key===toBeAddedKey);

    let count =1;
    let newCart;
    if(sameProduct){
        count = sameProduct.quantity+1;
        sameProduct.quantity=count;
        const others = cart.filter(pd=>pd.key!==toBeAddedKey)
        newCart=[...others,sameProduct]
    }
    else{
        product.quantity=1;
        newCart = [...cart,product]
    }
    setCart (newCart); 
    addToDatabaseCart(product.key,count)
    }
    return (
        <div className='shop-container'>
            <div className="product-container">
                {
                    products.map(product => <Product key={product.key} showAddToCart={true} handleAddProduct={handleAddProduct} product={product}></Product>)
                }  
            </div>
            <div className="cart-container">
                <Cart  cart={cart} ></Cart>
            </div>
        </div>
    );
};

export default Shop;