import React from 'react';
import Classes from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from './ProfileInfo/ProfileInfo';

const Profile = (props) => {
    return (
        <div className={Classes.content}>
            <ProfileInfo/>
            <MyPosts
                posts={props.profileData.posts}
                newPostText={props.profileData.newPostText}
                dispatch={props.dispatch}
            />
        </div>
    )
};

export default Profile;