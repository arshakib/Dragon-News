import moment from "moment";
const Time = () => {
  return (
    <div className="text-center">{moment().format("dddd, MMMM Do YYYY")}</div>
  );
};

export default Time;
