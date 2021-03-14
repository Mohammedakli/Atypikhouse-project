import React, { useState } from "react"
import { ChatEngine } from 'react-chat-engine';
import Dropdown from '../components/PageAccueil/Dropdown';
import NavBar from '../components/PageAccueil/NavBar';
import ChatFeed from '../components/Chat/ChatFeed';

const projectID = '118a65f8-0a38-4ae2-9913-acf1a240463d';

const Chat = () => {

    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
      setIsOpen(!isOpen);
    };

    return (
        <>
        <NavBar toggle={toggle}/>
        <Dropdown isOpen={isOpen} toggle={toggle}/>
        <div style={{paddingTop:'10%'}}>
            <ChatEngine
            height="90vh"
            projectID={projectID}
            userName='javascriptmastery'
            userSecret='123456'
            renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
            onNewMessage={() => new Audio('https://chat-engine-assets.s3.amazonaws.com/click.mp3').play()}
        />
        </div>
        
        </>
    );
}

// infinite scroll, logout, more customizations...

export default Chat;
