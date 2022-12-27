import { useState } from 'react';


export const AddCategory=({ onNewValue })=>{
    const [inputValue, setInputValue] = useState('');
    
    const onInputChanged =({target})=>{
        // console.log(target.value);
         setInputValue(target.value);
    }

    const onSubmit =(event)=>{
        event.preventDefault();
        // console.log(inputValue);
        if (inputValue.trim().length<=1)return;
        // setCategories( Categories=> [inputValue,...Categories]);
        onNewValue(inputValue.trim());

        setInputValue('');
    }

    return (
        <form onSubmit={(event)=> onSubmit(event) }>
            <input 
                type="text"
                placeholder="Buscar gifts"
                value={inputValue}
                onChange={ onInputChanged }
            />
        </form>
        
    )
}