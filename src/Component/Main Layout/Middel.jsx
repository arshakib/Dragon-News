import { Link, useLoaderData } from "react-router-dom";

const Middel = () => {
  const news = useLoaderData();
  console.log(news.data);
  return (
    <div>
      <h1 className="text-2xl font-bold">Dragon News Home</h1>
      <h1>All News {news.data.length}</h1>
      <div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1 gap-6">
          {news.data.map((item) => (
            <div
              key={item._id}
              className="bg-white shadow-lg rounded-lg overflow-hidden border border-gray-200"
            >
              {/* Thumbnail Image */}
              <img
                src={item.thumbnail_url}
                alt={item.title}
                className="w-full h-52 object-cover"
              />

              {/* Content */}
              <div className="p-4">
                {/* Author Section */}
                <div className="flex items-center gap-3 mb-3">
                  <img
                    src={item.author.img}
                    alt={item.author.name}
                    className="w-10 h-10 rounded-full object-cover"
                  />
                  <div>
                    <h3 className="text-sm font-semibold text-gray-700">
                      {item.author.name}
                    </h3>
                    <p className="text-xs text-gray-500">
                      {new Date(
                        item.author.published_date
                      ).toLocaleDateString()}
                    </p>
                  </div>
                </div>

                {/* Title */}
                <h2 className="text-lg font-bold text-gray-800 mb-2 hover:text-blue-600">
                  {item.title}
                </h2>

                {/* News Details */}
                <p className="text-gray-600 text-sm line-clamp-3 mb-3">
                  {item.details}
                </p>

                {/* Read More Link */}
                <Link
                  to={`/news/${item._id}`}
                  className="text-blue-500 text-sm hover:underline"
                >
                  Read More
                </Link>
                {/* <a href="#" className="text-blue-500 text-sm hover:underline">
                  Read More
                </a> */}
              </div>

              {/* Footer Section */}
              <div className="p-4 flex justify-between items-center border-t border-gray-200 bg-gray-50">
                {/* Rating */}
                <div className="flex items-center gap-1 text-yellow-500">
                  <span className="text-xs">{item.rating.number} ★</span>
                  <span className="text-xs text-gray-500">
                    {item.rating.badge}
                  </span>
                </div>

                {/* Total Views */}
                <div className="flex items-center gap-1 text-gray-500">
                  <span className="material-icons">visibility</span>
                  <span className="text-sm">{item.total_view}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Middel;
