import React from 'react';
import './Cart.css'

const Cart = (props) => {
    console.log(props.name);
    const { cart, name } = props
    let total = 0;
    for (const doctor of cart) {
        total = total + doctor.bookingFee
    }


    return (
        <div>
            <h3>booking summary</h3>
            <h4>Appointment  {props.cart.length} </h4>
            <h4> name : {name} </h4>
            <h3> Total amount : {total} </h3>
        </div>
    );
};

export default Cart;