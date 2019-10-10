import React from 'react';
import Classes from './ProfileInfo.module.css';
import Preloader from "../../Common/Preloader";

let ProfileInfo = (props) => {
    if (!props.profile){
        return <Preloader/>
    }

    return (
        <div className={Classes.profile_info}>
            <img className={Classes.content_bg} src={props.profile.photos.large} />

            <div className={Classes.personal_data}></div>
        </div>
    )
};

export default ProfileInfo;