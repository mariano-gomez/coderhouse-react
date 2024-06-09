import React from 'react';
import ItemCount from "../ItemCount/ItemCount.jsx";

function ItemDetail({ product: { id, name, stock, price, description }, ...props }) {

    return (
        <div>
            <p>
                <b>Precio:</b> ${price}
            </p>
            <p>
                <b>nombre:</b> ${name}
            </p>
            <p>
                <b>Detalle del producto:</b>
                <br/>
                {description}
            </p>
            <br/>
            <ItemCount stock={stock} valorInicial={1} />
        </div>
    );
}

export default ItemDetail;