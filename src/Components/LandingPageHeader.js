import "../Assets/Styles/LandingPage.css";
import LogInButton from "./LogInButton";

const LandingPageHeader = (props) => {
  return (
    <>
      <div className="Landing-Header">
        <p className="App-Title">CHAT-ROOM</p>
        <LogInButton signIn={props.signIn} />
      </div>
    </>
  );
};

export default LandingPageHeader;
