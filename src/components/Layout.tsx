import { Outlet } from "react-router-dom";
import Header from "./Header";
import { User } from "firebase/auth";
type HeaderProps = {
  user: User | null | undefined;
  setUser: React.Dispatch<React.SetStateAction<User | null | undefined>>;
};
const Layout = ({ user, setUser }: HeaderProps) => {
  return (
    <>
      <Header user={user} setUser={setUser} />
      <Outlet />
    </>
  );
};

export default Layout;
