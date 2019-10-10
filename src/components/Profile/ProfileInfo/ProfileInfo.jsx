import React from 'react';
import Classes from './ProfileInfo.module.css';
import Preloader from "../../Common/Preloader";

let ProfileInfo = (props) => {
    if (!props.profile){
        return <Preloader/>
    }

    return (
        <div className={Classes.profile_info}>
            <div>
                <img className={Classes.content_photo} src={props.profile.photos.large} />
            </div>
        </div>
    )
};

export default ProfileInfo;