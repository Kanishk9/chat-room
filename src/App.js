import { useState } from "react";

import Home from "./Components/Home";
import Chatroom from "./Components/Chatroom";

import { authContext } from "./Contexts/Context";

import "./App.css";

import Cookies from "universal-cookie";
const cookies = new Cookies();


const App = () => {
  const [isAuth, setIsAuth] = useState(cookies.get("auth-token"));

  if (!isAuth) {
    return (
      <authContext.Provider value={setIsAuth}>
        <Home />
      </authContext.Provider>
    );
  } else {
    return <Chatroom />;
  }
};

export default App;
