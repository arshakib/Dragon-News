import { useContext } from "react";
import { FaUserCircle } from "react-icons/fa";
import { Link } from "react-router-dom";
import { AuthContext } from "../Context/Context";

const UserStatus = () => {
  const { user, logout } = useContext(AuthContext);
  return (
    <div>
      <div className="mt-7">
        <button className="flex items-center bg-gray-800 text-white px-4 py-2 rounded-lg hover:bg-gray-700 mx-auto">
          {/* Profile Icon */}
          <FaUserCircle className="text-2xl mr-2" />
          {/* Login Text */}
          <span>
            {user ? (
              <button onClick={logout}>Logout</button>
            ) : (
              <Link to="/user/login">Login or Register</Link>
            )}
          </span>
        </button>
      </div>
    </div>
  );
};

export default UserStatus;
