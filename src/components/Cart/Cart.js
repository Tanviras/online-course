import React from 'react';

const Cart = (props) => {//cart a props ashlo,ei props eseche Courses.js theke. 
    const cart=props.cart;//props er info hocche cart name a, take abar cart-ei rakha holo


    var totalPrice=0;
    for (let i=0;i<cart.length;i++){
        const info=cart[i].price;//je koyta cart ke order deya holo,tader neya holo info te
        totalPrice = (+totalPrice) + (+info);//totalPrice ber kora holo
        // new technique to avoid string addition 
    }

    return (
            <div>

            <h1>Order Summary</h1>
            <div className="cartInfos">
            <p>Courses enrolled: <b>{cart.length}</b></p>{/* koybar order deya hoyeche */}
            <p>Total Price of Courses: <b>${totalPrice}</b></p>{/* total price koto hoyeche */}
            </div>

            </div>
          );
};

export default Cart;