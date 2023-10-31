import {
  collection,
  getFirestore,
  getDocs,
  addDoc,
  setDoc,
  doc,
  onSnapshot,
  getDoc,
} from "firebase/firestore";
import { app } from "./firebase.config";
import { User } from "firebase/auth";
import { Message } from "../types/types";

export const db = getFirestore(app);

export const createUserProfile = async (user: User) => {
  try {
    const id = user.uid;

    onSnapshot(doc(db, "Users", id), (snapshot) => {
      if (!snapshot.exists()) {
        setDoc(doc(db, "Users", id), {
          name: user.displayName,
          email: user.email,
          joined: user.metadata.creationTime,
        });
      }
    });
  } catch (err) {
    console.log(err);
  }
};
export const getCollection = async (collections: string) => {
  try {
    const colRef = collection(db, collections);
    const data = await getDocs(colRef);
    const filteredData = data.docs.map((doc) => ({
      ...doc.data(),
      id: doc.id,
    }));

    return filteredData;
  } catch (error) {}
};

export const createRoom = async (roomName: string) => {
  await addDoc(collection(db, "Rooms"), {
    name: roomName,
  });
};
export const sendMessage = async (id: string, message: Message) => {
  try {
    await addDoc(collection(db, "Rooms", id, "messages"), {
      name: message.name,
      uid: message.uid,
      message: message.message,
      date: message.date,
    });
  } catch (err) {
    console.log(err);
  }
};
export const getMessages = async (id: string) => {
  try {
    const data = await getDocs(collection(db, "Rooms", id, "messages"));

    const filteredData = data.docs.map((doc) => ({
      ...doc.data(),
    }));

    return filteredData;
  } catch (error) {}
};

export const getRoomName = async (id: string) => {
  const data = await getDoc(doc(db, "Rooms", id));
  const name = data.data();
  console.log(name?.name);
  return name?.name;
};
