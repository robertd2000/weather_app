import {
  Link,
  Route,
  createHashRouter,
  createRoutesFromElements,
} from "react-router-dom";
import { HomePage } from "../../pages/home";
import { Layouts } from "../layouts";

const routers = createRoutesFromElements(
  <Route
    path="/"
    element={<Layouts />}
    handle={{ crumb: <Link to="/">Home</Link> }}
  >
    <Route index element={<HomePage />} />
  </Route>
);

export const router = createHashRouter(routers, {});
