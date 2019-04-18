import React, {Component} from 'react'
import Classes from './Profile.module.css'
import MyPosts from './MyPosts/MyPosts';

class Profile extends Component{

    render(){
        return(
            <div className={Classes.content}>
                <img className={Classes.content_bg} src="https://image4.owler.com/logo/disgusting-men_owler_20160229_212321_original.jpg"/>
                <div className={Classes.personal_data}></div>
                <MyPosts/>
            </div>
        )
    }
}

export default Profile