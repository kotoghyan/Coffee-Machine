import {Coffee, SellableProduct, STOCK, stock, Tea} from "../CoffeeMachineData";


export const recalculateReserves = (cookedProduct:SellableProduct<Coffee | Tea>) => {
    if (cookedProduct.recipe.sugar){
        let key: keyof typeof STOCK;
        for (key in stock) {
            if (cookedProduct.recipe[key]) {
                stock[key] = Number(stock[key]) - Number(cookedProduct.recipe[key])
                if (stock[key] <= 0){
                    break;
                }
            }
        }
    }
}