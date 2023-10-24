import { useState } from "react";

import {
  addDoc,
  collection,
  serverTimestamp,
} from "firebase/firestore";
import { auth, db } from "../firebase-config";

import { BiSend } from "react-icons/bi";

import "../Assets/Styles/Chat.css";

const ChatInput = (props) => {
  const [newMsg, setNewMsg] = useState("");

  const messagesRef = collection(db, "messages");

  const handleSubmit = async (event) => {
    event.preventDefault();

    await addDoc(messagesRef, {
      user: auth.currentUser.displayName,
      msg: newMsg,
      createdAt: serverTimestamp(),
      room: props.room,
      email: auth.currentUser.email
    });

    setNewMsg("");
  };

  return (
    <>
      <form className="Chat-Form" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter Message..."
          className="Chat-Msg-Input"
          value={newMsg}
          onChange={(e) => setNewMsg(e.target.value)}
        />
        <button className="Chat-Send" type="submit">
          <BiSend size={25} />
        </button>
      </form>
    </>
  );
};

export default ChatInput;
