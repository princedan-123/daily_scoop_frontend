import NewsFeed from "../components/NewsFeed";
import GuardianNews from "../components/GuardianNews";
import { Link } from "react-router-dom";
export default function Home() {
  return (
    <div>
      <NewsFeed />
      <GuardianNews />
    </div>
  );
}
