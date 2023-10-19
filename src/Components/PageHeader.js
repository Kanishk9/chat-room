import "../Assets/Styles/LandingPage.css";
import LogInLogOutButton from "./LogInLogOutButton";

const PageHeader = (props) => {
  return (
    <>
      <div className="Landing-Header">
        <p className="App-Title">CHAT-ROOM</p>
        <LogInLogOutButton signIn={props.signIn} title={props.title} />
      </div>
    </>
  );
};

export default PageHeader;
