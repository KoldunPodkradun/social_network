import React from "react";
import styles from './FormControl.module.css';
import {Field} from "redux-form";

// {input, meta, ...props} рест оператор

export const Input = ({input, meta: {touched, error}, ...props}) => {

    const hassError = touched && error;

    return (
        <div className={styles.inputWrapp + ' ' + (hassError ? styles.error : '')}>
            <input {...input} {...props}/>
            {hassError && <span>{error}</span>}
        </div>
    )
};

export const createField = (placeholder, name, validators, components, props = {}, text = '') =>
    <Field
        placeholder={placeholder}
        name={name}
        component={components}
        validate={validators}
        {...props}
    />;


