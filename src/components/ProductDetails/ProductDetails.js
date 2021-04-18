import React from 'react';
import { useParams } from 'react-router';
import fakeData from '../../fakeData';
import Product from '../Product/Product';

const ProductDetails = () => {
    const {productKey} = useParams()
    const produc = fakeData.find(pd=>pd.key===productKey);
    
    return (
        <div>
            <h2>Full Product details</h2>
            <Product showAddToCart={false} product={produc}></Product>
        </div>
    );
};

export default ProductDetails;