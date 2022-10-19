import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import DataProvider from "./context/Data";
import i18next from "./language/Data";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <DataProvider>
      <App />
    </DataProvider>
  </React.StrictMode>
);
