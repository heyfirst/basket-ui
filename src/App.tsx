import React, { Suspense } from "react";
import { Route, BrowserRouter, Switch } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import { DOCUMENTS } from "./docs";

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Sidebar />
      <main className="pl-72 main-wrapper">
        <Suspense fallback={<div />}>
          <Switch>
            {DOCUMENTS.map((document) =>
              document.menus
                .filter((menu) => menu.publish)
                .map((menu) => (
                  <Route
                    exact
                    path={menu.link}
                    key={menu.link}
                    component={menu.component}
                  />
                ))
            )}
          </Switch>
        </Suspense>
      </main>
    </BrowserRouter>
  );
};

export default App;
