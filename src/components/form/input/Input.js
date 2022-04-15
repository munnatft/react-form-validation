import React from 'react';

const Input = (props) => {

    const {label, error,styles , ...inputProps} = props;
    
    return (
        <div className={styles}>
            <label>{label}</label>
            <input {...inputProps} />
            {error && <small>{error}</small>}
        </div>
    )
}

export default Input;
