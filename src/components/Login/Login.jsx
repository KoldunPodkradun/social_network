import React from 'react';
import styles from './Login.module.css';
import {Field, reduxForm} from "redux-form";
import {createField, Input} from "../Common/FormsControls";
import {required} from "../../Utilities/Validators";
import {connect} from "react-redux";
import {login} from "../../redux/authReducer";
import {Redirect} from "react-router-dom";

const LoginForm = ({handleSubmit, error}) => {

    return <div>
        <form onSubmit={handleSubmit} className={styles.loginForm}>
            {createField('Email', 'email', [required], Input)}
            {createField('Password', 'password', [required], Input, {type: 'password'})}
            {createField(null, 'rememberMe', null, Input, {type: 'checkbox'}, 'Remember me')}
            {error && <div className={styles.error}>{error}</div>}
            <div className={styles.inputWrapp}>
                <button>Submit</button>
            </div>
        </form>
    </div>

};

const LoginReduxForm = reduxForm({form: 'login'})(LoginForm);

const Login = (props) => {
    const onSubmit = (formData) => {
        props.login(formData.email, formData.password, formData.rememberMe);
    };

    if (props.isAuth) {
        return <Redirect to={'/profile'}/>
    }

    return <div>
        <h1 className={styles.title}>Login</h1>
        <LoginReduxForm onSubmit={onSubmit}/>
    </div>
};

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth
});

export default connect(mapStateToProps, {login})(Login);