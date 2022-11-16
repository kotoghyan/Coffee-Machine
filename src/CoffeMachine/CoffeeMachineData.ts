import {SUGAR} from "./constants/general";

interface Product {
    name: string,
    type: PRODUCT_TYPE,
}

export enum STOCK {
    coffee = 'coffee',
    water = 'water',
    milk = 'milk',
    spoon = 'spoon',
    sugar = 'sugar',
    cup = 'cup',
    greenTea = 'greenTea',
    blackTea = 'blackTea'
}

interface Recipe {
    [STOCK.spoon]: number,
    [STOCK.water]: number,
    [STOCK.cup]: number,
    [STOCK.blackTea]?: number,
    [STOCK.greenTea]?: number,
    [STOCK.coffee]?: number,
    [STOCK.milk]?: number,
    [STOCK.sugar]?: SUGAR,
}

export const stock = {
    [STOCK.coffee]: 1000,
    [STOCK.water]: 1000,
    [STOCK.milk]: 1000,
    [STOCK.spoon]: 100,
    [STOCK.sugar]: 1000,
    [STOCK.cup]: 100,
    [STOCK.greenTea]: 100,
    [STOCK.blackTea]: 100
}


export interface SellableProduct<T extends Coffee | Tea> extends Product {
    price: number
    name: T extends Coffee ? COFFEE_NAMES : TEA_NAMES
    code: T extends Coffee ? COFFEE_CODES : TEA_CODES
    id: number
    type: T['type']
    recipe: Recipe
}

export interface Coffee extends Product {
    name: COFFEE_NAMES
    type: PRODUCT_TYPE.coffee
}

export interface Tea extends Product {
    name: TEA_NAMES
    type: PRODUCT_TYPE.tea
}

enum COFFEE_CODES {
    A = 1,
    B,
    C,
    D,
    F,
    G,
}

enum TEA_CODES {
    A = 20,
    B,
    C,
    D,
    F,
    G,
}

enum PRODUCT_TYPE {
    coffee = 'Coffee',
    tea = "Tea",
}

enum COFFEE_NAMES {
    espresso = 'Espresso',
    cappuccino = 'Cappuccino',
    americano = 'Americano',
    latte = 'Coffee Latte'
}

enum TEA_NAMES {
    black = 'Black Tea',
    green = 'Green Tea'
}

const coffees: Record<keyof typeof COFFEE_NAMES, Coffee> = {
    espresso: {
        name: COFFEE_NAMES.espresso,
        type: PRODUCT_TYPE.coffee,
    },
    cappuccino: {
        name: COFFEE_NAMES.cappuccino,
        type: PRODUCT_TYPE.coffee,
    },
    americano: {
        name: COFFEE_NAMES.americano,
        type: PRODUCT_TYPE.coffee,
    },
    latte: {
        name: COFFEE_NAMES.latte,
        type: PRODUCT_TYPE.coffee,
    },
}
const teas: Record<keyof typeof TEA_NAMES, Tea> = {
    black: {
        name: TEA_NAMES.black,
        type: PRODUCT_TYPE.tea,
    },
    green: {
        name: TEA_NAMES.green,
        type: PRODUCT_TYPE.tea,
    },
}

const sellableCoffees: Array<SellableProduct<Coffee>> = [
    {
        name: COFFEE_NAMES.espresso,
        type: coffees.espresso.type,
        price: 150,
        code: COFFEE_CODES.A,
        id: 1,
        recipe: {
            [STOCK.cup]: 1,
            [STOCK.spoon]: 1,
            [STOCK.water]: 100,
            [STOCK.coffee]: 30,
        }
    },
    {
        name: COFFEE_NAMES.cappuccino,
        type: coffees.cappuccino.type,
        price: 250,
        code: COFFEE_CODES.B,
        id: 2,
        recipe: {
            [STOCK.cup]: 1,
            [STOCK.spoon]: 1,
            [STOCK.water]: 100,
            [STOCK.milk]: 50,
            [STOCK.coffee]: 15,
        }
    },
    {
        name: COFFEE_NAMES.americano,
        type: coffees.americano.type,
        price: 200,
        code: COFFEE_CODES.C,
        id: 3,
        recipe: {
            [STOCK.cup]: 1,
            [STOCK.spoon]: 1,
            [STOCK.water]: 150,
            [STOCK.coffee]: 15
        }
    },
    {
        name: COFFEE_NAMES.latte,
        type: coffees.latte.type,
        price: 250,
        code: COFFEE_CODES.D,
        id: 4,
        recipe: {
            [STOCK.cup]: 1,
            [STOCK.spoon]: 1,
            [STOCK.milk]: 100,
            [STOCK.water]: 50,
            [STOCK.coffee]: 15,
        }
    },
]

const sellableTeas: Array<SellableProduct<Tea>> = [
    {
        name: TEA_NAMES.black,
        type: teas.black.type,
        price: 150,
        code: TEA_CODES.A,
        id: 5,
        recipe: {
            [STOCK.cup]: 1,
            [STOCK.spoon]: 1,
            [STOCK.water]: 150,
            [STOCK.blackTea]: 1,
        }
    },
    {
        name: TEA_NAMES.green,
        type: teas.green.type,
        price: 150,
        code: TEA_CODES.B,
        id: 6,
        recipe: {
            [STOCK.cup]: 1,
            [STOCK.spoon]: 1,
            [STOCK.water]: 150,
            [STOCK.greenTea]: 1,
        }
    },
]


export const machineProducts: Array<SellableProduct<Coffee | Tea>> = [...sellableCoffees, ...sellableTeas]


