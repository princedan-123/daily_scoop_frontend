import { useQuery } from "@tanstack/react-query";
import NotFoundError from "./NotFoundError";
import ConnectionError from "./ConnectionError";
import GenericError from "./GenericError";
import fetchFreeNewsArticle from "../api/fetch_free_news_article";
import { useParams } from "react-router-dom";
import ArticleSkeleton from "./FreeNewsSkeleton";
import NewsSummary from "./NewsSummary";

export default function FreeNewsArticle() {
  const { articleId } = useParams();
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["freeNewsArticle", articleId],
    queryFn: () => {
      return fetchFreeNewsArticle(articleId);
    },
  });
  if (isLoading) {
    return <ArticleSkeleton />;
  }
  if (data) {
    const newsSummary = data?.data?.incipit;
    return (
      <section className="min-h-screen bg-gray-50">
        <div className="aspect-video px-4 mx-auto relative">
          <img
            src={data.data.thumbnail}
            alt="article_image_cover"
            className="object-cover w-full rounded"
          />
          {data?.data?.topics ? (
            <div className="px-4 bg-white shadow-md h-9 rounded-md inline-flex items-center  font-bold absolute left-6 bottom-4">
              {data?.data?.topics.join(" ")}
            </div>
          ) : null}
        </div>
        {newsSummary ? <NewsSummary summary={newsSummary} /> : null}
        <p className="px-6 md:p-8 text-base md:text-lg leading-8 space-y-6">
          {data?.data?.body}
        </p>
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
