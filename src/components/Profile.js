import React, {Component} from 'react'

class Profile extends Component{

    render(){
        return(
            <div className="content">
                <img src="https://image4.owler.com/logo/disgusting-men_owler_20160229_212321_original.jpg" className="content_bg"/>
                <div className="personal_data"></div>
                <div className="my_posts"></div>
            </div>
        )
    }
}

export default Profile