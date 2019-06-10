import React, {Component} from 'react'
import Classes from './ProfileInfo.module.css'

class ProfileInfo extends Component{

    render(){
        return(
            <div className={Classes.profile_info}>
                <img className={Classes.content_bg} src="https://image4.owler.com/logo/disgusting-men_owler_20160229_212321_original.jpg"/>
                <div className={Classes.personal_data}></div>
            </div>
        )
    }
}

export default ProfileInfo