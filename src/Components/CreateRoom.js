import { useRef } from "react";

import CreateRoomButton from "./CreateRoomButton";

import "../Assets/Styles/CreateRoom.css";

const CreateRoom = (props) => {
  const roomInputRef = useRef(null);

    return ( 
        <>
        <div className="CreateRoom-Container">
            <div className="CreateRoom-Block">
                <h3>Create Chat-Room</h3>
                <input className="CreateRoom-Input" ref={roomInputRef} type="text" placeholder="Enter Room Code" />
                <CreateRoomButton roomInputRef={roomInputRef} />
            </div>
        </div>
        </>
     );
}
 
export default CreateRoom;