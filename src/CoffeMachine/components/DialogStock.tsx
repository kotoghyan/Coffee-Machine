import React from 'react';
import {stock, } from "../CoffeeMachineData";

export type Keys<T> = Array<keyof T>


const DialogStock = () => {
    const stockKys =  Object.keys(stock) as Keys<typeof stock>;
    return (
        <dialog open style={{marginRight: '60px'}}>
            <ul>
                {
                    stockKys.map((key,)=>{
                        return (
                            <li key={key}>{key} : {stock[key]}</li>
                        )
                    })
                }

            </ul>
        </dialog>
    );
};

export default DialogStock;