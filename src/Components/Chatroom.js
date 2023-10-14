import { signOut } from "firebase/auth";
import { auth } from "../firebase-config";

import { useContext } from "react";
import { authContext } from "../Contexts/Context";

import Cookies from "universal-cookie";
const cookies = new Cookies();

const Chatroom = () => {
  const setIsAuth = useContext(authContext);

  const signUserOut = async (e) => {
    e.preventDefault();
    await signOut(auth);
    cookies.remove("auth-token");
    setIsAuth(false);
  };

  return (
    <>
      <button onClick={signUserOut}>Sign Out</button>
    </>
  );
};

export default Chatroom;
