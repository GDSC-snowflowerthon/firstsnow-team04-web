import React from "react";
import iconDirection from '../assets/direction-left.svg';

function BackHeader(){
    return (
    <div className="App-back-header">
        <img src={iconDirection} alt="back button Image" className='App-back-header-setting'/>
    </div>
    );
}

export default BackHeader;