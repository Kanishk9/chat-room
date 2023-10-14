import { auth, provider } from "../firebase-config";
import { signInWithPopup } from "firebase/auth";
import { useContext } from "react";

import { authContext } from "../Contexts/Context";

import Cookies from "universal-cookie";
const cookies = new Cookies();

const Auth = () => {
  const setIsAuth = useContext(authContext);

  const signIn = async () => {
    try {
      const response = await signInWithPopup(auth, provider);
      cookies.set("auth-token", response.user.refreshToken);
      setIsAuth(true);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="auth">
      <p>Sign In With Google To Continue</p>
      <button onClick={signIn}>Sign In</button>
    </div>
  );
};

export default Auth;
