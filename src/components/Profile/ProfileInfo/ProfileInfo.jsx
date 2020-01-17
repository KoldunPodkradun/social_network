import React from 'react';
import styles from './ProfileInfo.module.css';
import Preloader from "../../Common/Preloader";
import avatarDefault from "../../../assets/img/logo.jpg";
import ProfileStatus from "./ProfileStatus";

let ProfileInfo = (props) => {
    if (!props.profile) {
        return <Preloader/>
    }

    let photosLarge = props.profile.photos.large;
    let aboutMe = props.profile.aboutMe;
    let lookingForAJob = props.profile.lookingForAJob;

    return (
        <div className={styles.profile_info}>
            <img className={styles.content_photo}
                 src={photosLarge !== null ? photosLarge : avatarDefault}/>
            <div className={styles.content_info}>
                <div><span>Name:</span> {props.profile.fullName}</div>
                <ProfileStatus status={props.status} updateStatus={props.updateStatus}/>
                {aboutMe !== null ? <div><span>About Me:</span> {aboutMe}</div> : ''}
                <div><span>Looking for a job:</span> {lookingForAJob == true ? 'Yes' : 'no'}</div>
            </div>
        </div>
    )
};

export default ProfileInfo;