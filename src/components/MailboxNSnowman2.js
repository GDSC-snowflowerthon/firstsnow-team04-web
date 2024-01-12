import React from "react";
import './MailboxNSnowman2.css'
import iconMailBoxClose from '../assets/mailbox-close.svg';
import iconMailBoxOpen from '../assets/mailbox-open.svg';
import iconSnowman1 from '../assets/snowman-1.svg';
import iconSnowman2 from '../assets/snowman-2.svg';
import iconSnowman3 from '../assets/snowman-3.svg';
import iconSnowman4 from '../assets/snowman-4.svg';

function MailboxNSnowman({mailboxOpen, snowmantype}){
    const isShow = mailboxOpen;
    let snowmanIcon;

    switch(snowmantype) {
        case 1:
            snowmanIcon = iconSnowman1;
            break;
        case 2:
            snowmanIcon = iconSnowman2;
            break;
        case 3:
            snowmanIcon = iconSnowman3;
            break;
        case 4:
            snowmanIcon = iconSnowman4;
            break;
        default:
            snowmanIcon = iconSnowman1;
    }

    return (
        isShow
        ?(<div className="App-MailboxNSnowman-container">
            <img src={iconMailBoxOpen} alt="mailbox open Image" className='App-MailboxNSnowman-mail'/>
            <img src={snowmanIcon} alt={`snowman ${snowmantype} Image`} className='App-MailboxNSnowman-snowman'/>
        </div>)
        :(<div className="App-MailboxNSnowman-container">
            <img src={iconMailBoxClose} alt="mailbox close Image" className='App-MailboxNSnowman-mail'/>
            <img src={snowmanIcon} alt={`snowman ${snowmantype} Image`} className='App-MailboxNSnowman-snowman'/>
        </div>)
    );
}

export default MailboxNSnowman;