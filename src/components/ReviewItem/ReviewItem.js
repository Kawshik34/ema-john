import React from 'react';

const ReviewItem = (props) => {

    const {name,quantity,key} = props.product

    return (
        <div style={{borderBottom:'2px solid grey',borderRight:'2px sloid grey', padding:'10px 0 0 20px'}}>
            <p><b>{name}</b></p>
            <h6>Quantity: {quantity}</h6>
            <button onClick={()=>props.removeProduct(key)} style={{margin:'0 0 10px 0'}} className="btn-warning p-1 rounded">Remove Item</button>
        </div>
    );
};

export default ReviewItem;