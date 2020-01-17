import React from 'react';
import styles from './MyPosts.module.css';
import Post from './Post/Post';
import {Field, reduxForm} from "redux-form";
import {maxLengthCreator, required} from "../../../Utilities/Validators";
import {Input} from "../../Common/FormsControls";

let MyPosts = (props) => {
    let postElement = props.posts.map((p) => <Post key={p.id} id={p.id} text={p.text} likes={p.likes}/>);

    let addNewPosts = (values) => {
        props.addPost(values.newPostText);
    };

    return (
        <div className={styles.my_posts}>
            {postElement}
            <AddPostFormRedux onSubmit={addNewPosts}/>
        </div>
    )
};

const maxLength10 = maxLengthCreator(10);

const AddPostForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit} className={styles.add}>
            <Field className={styles.postInput} component={Input} name={'newPostText'} placeholder={'Enter you post'}
                   validate={[required, maxLength10]}/>
            <button className={styles.btn}>Add</button>
        </form>
    )
};

const AddPostFormRedux = reduxForm({
    form: 'MyPostForm'
})(AddPostForm);

export default MyPosts;