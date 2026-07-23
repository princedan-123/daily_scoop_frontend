import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import RootLayer from "./components/RootLayer";
import Home from "./pages/Home";
import NewsCategory from "./components/Category";
import FreeNewsArticle from "./components/free_news_api/FreeNewsArticle";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();
const routes = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayer />}>
      <Route index element={<Home />} />
      <Route path="category/:news_category" element={<NewsCategory />} />
      <Route
        path="free_news_article/:articleId"
        element={<FreeNewsArticle />}
      />
    </Route>,
  ),
);

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={routes} />
    </QueryClientProvider>
  );
}
