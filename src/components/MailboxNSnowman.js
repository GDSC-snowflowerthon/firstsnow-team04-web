import React from "react";
import './MailboxNSnowman.css'
import iconMailBoxClose from '../assets/mailbox-close.svg';
import iconMailBoxOpen from '../assets/mailbox-open.svg';
import iconSnowman1 from '../assets/snowman-1.svg';

function MailboxNSnowman({mailboxOpen}){
    const isShow = mailboxOpen;
    return (
        isShow
        ?(<div className="App-MailboxNSnowman-container">
            <img src={iconMailBoxOpen} alt="mailbox open Image" className='App-MailboxNSnowman-mail'/>
            <img src={iconSnowman1} alt="mailbox Image" className='App-MailboxNSnowman-snowman'/>
        </div>)
        :(<div className="App-MailboxNSnowman-container">
            <img src={iconMailBoxClose} alt="mailbox close Image" className='App-MailboxNSnowman-mail'/>
            <img src={iconSnowman1} alt="mailbox Image" className='App-MailboxNSnowman-snowman'/>
        </div>)
    );
}

export default MailboxNSnowman;