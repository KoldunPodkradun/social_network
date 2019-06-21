import React, {Component} from 'react'
import Classes from './Profile.module.css'
import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from './ProfileInfo/ProfileInfo';

class Profile extends Component{
    render(){
        return(
            <div className={Classes.content}>
                <ProfileInfo/>
                <MyPosts
                    posts={this.props.profileData.posts}
                    newPostText={this.props.profileData.newPostText}
                    dispatch={this.props.dispatch}
                />
            </div>
        )
    }
}

export default Profile