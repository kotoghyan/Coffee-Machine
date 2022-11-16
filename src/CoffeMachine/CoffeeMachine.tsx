import React, {
    ChangeEventHandler,
    KeyboardEventHandler,
    MouseEventHandler,
    useEffect,
    useState
} from 'react';
import {Coffee, machineProducts, SellableProduct, stock, Tea} from "./CoffeeMachineData";
import {validateBalance, validateMoney, validateProductCode, validateStock, validateSugar} from "./utils/validations";
import Dialog from "./components/Dialog";
import Menu from "./components/Menu";
import {soldProduct, SUGAR} from "./constants/general";
import Header from "./components/Header";
import DialogStock, {Keys} from "./components/DialogStock";
import {recalculateReserves} from "./utils/stock";


const CoffeeMachine = () => {
    const [input, setInput] = useState('');
    const [currentProduct, setCurrentProduct] = useState({} as SellableProduct<Coffee | Tea>)
    const [validation, setValidation] = useState(false);
    const [balance, setBalance] = useState(0);
    const [currentSugarLvl, setCurrentSugarLvl] = useState('')
    const [welcome, setWelcome] = useState(true);
    const [preparing, setPreparing] = useState(false);
    const [change, setChange] = useState(0);
    const [menu, setMenu] = useState(false)

    useEffect(() => {
        setTimeout(() => setWelcome(false), 1000);
        setTimeout(() => setMenu(true), 1000);
    }, [welcome])

    const onChangeInput: ChangeEventHandler<HTMLInputElement> = (e) => {
        setInput(e.target.value)
    }
    const makeProduct = async () => {
        if (validateStock(currentProduct)) {
            console.log('if')
            setValidation(false)
            console.log(1)
            await setCurrentProduct(prev => {
                currentProduct.recipe.sugar = SUGAR[currentSugarLvl as never]
                return prev
            })

            if (validateBalance(balance, currentProduct.price)) {
                setPreparing(true);
                soldProduct.push(currentProduct)
                recalculateReserves(currentProduct);
                setMenu(false);
                setTimeout(() => setPreparing(false), 3000);
                setTimeout(() => setChange(balance - currentProduct.price), 3000);
            } else {
                console.log('else')
                setValidation(true)
            }
        }
    }
    const resetPage = () => {
        setWelcome(true)
        setChange(0);
        setCurrentProduct({} as SellableProduct<Coffee | Tea>)
        setBalance(0);
        setCurrentSugarLvl('');
    }
    const validateInput = () => {
        setValidation(false);
        if (validateMoney(input)) {
            setBalance(prev => prev + Number(input));
        } else if (validateSugar(input)) {
            setCurrentSugarLvl(input)
        } else if (validateProductCode(input)) {
            let currentProduct = machineProducts.find(el => el.code === Number(input))
            setCurrentProduct(currentProduct as SellableProduct<Coffee | Tea>);
        } else {
            setValidation(true)
        }
        setInput('')
    }

    const enterButton: MouseEventHandler<HTMLButtonElement> = (e) => {
        validateInput()
    }

    const detectEnterButton: KeyboardEventHandler<HTMLInputElement> = (e) => {
        if (e.key === 'Enter') {
            validateInput()
        }
    }

    return (
        <div>
            <Header onEnter={enterButton}
                    input={input}
                    onKey={detectEnterButton}
                    onMake={makeProduct}
                    onChange={onChangeInput}
                    validation={validation}
                    menu={menu}/>
            {welcome && <h2>Welcome</h2>}
            <Dialog currentProduct={currentProduct}
                    balance={balance} sugar={currentSugarLvl}/>
            <DialogStock/>
            {menu && <Menu/>}
            {preparing && <h2>Preparing coffee</h2>}
            {!!change && <div>
                <h2>take your cash {change}</h2>
                <button onClick={resetPage}>Reset</button>
            </div>}
        </div>
    );
}

export default CoffeeMachine;