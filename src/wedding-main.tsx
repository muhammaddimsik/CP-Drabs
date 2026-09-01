import React from "react";
import ReactDOM from "react-dom/client";

import { HelmetProvider } from "react-helmet-async";

import "./index.css";
import WeddingInvitationPage from "@/pages/users/wedding/WeddingInvitationPage";

ReactDOM.createRoot(document.getElementById("wedding-root")!).render(
  <React.StrictMode>
    <HelmetProvider>
      <WeddingInvitationPage />
    </HelmetProvider>
  </React.StrictMode>,
);
