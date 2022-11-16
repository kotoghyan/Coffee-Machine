import React from 'react';
import {machineProducts} from "../CoffeeMachineData";

const Menu = () => {
    return (
        <div>
            <h2>Choose coffee or Tea</h2>
            <div>
                <h2>Sugar level</h2>
                <h3>Bitter, Normal, Sweet</h3>
            </div>
            {machineProducts.map(el => <div key={el.id}><span>{el.name}, Code:"{el.code}" price: {el.price}
                <br/><br/></span></div>)}
        </div>
    );
};

export default Menu;