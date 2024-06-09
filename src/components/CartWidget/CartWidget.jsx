import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const CartWidget = () => {
    return (
        <div className="cart-widget">
            <FontAwesomeIcon icon={"shopping-cart"} />
        </div>
    );
}

export default CartWidget;