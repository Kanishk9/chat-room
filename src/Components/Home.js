import LandingPageHeader from "./LandingPageHeader";
import LandingPagePoster from "./LandingPagePoster";

import { auth, provider } from "../firebase-config";
import { signInWithPopup } from "firebase/auth";
import { useContext } from "react";

import { authContext } from "../Contexts/Context";

import Cookies from "universal-cookie";
const cookies = new Cookies();

const Home = () => {
  const setIsAuth = useContext(authContext);

  const signIn = async (e) => {
    e.preventDefault();
    try {
      const response = await signInWithPopup(auth, provider);
      cookies.set("auth-token", response.user.refreshToken);
      setIsAuth(true);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <LandingPageHeader signIn={signIn}/>
      <LandingPagePoster signIn={signIn}/>
    </>
  );
};

export default Home;
