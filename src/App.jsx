import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import RootLayer from "./components/RootLayer";

const routes = createBrowserRouter(
  createRoutesFromElements(<Route path="/" element={<RootLayer />}></Route>),
);

export default function App() {
  return <RouterProvider router={routes} />;
}
