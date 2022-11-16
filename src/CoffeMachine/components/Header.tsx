import React, {ChangeEventHandler, KeyboardEventHandler, MouseEventHandler} from 'react';

type HeaderPropsType = {
    onEnter:MouseEventHandler<HTMLButtonElement>,
    onKey:KeyboardEventHandler<HTMLInputElement>,
    onMake:()=>void,
    onChange:ChangeEventHandler<HTMLInputElement>
    validation:boolean
    input:string
    menu:boolean
}

const Header = ({onEnter,onKey,onMake,onChange, validation,input,menu}:HeaderPropsType) => {
    return (
        <div>
            <input onChange={onChange} onKeyDown={onKey} value={input} disabled={!menu}/>
            <br/>
            {validation && <span style={{color: 'red'}}>Error Message</span>}
            <br/>
            <button onClick={onEnter} disabled={!menu}>Enter</button>
            <button style={{marginLeft:'5px'}} onClick={onMake} disabled={!menu}>Make</button>
        </div>
    );
};

export default Header;