import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import DataProvider from "./context/Data";
import i18next from "./language/Data";
import { CookiesProvider } from "react-cookie";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <CookiesProvider>
      <DataProvider>
        <App />
      </DataProvider>
    </CookiesProvider>
  </React.StrictMode>,
);
