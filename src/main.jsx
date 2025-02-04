import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import GlobalStyle from "./Styles.js";

import App from "./Pages/App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <GlobalStyle />
    <App />
  </StrictMode>
);
