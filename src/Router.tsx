import { lazy, LazyExoticComponent, Suspense, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import AppMenu from "./components/AppMenu/AppMenu";
import Snackbar from "./hoc/Snackbar";
import {
  login,
  logout,
  unauthorizedAccess,
} from "./redux/actions/loginActions";
import { showErrorMessage } from "./redux/actions/messageActions";
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

const verifyUser = () => {
  const email = localStorage.getItem("email");
  const password = localStorage.getItem("password");
  return !!email && !!password;
};
let routAppCnt = 0;
const RouteApp = (params: IRouteObject) => {
  routAppCnt++;
  console.log("route app", routAppCnt);

  const loginState = useSelector((state: any) => state.loginState);
  const dispatch = useDispatch();

  useEffect(() => {
    const isUserLoggedIn = verifyUser();
    if (loginState?.login !== "login" && isUserLoggedIn) dispatch(login());
    if (!!params.protected && loginState?.login !== "login" && !isUserLoggedIn)
      dispatch(unauthorizedAccess());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  if (!loginState) return <>Loading...</>;
  if (params.protected && loginState?.login !== "login")
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
