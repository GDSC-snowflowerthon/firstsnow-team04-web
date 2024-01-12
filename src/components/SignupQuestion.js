import React from "react";

function SignupQuestion({userName}){
    return (
        <div className="App-signup-question-container">
            <p className="App-signup-question-text-bold">{userName}</p>
            <p className="App-signup-question-text">를 입력해주세요.</p>
        </div>
    );
}
export default SignupQuestion;