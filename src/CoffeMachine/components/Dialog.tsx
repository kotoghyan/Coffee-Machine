import React from 'react';
import {Coffee, SellableProduct, Tea} from "../CoffeeMachineData";
type Props = {
    currentProduct: SellableProduct<Coffee | Tea>,
    sugar:string,
    balance:number
}

const Dialog = ({currentProduct:product,sugar,balance}:Props) => {
    return (
        <dialog open style={{marginLeft: '60px'}}>
            Balance:{balance > 0 && <span> {balance}<br/></span>}
            <p>Coffee or Tea:{product.name} </p>
            <p>Sugar level:{sugar} </p>
            <p>Price: {product.price}</p>
        </dialog>
    );
};

export default Dialog;