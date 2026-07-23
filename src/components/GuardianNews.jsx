import { useQuery } from "@tanstack/react-query";
import fetchGuardianFeed from "../api/fetchGuardian";
import NewsFeedSkeleton from "./Skeletons";
import NotFoundError from "./error/NotFoundError";
import ConnectionError from "./error/ConnectionError";
import GenericError from "./error/GenericError";

export default function GuardianNews() {
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["GuardianFeed"],
    queryFn: fetchGuardianFeed,
  });
  if (isLoading) {
    return <NewsFeedSkeleton />;
  }
  if (data) {
    const feed = data.map((article) => {
      let category = null;
      if (Array.isArray(article.category)) {
        category = article.category.join(" ");
      }
      return (
        <a
          key={article.id}
          className="card  cursor-pointer"
          href={article?.url}
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="/guardian_image_placeholder.png"
            className="h-1/2 w-full object-cover"
          />
          <p className=" bg-[#052962] text-white py-1.5 px-4 w-full h-20 overflow-hidden">
            {article.title}
          </p>
          {category ? (
            <h3 className="category">{category}</h3>
          ) : (
            <h3 className="category">Generic</h3>
          )}
          <h3>
            <span className="full-article">
              Read full article on Guardian ↗
            </span>
          </h3>
        </a>
      );
    });
    return (
      <>
        <div className="flex items-center gap-3 px-4 py-4 font-roboto">
          <div className="h-8 w-1 rounded-full bg-[#E60012]"></div>
          <h1 className="text-2xl font-bold">Guardian News</h1>
        </div>
        <section className="grid grid-cols-1 gap-4 md:gap-4 lg:gap-8 md:grid-cols-2 lg:grid-cols-3 p-2">
          {feed}
        </section>
      </>
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
