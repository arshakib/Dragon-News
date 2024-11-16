import { Outlet } from "react-router-dom";
import Left from "./Main Layout/Left";
import Right from "./Main Layout/Right";

const Main = () => {
  return (
    <div>
      <div className="grid grid-cols-3 justify-items-center mt-5">
        <div className="sticky top-0 self-start">
          <Left />
        </div>
        <Outlet></Outlet>
        <div className="sticky top-0 self-start">
          <Right />
        </div>
      </div>
    </div>
  );
};

export default Main;
