import React from 'react';
import styles from './Login.module.css';
import {Field, reduxForm} from "redux-form";
import {Input} from "../Common/FormsControls";
import {required} from "../../Utilities/Validators";
import {connect} from "react-redux";
import {login} from "../../redux/authReducer";
import {Redirect} from "react-router-dom";

const LoginForm = (props) => {

    return <div>
        <form onSubmit={props.handleSubmit} className={styles.loginForm}>

            <div className={styles.inputWrapp}>
                <Field placeholder={'email'} name={'email'}
                       component={Input}
                       validate={[required]}
                />
            </div>
            <div className={styles.inputWrapp}>
                <Field placeholder={'Password'} name={'password'} type={'password'}
                       component={Input}
                       validate={[required]}
                />
            </div>
            <div className={styles.inputWrapp}>
                <Field type={'checkbox'} name={'rememberMe'}
                       component={Input}
                />
            </div>
            {props.error && <div className={styles.error}>{props.error}</div>}
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