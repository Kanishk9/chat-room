import { useRef } from "react";

import CreateRoomButton from "./CreateRoomButton";
import PageHeader from "./PageHeader";

import "../Assets/Styles/CreateRoom.css";

const CreateRoom = (props) => {
  const roomInputRef = useRef(null);
  const createRoomButtonRef = useRef();

  const onPressEnter = (event) => {
    if (event.key === "Enter") {
      createRoomButtonRef.current.click();
    }
  };

  return (
    <>
      <PageHeader onClick={props.signUserOut} title="LOG OUT" />
      <div className="CreateRoom-Container">
        <div className="CreateRoom-Block">
          <h3>Create Chat-Room</h3>
          <input
            className="CreateRoom-Input"
            ref={roomInputRef}
            type="text"
            placeholder="Enter Room Code"
            onKeyDown={onPressEnter}
          />
          <CreateRoomButton
            createRoomButtonRef={createRoomButtonRef}
            roomInputRef={roomInputRef}
          />
        </div>
      </div>
    </>
  );
};

export default CreateRoom;
