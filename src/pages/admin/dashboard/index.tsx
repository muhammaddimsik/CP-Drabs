import React from "react";
import Layout from "@/components/Layout";
import Statistics from "./Statistics";

const path = [
  {
    name: "Dashboard",
    url: "/administrator/dashboard",
  },
];

const App: React.FC = () => {
  return (
    <Layout path={path} title="Dashboard">
      <Statistics />
    </Layout>
  );
};

export default App;
