import { useQuery } from "@tanstack/react-query";
import NewsFeedSkeleton from "../Skeletons";
import NotFoundError from "../error/NotFoundError";
import ConnectionError from "../error/ConnectionError";
import GenericError from "../error/GenericError";
import { useParams } from "react-router-dom";
import { current_news_category } from "../../api/fetchNewsByCategory";

export default function CurrentNewsCategory() {
  const { news_category } = useParams();
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["newCategory", "current_news", news_category],
    queryFn: () => current_news_category(news_category),
  });
  if (isLoading) {
    return <NewsFeedSkeleton />;
  }
  if (data) {
    const feed = data.map((article) => {
      let category = null;
      let cover_poster = "/broken_image.png";
      if (Array.isArray(article.category)) {
        category = article.category.join(" ");
      }

      if (article?.source === "current_news") {
        cover_poster = article?.image || null;
        return (
          <a
            key={article.id}
            href={article?.url}
            target="_blank"
            rel="noopener noreferrer"
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
            {article?.source === "current_news" ? (
              <span className="full-article">Read full article ↗</span>
            ) : null}
          </a>
        );
      }
      return (
        <div key={article.id} className="card cursor-pointer">
          <img
            src={cover_poster}
            className="h-1/2 w-full"
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
          {article?.source === "current_news" ? (
            <a
              href={article?.url}
              target="_blank"
              rel="noopener noreferrer"
              className="full-article"
            >
              Read full article ↗
            </a>
          ) : null}
        </div>
      );
    });
    return (
      <section>
        <div className="flex items-center gap-3 px-4 py-4 font-roboto">
          <div className="h-8 w-1 rounded-full bg-[#E60012]"></div>
          <h1 className="text-2xl font-bold">{news_category} News</h1>
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
        return <ConnectionError section="category" message={error.message} />;
        break;
      case error.status === 404:
        return <NotFoundError section="category" />;
        break;
      case error.status >= 500:
        return <SeverError section="category" />;
        break;
      default:
        return <GenericError section="category" message={error.message} />;
        break;
    }
  }
}
