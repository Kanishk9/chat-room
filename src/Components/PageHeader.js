import "../Assets/Styles/Header.css";

import LogInLogOutButton from "./LogInLogOutButton";

const PageHeader = (props) => {
  return (
    <>
      <div className="Landing-Header">
        <p className="App-Title">CHAT-ROOM</p>
        <LogInLogOutButton onClick={props.onClick} title={props.title} />
      </div>
    </>
  );
};

export default PageHeader;
