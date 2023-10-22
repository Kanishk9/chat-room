import { useContext } from "react";

import { isRoomContext } from "../Contexts/Context";

import { HiPlus } from "react-icons/hi";

const CreateRoomButton = (props) => {
    const setIsRoom = useContext(isRoomContext);

  return (
    <>
      <button ref={props.createRoomButtonRef} className="CreateRoom-Button" onClick={() => {setIsRoom(props.roomInputRef.current.value)}}>
        <HiPlus size={17}/>
        &nbsp;
        <span>Room</span>
      </button>
    </>
  );
};

export default CreateRoomButton;
