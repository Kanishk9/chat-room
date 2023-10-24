import { useState } from "react";

import ChatInput from "./ChatInput";
import PageHeader from "./PageHeader";

import SideNav from "./SideNav";
import ChatBox from "./ChatBox";

const Chat = (props) => {
    const [messages, setMessages] = useState([]);

  return (
    <>
        <SideNav room={props.room} />
        <PageHeader onClick={props.signUserOut} title="LOG OUT" />
        <ChatBox messages={messages} room={props.room} setMessages={setMessages}/>
        <ChatInput room={props.room} />
    </>
  );
};

export default Chat;
