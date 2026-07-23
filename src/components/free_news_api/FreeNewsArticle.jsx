import { useQuery } from "@tanstack/react-query";
import NotFoundError from "../error/NotFoundError";
import ConnectionError from "../error/ConnectionError";
import GenericError from "../error/GenericError";
import fetchFreeNewsArticle from "../../api/fetch_free_news_article";
import { useParams } from "react-router-dom";
import ArticleSkeleton from "./FreeNewsSkeleton";
import NewsSummary from "../NewsSummary";
import { useState } from "react";
import formatArticle from "../../utilities/formatArticle";
import MetaData from "../MetaData";

export default function FreeNewsArticle() {
  const { articleId } = useParams();
  const [isFormatted, SetFormatted] = useState(false);
  function handleFormatArticle() {
    SetFormatted((prev) => !prev);
  }
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
    console.log(`thumbnail : ${data?.data?.thumbnail}`);
    const newsSummary = data?.data?.incipit;
    let formattedBody;
    if (isFormatted) {
      formattedBody = formatArticle(data?.data?.body).map(
        (paragraph, index) => {
          return (
            <div key={index} className="px-6 py-3">
              <p>{paragraph}</p>
            </div>
          );
        },
      );
    }
    let unformattedBody = data?.data?.body;
    return (
      <section className="min-h-screen bg-gray-50">
        <div className="aspect-video px-4 mx-auto relative">
          <img
            src={data?.data?.thumbnail}
            alt="article_image_cover"
            className="object-cover w-full rounded"
          />
          {data?.data?.topics ? (
            <div className="px-4 bg-white shadow-md h-9 rounded-md inline-flex items-center  font-bold absolute left-6 bottom-8 ">
              {data?.data?.topics.join(" ")}
            </div>
          ) : null}
        </div>
        {newsSummary ? <NewsSummary summary={newsSummary} /> : null}
        <div>
          <div>
            <button
              className="px-4 py-2 mt-8 bg-white ml-4 rounded shadow-lg"
              onClick={handleFormatArticle}
            >
              Format Article
            </button>
          </div>
          <MetaData article={data?.data} />
          {isFormatted ? (
            formattedBody
          ) : (
            <p className="leading-8 space-y-2 py-8 px-4">{unformattedBody}</p>
          )}
        </div>
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
