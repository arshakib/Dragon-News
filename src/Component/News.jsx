import { Link, useLoaderData } from "react-router-dom";

const News = () => {
  const news = useLoaderData();
  console.log(news.data);
  const {
    thumbnail_url,
    title,
    author,
    details,
    rating,
    total_view,
    published_date,
  } = news.data[0];
  return (
    <div>
      <div className="max-w-lg mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
        {/* Thumbnail Image */}
        <img
          src={thumbnail_url}
          alt={title}
          className="w-full h-48 object-cover"
        />

        {/* Content Section */}
        <div className="p-6">
          {/* Title */}
          <h2 className="text-2xl font-semibold mb-2">{title}</h2>

          {/* Author Info */}
          <div className="flex items-center space-x-3 mb-4">
            <img
              src={author.img}
              alt={author.name}
              className="w-10 h-10 rounded-full object-cover"
            />
            <div>
              <h3 className="text-gray-700 font-medium">{author.name}</h3>
              <p className="text-sm text-gray-500">
                {new Date(published_date).toLocaleDateString()}
              </p>
            </div>
          </div>

          {/* Article Details */}
          <p className="text-gray-700 mb-4">{details}</p>

          {/* Statistics */}
          <div className="flex justify-between items-center mt-4 text-sm text-gray-600">
            <div>
              <span className="font-semibold">{rating.number} ⭐</span> (
              {rating.badge})
            </div>
            <div>{total_view} views</div>
          </div>
        </div>

        {/* Read More Button */}
        <div className="px-6 pb-6">
          {/* <button className="bg-red-600 hover:bg-red-700 text-white font-semibold py-2 px-4 rounded mt-4">
            Back To Home
          </button> */}
          <Link
            to={"/"}
            className="bg-red-600 hover:bg-red-700 text-white font-semibold py-2 px-4 rounded mt-4"
          >
            {" "}
            Back To Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default News;
