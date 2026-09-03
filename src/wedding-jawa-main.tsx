import React from "react";
import ReactDOM from "react-dom/client";

import { HelmetProvider } from "react-helmet-async";


import "./index.css";
import JawaWeddingInvitationPage from "./pages/users/wedding/JawaWeddingInvitationPage";

ReactDOM.createRoot(
  document.getElementById(
    "wedding-jawa-root",
  )!,
).render(
  <React.StrictMode>
    <HelmetProvider>
      <JawaWeddingInvitationPage />
    </HelmetProvider>
  </React.StrictMode>,
);