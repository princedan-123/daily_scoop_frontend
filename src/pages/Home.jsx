import NewsFeed from "../components/NewsFeed";
import GuardianNews from "../components/GuardianNews";
export default function Home() {
  return (
    <div>
      <section className="font-roboto flex flex-wrap gap-4 ml-4 mb-4 cursor-pointer font-bold">
        <div className="category-button">Sports</div>
        <div className="category-button">Health</div>
        <div className="category-button">Science</div>
        <div className="category-button">Business</div>
        <div className="category-button">Politics</div>
        <div className="category-button">Entertainment</div>
        <div className="category-button">Science</div>
        <div className="category-button">World</div>
        <div className="category-button">Technology</div>
        <div className="category-button">Food</div>
        <div className="category-button">Finance</div>
      </section>
      <NewsFeed />
      <GuardianNews />
    </div>
  );
}
