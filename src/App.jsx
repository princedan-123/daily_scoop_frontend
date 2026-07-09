import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import RootLayer from "./components/RootLayer";
import Home from "./pages/Home";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();
const routes = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayer />}>
      <Route index element={<Home />} />
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
