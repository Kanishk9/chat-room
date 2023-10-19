import { FiLogIn } from "react-icons/fi";
import "../Assets/Styles/LandingPage.css";

const LogInLogOutButton = (props) => {
  return (
    <>
      <button className="Log-In" onClick={props.signIn}>
        <FiLogIn size={25} />
        &nbsp;
        <span>{props.title}</span>
      </button>
    </>
  );
};

export default LogInLogOutButton;
