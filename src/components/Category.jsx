import CurrentNewsCategory from "./current_news_api/current_news_category";
import FreeNewsByCategory from "./free_news_api/free_news_category";

export default function NewsCategory() {
  return (
    <>
      <CurrentNewsCategory />
      <FreeNewsByCategory />
    </>
  );
}
