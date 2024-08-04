import { Toaster } from "./components/ui/toaster";
import MainRoute from "./routes/MainRoute";

function App() {
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
