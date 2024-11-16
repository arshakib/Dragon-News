import { Outlet } from "react-router-dom";
import UserStatus from "../UserStatus";

const UserPage = () => {
  return (
    <div>
      <UserStatus></UserStatus>
      <Outlet></Outlet>
    </div>
  );
};

export default UserPage;
