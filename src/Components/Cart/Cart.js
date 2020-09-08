import React from 'react';

const Cart = (props) => {
    const cart = props.cart;
    const totalPrice = cart.reduce((total, course) => total + course.price, 0);
    return (
        <div>
            <h3>Total course added: {cart.length}</h3>
            <h4>total price: {totalPrice}</h4>
            <button style={{padding: '5px', borderRadius: '3px'}}>checkout</button>
        </div>
    );
};

export default Cart;