import { ChatEngine } from 'react-chat-engine';
import Navbar from "../components/Navbar"

import ChatFeed from '../components/Chat/ChatFeed';

const projectID = '118a65f8-0a38-4ae2-9913-acf1a240463d';

const Chat = () => {

    return (
        <>
        <Navbar />
        <ChatEngine
            height="90vh"
            projectID={projectID}
            userName='javascriptmastery'
            userSecret='123456'
            renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
            onNewMessage={() => new Audio('https://chat-engine-assets.s3.amazonaws.com/click.mp3').play()}
        />
        </>
    );
}

// infinite scroll, logout, more customizations...

export default Chat;
