import React from "react";
import iconSetting from '../assets/setting.svg';

function MainHeader(){
    return (
    <div className="App-main-header">
        <img src={iconSetting} alt="setting Image" className='App-main-header-setting'/>
    </div>
    );
}

export default MainHeader;