import React from 'react';
import preloader from "./../../assets/img/preloader.gif";

let Preloader = (props) => {
    return <div>
        <img className="preloader" src={preloader}/>
    </div>
};

export default Preloader;