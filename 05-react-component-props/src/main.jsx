import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles/global.css";
import App from "./app/App";

const rootElement = document.getElementById("root");

createRoot(rootElement).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
