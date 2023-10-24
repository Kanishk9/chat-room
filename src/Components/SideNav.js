import "../Assets/Styles/Chat.css";

import { HiPlus } from "react-icons/hi";
import { auth } from "../firebase-config";

const SideNav = (props) => {
  return (
    <>
      <nav className="Chat-Nav">
        <img src={auth.currentUser.photoURL} className="User-Img" alt="user" />
        <h4>
          <p className="User-Name-NavBar">{auth.currentUser.displayName.toUpperCase()}</p>
          <p>Welcome To: {props.room}</p>
        </h4>

        <span className="Chat-New-Room">
          <HiPlus size={20} />
          &nbsp;
          <span>New Room</span>
        </span>
      </nav>
    </>
  );
};

export default SideNav;
