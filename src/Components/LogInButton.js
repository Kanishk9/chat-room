import { FiLogIn } from "react-icons/fi";
import "../Assets/Styles/LandingPage.css";

const LogInButton = (props) => {
  return (
    <>
      <button className="Log-In" onClick={props.signIn}>
        <FiLogIn size={25} />
        &nbsp;
        <span>LOG IN</span>
      </button>
    </>
  );
};

export default LogInButton;
