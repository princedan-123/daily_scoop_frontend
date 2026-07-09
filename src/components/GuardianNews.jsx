import { useQuery } from "@tanstack/react-query";
import fetchGuardianFeed from "../api/fetchGuardian";
import NewsFeedSkeleton from "./Skeletons";
import NotFoundError from "./NotFoundError";
import ConnectionError from "./ConnectionError";
import GenericError from "./GenericError";

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
      return (
        <div key={article.id} className="card cursor-pointer">
          <img src="/guardian_image_placeholder.png" className="h-1/2 w-full" />
          <p className="p-4 w-full h-28 overflow-hidden">{article.title}</p>
          <h3 className="category">{article.category.join(" ")}</h3>
        </div>
      );
    });
    return (
      <>
        <div className="flex items-center gap-3 px-4 py-4 font-roboto">
          <div className="h-8 w-1 rounded-full bg-[#E60012]"></div>
          <h1 className="text-2xl font-bold">Guardian News</h1>
        </div>
        <section className="grid grid-cols-1 gap-4 md:gap-4 lg:gap-8 md:grid-cols-2 lg:grid-cols-3 px-4">
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
