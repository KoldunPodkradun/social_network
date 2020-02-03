import React from 'react';
import styles from './ProfileInfo.module.css';
import Preloader from "../../Common/Preloader";
import avatarDefault from "../../../assets/img/logo.jpg";
import ProfileStatus from "./ProfileStatus";

let ProfileInfo = (props) => {
    if (!props.profile) {
        return <Preloader/>
    }
    return (
        <div className={styles.profile_info}>
            <img className={styles.content_photo}
                 src={props.profile.photos.large !== null ? props.profile.photos.large : avatarDefault}/>
            <div className={styles.content_info}>
                <div><span>Name:</span> {props.profile.fullName}</div>
                <ProfileStatus status={props.status} updateStatus={props.updateStatus}/>
                {props.profile.aboutMe !== null ? <div><span>About Me:</span> {props.profile.aboutMe}</div> : ''}
                <div><span>Looking for a job:</span> {props.profile.lookingForAJob == true ? 'Yes' : 'no'}</div>
            </div>
        </div>
    )
};

export default ProfileInfo;