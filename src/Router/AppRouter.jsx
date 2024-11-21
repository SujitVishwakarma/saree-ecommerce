import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Auth from "../_auth/Auth";
import HomePage from "../pages/homePage/HomePage";

const AppRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children:[
      {
        path:"/",
        element: <HomePage/>
      }
    ]
  },
  {
    path: "/auth",
    element: <Auth />,
  },
  {
    path: "*",
    element: <div>404</div>,
  },
]);

export default AppRouter;
