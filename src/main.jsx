import React from "react";
import { createRoot, hydrateRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "./styles.css";
const root = document.getElementById("root");
const app = (
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
const current = window.location.pathname.replace(/\/$/, "") || "/";
if (root.hasChildNodes() && root.dataset.route === current)
  hydrateRoot(root, app);
else {
  root.replaceChildren();
  createRoot(root).render(app);
}
