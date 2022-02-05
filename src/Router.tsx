import { lazy, Suspense } from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import AppMenu from "./components/AppMenu/AppMenu";
const Login = lazy(() => import("./views/Login/Login"));
const App = lazy(() => import("./views/Home/Home"));

const routes = [
  {
    path: "/",
    element: App,
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
];

let renderCount = 0;

export const Router = () => {
  const isSignIn = false;
  renderCount++;
  console.log(renderCount, "Router Rendered times");
  return (
    <BrowserRouter>
      <Suspense fallback={<>Loading...</>}>
        <AppMenu />
        <Routes>
          {routes
            .filter((val) => !!val.element && val.path)
            .map((params) => {
              if (params.protected && !isSignIn) {
                return (
                  <Route
                    key="unauthorized-access"
                    path={params.path}
                    element={<Navigate to="/login" />}
                  />
                );
              }
              const RouteApp = params.element;
              return (
                <Route
                  key={params.path}
                  path={params.path}
                  element={
                    <>
                      <RouteApp />
                    </>
                  }
                />
              );
            })}
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
};
