import React from "react";
import iconDirectionLeft from '../assets/direction-left.svg';
import iconDirectionRight from '../assets/direction-right.svg';

function PageNumber({ nowPage, totalPage }){
    return (
    <div className="App-Page-Number-container">
        <img src={iconDirectionLeft} alt="left dir Image" className='App-Page-Number-direction-left'/>
        <p className="App-Page-Number-text"> { nowPage } </p>
        <p className="App-Page-Number-text"> / </p>
        <p className="App-Page-Number-text"> {totalPage} </p>
        <img src={iconDirectionRight} alt="right dir Image" className='App-Page-Number-direction-right'/>
    </div>
    );
}

export default PageNumber;