import React from 'react';
import Classes from './Login.module.css';
import {Field, reduxForm} from "redux-form";

const LoginForm = (props) => {

    return <div>
        <form onSubmit={props.handleSubmit} className={Classes.loginForm}>
            <div className={Classes.inputWrapp}>
                <Field placeholder={'Login'} name={'login'} component={'input'}/>
            </div>
            <div className={Classes.inputWrapp}>
                <Field placeholder={'Password'} name={'password'} component={'input'}/>
            </div>
            <div className={Classes.inputWrapp}>
                <Field component={'input'}  type={'checkbox'} name={'remember'}/>
            </div>
            <div className={Classes.inputWrapp}>
                <button>Submit</button>
            </div>
        </form>
    </div>

};

const LoginReduxForm = reduxForm({
    form: 'login'
})(LoginForm);

const Login = (props) => {
    const onSubmit = (formData) => {
      console.log(formData);
    };

    return <div>
        <h1 className={Classes.title}>Login</h1>
        <LoginReduxForm onSubmit={onSubmit}/>
    </div>
};

export default Login;