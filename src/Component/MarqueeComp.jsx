import { Link } from "react-router-dom";

import Marquee from "react-fast-marquee";
import { useEffect, useState } from "react";
const MarqueeComp = () => {
  const [Latest, setLatest] = useState([]);
  useEffect(() => {
    fetch("https://openapi.programming-hero.com/api/news/category/01")
      .then((res) => res.json())
      .then((data) => setLatest(data.data));
  }, []);
  return (
    <div>
      <div className="bg-gray-100 py-4 px-6 rounded-md">
        <div className="flex items-center">
          <div className="bg-red-500 text-white font-bold py-2 px-4 rounded-md mr-4">
            Latest
          </div>
          <div className="text-gray-700 text-sm">
            <Marquee className="text-gray-700 space-x-20">
              {Latest.map((item) => (
                // eslint-disable-next-line react/jsx-key
                <Link to={`/news/${item._id}`}>{item.title}</Link>
              ))}

              {/* <Link to="/home">
                Match Highlights: Germany vs Spain - as it happened! Match
                Highlights: Germany vs Spain as...
              </Link>
              <Link to="/home">
                Match Highlights: Germany vs Spain - as it happened! Match
                Highlights: Germany vs Spain as...
              </Link>
              <Link to="/home">
                Match Highlights: Germany vs Spain - as it happened! Match
                Highlights: Germany vs Spain as...
              </Link>
              <Link to="/home">
                Match Highlights: Germany vs Spain - as it happened! Match
                Highlights: Germany vs Spain as...
              </Link>
              <Link to="/home">
                Match Highlights: Germany vs Spain - as it happened! Match
                Highlights: Germany vs Spain as...
              </Link>
              <Link to="/home">
                Match Highlights: Germany vs Spain - as it happened! Match
                Highlights: Germany vs Spain as...
              </Link> */}
            </Marquee>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MarqueeComp;
