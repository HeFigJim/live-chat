import { useEffect, useState } from "react";
import RoomModal from "./RoomModal";
import { signIn, logOut } from "../utils/auth";
import { auth } from "../utils/firebase.config";
import { User, onAuthStateChanged } from "firebase/auth";
import { Link } from "react-router-dom";

type HeaderProps = {
  user: User | null | undefined;
  setUser: React.Dispatch<React.SetStateAction<User | null | undefined>>;
};
const Header = ({ user, setUser }: HeaderProps) => {
  const [display, setDisplay] = useState(false);
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        setUser(currentUser);
      } else setUser(currentUser);
    });

    return () => {
      unsubscribe();
    };
  }, [onAuthStateChanged]);
  const handleSignin = async () => {
    try {
      const user = await signIn();
      setUser(user);
    } catch (error) {
      console.log(error);
    }
  };

  const handleSignout = async () => {
    await logOut();
  };

  return (
    <div className="border-b-2 border-violet-400">
      <div className="max-w-[1440px] flex justify-between items-center px-4 mx-auto">
        <Link to="/">
          <h1 className="text-2xl text-violet-400 hover:brightness-75">
            Rooms
          </h1>
        </Link>

        <div>
          {user?.uid ? (
            <button
              onClick={() => setDisplay(true)}
              className="hover:brightness-75"
            >
              Create Room
            </button>
          ) : (
            ""
          )}
        </div>
        {user ? (
          <button
            onClick={handleSignout}
            className="text-violet-400 hover:brightness-75"
          >
            Sign Out
          </button>
        ) : (
          <button
            onClick={handleSignin}
            className="text-violet-400 hover:brightness-75"
          >
            Sign in
          </button>
        )}
      </div>
      {display ? <RoomModal setDisplay={setDisplay} /> : ""}
    </div>
  );
};

export default Header;
