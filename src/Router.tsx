import {
  lazy,
  LazyExoticComponent,
  Suspense,
  useEffect,
  useState,
} from "react";
import { useDispatch, useSelector } from "react-redux";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import AppMenu from "./components/AppMenu/AppMenu";
import Snackbar from "./hoc/Snackbar";
import { login, unauthorizedAccess } from "./redux/actions/loginActions";
const Login = lazy(() => import("./views/Login/Login"));
const Contact = lazy(() => import("./views/Contact/Contact"));
const Home = lazy(() => import("./views/Home/Home"));
const App = lazy(() => import("./views/App/App"));
const Logout = lazy(() => import("./views/Logout/Logout"));

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
  {
    path: "/logout",
    element: Logout,
  },
];

const verifyUser = () => {
  const email = localStorage.getItem("email");
  const password = localStorage.getItem("password");
  return !!email && !!password;
};

const RouteApp = (params: IRouteObject) => {
  const loginState = useSelector((state: any) => state.loginState);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!!params.protected && loginState?.login !== "login")
      dispatch(unauthorizedAccess());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (params.protected && loginState?.login !== "login")
    return <Navigate to="/login" />;
  const App = params.element;
  return <App />;
};

export const Router = () => {
  const [isLoaded, setIsLoaded] = useState<boolean>(false);
  const dispatch = useDispatch();
  useEffect(() => {
    if (verifyUser()) dispatch(login());
    setIsLoaded(true);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <BrowserRouter>
      {!isLoaded && <div>Loading...</div>}
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
