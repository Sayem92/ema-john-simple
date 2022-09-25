import React from 'react';

const Cart = ({cart}) => {
    return (
        <div>
                <h4>Orders summary</h4>
                <p>Selected items: {cart.length}</p>
        </div>
    );
};

export default Cart;