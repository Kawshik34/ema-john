import React from 'react';
import { Link } from 'react-router-dom';

const Cart = (props) => {
    const cart = props.cart;
    const total = cart.reduce((total, prd) => total + prd.price * prd.quantity, 0);
    debugger;

    let shipping = 0;
    if (total > 50 && total <= 100) {
        shipping = 7;
    }
    else if (total <= 50 && total > 0) {
        shipping = 8;
    }
    else {
        shipping = 0;
    }

    const vat = ((shipping + total) * .05).toFixed(2);
    const grandTotal = Number(vat) + (shipping + total);

    const formatNumber = (num) => {
        const precision = num.toFixed(2);
        return Number(precision);
    }

    return (
        <div>
            <h2>Order Summary</h2>
            <p>Items Ordered : {cart.length}</p>
            <p>Shipping Cost {shipping}</p>
            <p>Sub Total Amount : {formatNumber(total)}</p>
            <p>Vat 5% :{vat}</p>
            <p>Total Amount : {formatNumber(grandTotal)}</p>
            <Link to="/review"><button class="btn-warning">Review Your Order</button></Link>
        </div>
    );
};

export default Cart;