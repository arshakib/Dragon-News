import Main from "./Component/Main";
import Marquee from "./Component/MarqueeComp";
import Time from "./Component/Time";
import UserStatus from "./Component/UserStatus";

function Home() {
  return (
    <>
      <div className="mx-auto w-11/12 space-y-4">
        <Time></Time>
        <Marquee></Marquee>
        <UserStatus></UserStatus>
      </div>
      <div>
        <Main></Main>
      </div>
    </>
  );
}

export default Home;
