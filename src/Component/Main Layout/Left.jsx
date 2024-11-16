import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

const Left = () => {
  const [categorys, setCategorys] = useState([]);

  useEffect(() => {
    fetch("https://openapi.programming-hero.com/api/news/categories")
      .then((res) => res.json())
      .then((data) => setCategorys(data.data.news_category));
  }, []);
  console.log(categorys);
  return (
    <div>
      <h1 className="text-2xl font-bold">All Caterogy</h1>
      {categorys.map((category) => (
        // eslint-disable-next-line react/jsx-key
        <div className="flex flex-col mt-3">
          <NavLink className="btn btn-outline" to={`/${category.category_id}`}>
            <button>{category.category_name}</button>
          </NavLink>
        </div>
      ))}
    </div>
  );
};

export default Left;
