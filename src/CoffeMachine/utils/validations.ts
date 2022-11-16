import {MACHINE_PRODUCT_CODES, SUGAR, VALID_MONEY} from "../constants/general";
import {Coffee, SellableProduct, STOCK, stock, Tea} from "../CoffeeMachineData";

export const validateMoney = (inputValue:string) => {
    return VALID_MONEY.includes(Number(inputValue))
}

export const validateSugar = (inputValue:string) => {
    return inputValue in SUGAR
}

export const validateProductCode = (inputValue:string) => {
    return MACHINE_PRODUCT_CODES.includes(Number(inputValue))
}

export const validateBalance = (balance:number, price:number)=>{
    return balance>=price
}


export const validateStock = (cookedProduct:SellableProduct<Coffee | Tea>) => {
    let key: keyof typeof STOCK;
    for (key in stock) {
        if (Number(stock[key]) - Number(cookedProduct.recipe[key]) <= 0) {
            return false
        }
    }
    return true
}