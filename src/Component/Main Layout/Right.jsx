import { FaGoogle, FaGithub } from "react-icons/fa";
const Right = () => {
  return (
    <div>
      <div className="flex flex-col items-center justify-center mt-10 bg-gray-50">
        <div className="p-6 bg-white shadow-lg rounded-lg w-80">
          {/* Heading */}
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Login With</h2>

          {/* Google Login Button */}
          <button className="flex items-center justify-center w-full px-4 py-2 mb-4 border border-blue-500 rounded-md text-blue-500 hover:bg-blue-50">
            <FaGoogle className="mr-2" />
            Login with Google
          </button>

          {/* GitHub Login Button */}
          <button className="flex items-center justify-center w-full px-4 py-2 border border-gray-500 rounded-md text-gray-700 hover:bg-gray-50">
            <FaGithub className="mr-2" />
            Login with Github
          </button>
        </div>
      </div>
    </div>
  );
};

export default Right;
