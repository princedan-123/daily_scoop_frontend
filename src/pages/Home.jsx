import NewsFeed from "../components/NewsFeed";
import GuardianNews from "../components/GuardianNews";
export default function Home() {
  return (
    <div>
      <section className="flex space justify-evenly h-7 cursor-pointer">
        <div className="flex items-center rounded shadow bg-gray-100 p-4">
          Sports
        </div>
        <div className="flex items-center rounded shadow bg-gray-100 p-4">
          Health
        </div>
        <div className="flex items-center rounded shadow bg-gray-100 p-4">
          Science
        </div>
        <div className="flex items-center rounded shadow bg-gray-100 p-4">
          Business
        </div>
        <div className="flex items-center rounded shadow bg-gray-100 p-4">
          Politics
        </div>
        <div className="flex items-center rounded shadow bg-gray-100 p-4">
          Entertainment
        </div>
      </section>
      <NewsFeed />
      <GuardianNews />
    </div>
  );
}
