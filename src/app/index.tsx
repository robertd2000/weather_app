import { RouterProvider } from "react-router-dom";
import { Providers } from "./providers";
import { router } from "./routers";
import "./styles/index.scss";

export const App = () => {
  return (
    <Providers>
      <RouterProvider router={router} />
    </Providers>
  );
};
