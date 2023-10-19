import LogInLogOutButton from "./LogInLogOutButton";

import { FcGoogle } from "react-icons/fc";
import "../Assets/Styles/LandingPage.css";

const LandingPagePoster = (props) => {
  return (
    <div className="Main-Container">
      <div className="Main-Poster">
        <div className="div1">
          <div className="div2">Create you own chat room</div>
        </div>
        <div className="div3">
          <div className="div4">Chat with friends</div>
        </div>
      </div>
      <div className="Auth-Tab">
        <div className="Auth-Heading">
          <div className="Auth-Text">Authenticate Yourself & simply Chat</div>
          <div classname="Icon-Button">
            <FcGoogle />
            <LogInLogOutButton signIn={props.signIn} title="LOG IN" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPagePoster;