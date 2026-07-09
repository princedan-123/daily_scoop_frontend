import NewsFeed from "../components/NewsFeed";
import GuardianNews from "../components/GuardianNews";
export default function Home() {
  return (
    <div>
      <section className="font-roboto flex space justify-evenly h-7 cursor-pointer font-bold">
        <div className="category-button">Sports</div>
        <div className="category-button">Health</div>
        <div className="category-button">Science</div>
        <div className="category-button">Business</div>
        <div className="category-button">Politics</div>
        <div className="category-button">Entertainment</div>
      </section>
      <NewsFeed />
      <GuardianNews />
    </div>
  );
}
