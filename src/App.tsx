import { Route, Routes } from "react-router-dom";
import Homepage from "./components/Homepage";
import Room from "./components/Room";
import Layout from "./components/Layout";
import { useState } from "react";
import { User } from "firebase/auth";

function App() {
  const [user, setUser] = useState<User | null>();

  return (
    <Routes>
      <Route path="/" element={<Layout user={user} setUser={setUser} />}>
        <Route index element={<Homepage />} />
        <Route
          path=":id"
          element={<Room uid={user?.uid} name={user?.displayName} />}
        />
      </Route>
    </Routes>
  );
}

export default App;
