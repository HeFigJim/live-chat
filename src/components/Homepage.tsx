import RoomsList from "./RoomsList";
import UsersList from "./usersList";
import { useEffect, useState } from "react";
import { Rooms, Users } from "../types/types";
import { collection, onSnapshot } from "firebase/firestore";
import { db } from "../utils/store";

const Homepage = () => {
  const [roomList, setRoomList] = useState<Rooms[]>([]);
  const [usersList, setUsersList] = useState<Users[]>([]);

  useEffect(() => {
    const setLists = async () => {
      onSnapshot(collection(db, "Rooms"), (snapshot) =>
        setRoomList(
          snapshot.docs.map((doc) => ({
            ...(doc.data() as Rooms),
            id: doc.id,
          }))
        )
      );
    };
    const setUsers = async () => {
      onSnapshot(collection(db, "Users"), (snapshot) => {
        setUsersList(
          snapshot.docs.map((doc) => ({
            ...(doc.data() as Users),
            id: doc.id,
          }))
        );
      });
    };

    return () => {
      setLists();
      setUsers();
    };
  });

  return (
    <main className="mx-4">
      <section className="grid grid-cols-1 md:grid-cols-4 gap-1 mt-4 ">
        <RoomsList items={roomList} />
        <UsersList items={usersList} />
      </section>
    </main>
  );
};

export default Homepage;
