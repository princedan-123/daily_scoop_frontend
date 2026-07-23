import Current_news_feed from "./current_news_api/CurrentNewsFeed";
import Free_news_feed from "./free_news_api/Free_news_list";

export default function NewsFeed() {
  return (
    <>
      <Current_news_feed />
      <Free_news_feed />
    </>
  );
}
