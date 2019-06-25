import React from 'react';
import Classes from './ProfileInfo.module.css';

let ProfileInfo = () => {
    return (
        <div className={Classes.profile_info}>
            <img className={Classes.content_bg} src="https://image4.owler.com/logo/disgusting-men_owler_20160229_212321_original.jpg" alt="#"/>
            <div className={Classes.personal_data}></div>
        </div>
    )
};

export default ProfileInfo;