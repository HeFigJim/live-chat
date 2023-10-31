export type RoomProps = {
  items: Rooms[];
};
export type UserProps = {
  items: Users[];
};
export type Message = {
  name: string;
  uid: string;
  message: string;
  date: string;
};
export type Rooms = {
  id: string;
  name: string;
  created: string;
  messages: Message[];
};
export type Users = {
  id: string;
  name: string;
  email: string;
  joined: string;
};
