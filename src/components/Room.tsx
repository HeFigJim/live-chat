import { useEffect, useState } from "react";
import { getMessages, getRoomName, sendMessage } from "../utils/store";
import { useParams } from "react-router-dom";
import { Message } from "../types/types";

const Room = ({ uid, name }: any) => {
  const [messages, setMessages] = useState<Message[]>();
  const [input, setInput] = useState("");
  const { id } = useParams();
  const [roomName, setRoomName] = useState("");

  const messagesList = async () => {
    const x = (await getMessages(id as string)) as Message[];
    const name = await getRoomName(id as string);
    setRoomName(name);
    setMessages(x);
  };
  useEffect(() => {
    return () => {
      messagesList();
    };
  }, []);

  const handleSubmit = () => {
    sendMessage(id as string, {
      name,
      message: input,
      uid,
      date: new Date().toString(),
    });
    messagesList();
  };
  return (
    <div className="mx-6">
      <div className="text-3xl">{roomName}</div>
      {messages &&
        messages.map((msg) =>
          msg.uid === uid ? (
            <div key={msg.uid} className="flex justify-end">
              <div className="w-1/2 bg-lime-600 rounded-xl my-2">
                <h2 className="mx-2 flex justify-between">
                  {msg.name} <span>{msg.date}</span>
                </h2>
                <div className=" ml-2">{msg.message}</div>
              </div>
            </div>
          ) : (
            <div key={msg.uid} className="flex justify-start">
              <div key={msg.uid} className="w-1/2 bg-slate-400 rounded-xl my-2">
                <h2 className="mx-2 flex justify-between">
                  {msg.name} <span>{msg.date}</span>
                </h2>
                <div className=" ml-2">{msg.message}</div>
              </div>
            </div>
          )
        )}

      <br />
      <form
        className="text-3xl flex mt-2 "
        onSubmit={(e) => {
          e.preventDefault();
          handleSubmit();
          setInput("");
        }}
      >
        <input
          type="text"
          className="w-full rounded-lg text-black"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          style={uid ? {} : { cursor: "not-allowed" }}
          disabled={uid ? false : true}
          placeholder={uid ? "" : "Sign in to Chat"}
        />
        <button
          className="bg-purple-500 rounded-lg ml-2 text-base p-2"
          style={uid ? {} : { cursor: "not-allowed" }}
          disabled={uid ? false : true}
        >
          Send
        </button>
      </form>
    </div>
  );
};

export default Room;
