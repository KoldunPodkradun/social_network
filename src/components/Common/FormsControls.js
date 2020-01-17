import React from "react";
import styles from './FormControl.module.css';

// {input, meta, ...props} рест оператор

export const Input = ({input, meta, ...props}) => {

    const hassError = meta.touched && meta.error;

    return (
        <div className={styles.inputWrapp + ' ' + (hassError ? styles.error : '')}>
            <input {...input} {...props}/>
            {hassError && <span>{meta.error}</span>}
        </div>
    )
}