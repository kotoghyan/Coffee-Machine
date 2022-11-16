import {Coffee, machineProducts, SellableProduct, Tea} from "../CoffeeMachineData";

export const VALID_MONEY = [50, 100, 200, 500, 1000,2000, 5000];
export enum SUGAR {
    Bitter = '0',
    Normal = '15',
    Sweet = '30'
}
export const MACHINE_PRODUCT_CODES = machineProducts.map(el => el.code)
export const soldProduct:Array<SellableProduct<Coffee | Tea>> = []


























// type CurrentProductType = {
//     _name?: string,
//     setName?: any
//     getName: () => string
//
//     _sugar: string
//     setSugar: (sugar: string) => void,
//     getSugar: () => string
//
//     _price: number,
//     getPrice: () => number
//
//     balance: number
//     remnant: number
//     change: () => number | undefined
// } | undefined
// @ts-ignore
// export let currentProduct: CurrentProductType = {
//     _name: '',
//     setName: (name: string) => {
//         // @ts-ignore
//         this._name = name
//     },
//     // @ts-ignore
//     getName: () => this?._name,
//
//     _sugar: '',
//     setSugar: (sugar) => this._sugar = sugar,
//     getSugar: () => this._sugar,
//
//     _price: 0,
//     getPrice: () => this._price,
//
//     balance: 0,
//
//     remnant: 0,
//     change: () => {
//         return this?.remnant = this?.balance - this?.price
//     }
// // }
//
// currentProduct.setName('karo')
// console.log(currentProduct.getName())