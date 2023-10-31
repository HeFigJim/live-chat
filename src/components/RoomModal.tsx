import { useState } from "react";
import { createRoom } from "../utils/store";

type ModalProps = {
  setDisplay: React.Dispatch<React.SetStateAction<boolean>>;
};

const RoomModal = ({ setDisplay }: ModalProps) => {
  const [roomName, setRoomName] = useState("");
  return (
    <div className="w-full h-screen absolute top-0 bg-cyan-700  bg-opacity-25">
      <div className="w-full h-screen flex justify-center items-center">
        <div className=" bg-slate-700 rounded-lg px-2">
          <button
            className="text-xl text-left hover:text-red-600 mt-4 mb-1"
            onClick={() => setDisplay(false)}
          >
            X
          </button>
          <form
            action="Room"
            onSubmit={(e) => {
              e.preventDefault();
              createRoom(roomName);
              setDisplay(false);
              setRoomName("");
            }}
            className="flex flex-col mb-4"
          >
            <label htmlFor="Room" className="mb-1">
              Room Name:
            </label>
            <input
              className="text-black mb-2"
              type="text"
              value={roomName}
              onChange={(e) => setRoomName(e.target.value)}
            />
            <button
              type="submit"
              className="border-b-2 p-4 hover:bg-fuchsia-500 rounded-full"
            >
              create
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default RoomModal;
