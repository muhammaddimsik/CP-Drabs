import { useEffect } from "react";
import { Toaster } from "./components/ui/toaster";
import MainRoute from "./routes/MainRoute";

import AOS from "aos";
import "aos/dist/aos.css";

function App() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <div className="bg-white min-h-screen">
      <div className="mx-auto flex items-center">
        <Toaster />
        <MainRoute />
      </div>
    </div>
  );
}

export default App;
