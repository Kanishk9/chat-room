import { useState } from "react";

import PageHeader from "./PageHeader";
import CreateRoom from "./CreateRoom";
import Chat from "./Chat";

import { signOut } from "firebase/auth";
import { auth } from "../firebase-config";

import { useContext } from "react";
import { authContext, isRoomContext } from "../Contexts/Context";

import Cookies from "universal-cookie";
const cookies = new Cookies();

const Chatroom = () => {
  const [isRoom, setIsRoom] = useState(null);
  const setIsAuth = useContext(authContext);

  const signUserOut = async (e) => {
    e.preventDefault();
    await signOut(auth);
    cookies.remove("auth-token");
    setIsAuth(false);
  };

  return (
    <>
      <PageHeader onClick={signUserOut} title="LOG OUT" />
      <isRoomContext.Provider value={setIsRoom}>
        {isRoom == null ? <CreateRoom /> : <Chat />}
      </isRoomContext.Provider>
    </>
  );
};

export default Chatroom;
