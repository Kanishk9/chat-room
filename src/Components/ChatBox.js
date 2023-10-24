import { useEffect, useRef } from "react";

import { collection, onSnapshot, orderBy, query, where } from "firebase/firestore";
import { auth, db } from "../firebase-config";

const ChatBox = (props) => {
    const scrollBottomRef = useRef();

  const messagesRef = collection(db, "messages");

  useEffect(() => {
    scrollBottomRef.current.scrollIntoView({
        behavior: "smooth",
        block: "end"
      });
  }, [props.messages]);

  useEffect(() => {
    const queryMessage = query(messagesRef, where("room", "==", props.room), orderBy("createdAt"));
    const unsuscribe = onSnapshot(queryMessage, (snapshot) => {
      let messages = [];
      snapshot.forEach((doc) => {
        messages.push({ ...doc.data(), id: doc.id });
      });
      props.setMessages(messages);
    });

    return () => unsuscribe();
  }, []);

  return (
    <>
      <div className="Chat-Box">
        {props.messages.map((m) => (
          <div className={auth.currentUser.email === m.email ? "All-Chat-User" : "All-Chat"} key={m.id}>
            <span className="User">{m.user}:</span><br />{m.msg}
          </div>
        ))}
        <div ref={scrollBottomRef} />
      </div>
    </>
  );
};

export default ChatBox;
