import { lazy, LazyExoticComponent, Suspense } from "react";
import { useSelector } from "react-redux";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import AppMenu from "./components/AppMenu/AppMenu";
import Snackbar from "./hoc/Snackbar";
const Login = lazy(() => import("./views/Login/Login"));
const Contact = lazy(() => import("./views/Contact/Contact"));
const Home = lazy(() => import("./views/Home/Home"));
const App = lazy(() => import("./views/App/App"));

interface IRouteObject {
  protected?: boolean;
  path: string;
  element: LazyExoticComponent<(props: any) => React.ReactElement>;
}

const routes: Array<IRouteObject> = [
  {
    path: "/",
    element: Home,
  },
  {
    path: "/login",
    element: Login,
  },
  {
    path: "/dashboard",
    protected: true,
    element: App,
  },
  {
    path: "/contact",
    element: Contact,
  },
];

const RouteApp = (params: IRouteObject) => {
  const loginState = useSelector((state: any) => state.loginState);
  if (params.protected && loginState.login !== "login")
    return <Navigate to="/login" />;
  const App = params.element;
  return <App />;
};

let renderCount = 0;

export const Router = () => {
  renderCount++;
  console.log(renderCount, "Router Rendered times");
  return (
    <BrowserRouter>
      <Suspense fallback={<>Loading...</>}>
        <AppMenu />
        <Snackbar />
        <Routes>
          {routes
            .filter((val) => !!val.element && val.path)
            .map((params: IRouteObject) => {
              return (
                <Route
                  key={params.path}
                  path={params.path}
                  element={<RouteApp {...params} />}
                />
              );
            })}
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
};
