import React from "react";
import iconX from '../assets/icon-x.svg';

function SettingHeader({ userName }){
    return (
    <div className="App-Setting-Header-container">
        <p className="App-Setting-Header-username"> {userName} 님</p>
        <img src={iconX} alt="back button Image" className='App-Setting-Header-cancle'/>
    </div>
    );
}

export default SettingHeader;