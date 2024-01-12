import React from "react";

function TitleMain({name}){
    const userName = "userName";

    return (
        <div className="App-title-main">
            <div className="App-title-main-name-container">
                <p className="App-title-main-text-bold">{name}님</p>
                <p className="App-title-main-text">에게</p>
            </div>
            <p className="App-title-main-text">마음을 전달해보세요!</p>
        </div>
    );
}
export default TitleMain;