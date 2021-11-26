import React from 'react';

function Button ({title, inputType, inputName, inputValue, setInputValue}) {
    return (
        <label>
            {title}
        <input
            type={inputType}
            name={inputName}
            value={inputValue}
            onChange={(e) => setInputValue (e.target.value)}
        />
        </label>
    );
}

export default Button;