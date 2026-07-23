import { useQuery } from "@tanstack/react-query";
import free_news_feed from "../../api/fetchFreeNewsFeed";
import NewsFeedSkeleton from "../Skeletons";
import NotFoundError from "../error/NotFoundError";
import ConnectionError from "../error/ConnectionError";
import GenericError from "../error/GenericError";
import { Link } from "react-router-dom";

export default function Free_news_feed() {
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["free-news-feed"],
    queryFn: free_news_feed,
    staleTime: 60 * 1000 * 5,
  });
  if (isLoading) {
    return <NewsFeedSkeleton />;
  }
  if (data) {
    const feed = data.map((article) => {
      let category;
      let cover_poster = "/broken_image.png";
      if (Array.isArray(article.category)) {
        category = article.category.join(" ");
      }
      if (article?.source === "free_news") {
        cover_poster = "/free_news_image_cover.png";
        return (
          <Link
            to={`/free_news_article/${article.id}`}
            key={article.id}
            className="card cursor-pointer"
          >
            <img
              src={cover_poster}
              alt={article?.title}
              className="h-1/2 w-full object-cover"
              onError={(e) => {
                e.target.src = "/broken_image.png";
              }}
            />
            <p className=" bg-[#052962] text-white py-1.5 px-4 w-full h-20 overflow-hidden">
              {article.title}
            </p>
            {category ? (
              <h3 className="category">{category}</h3>
            ) : (
              <h3 className="category">Generic</h3>
            )}
          </Link>
        );
      }
    });
    return (
      <section>
        <div className="flex items-center gap-3 px-4 py-4" font-roboto>
          <div className="h-8 w-1 rounded-full bg-[#E60012]"></div>
          <h1 className="text-2xl font-bold">Feed</h1>
        </div>
        <section className="grid grid-cols-1 gap-4 md:gap-4 lg:gap-8 md:grid-cols-2 lg:grid-cols-3 p-2">
          {feed}
        </section>
      </section>
    );
  }
  if (isError) {
    switch (true) {
      case error.status === 0:
        return <ConnectionError section="News Feed" message={error.message} />;
        break;
      case error.status === 404:
        return <NotFoundError section="News Feed" />;
        break;
      case error.status >= 500:
        return <SeverError section="News Feed" />;
        break;
      default:
        return <GenericError section="News Feed" message={error.message} />;
        break;
    }
  }
}
