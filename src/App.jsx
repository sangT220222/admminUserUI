import Sidebar from "./components/sidebar";
import Dashboard from "./pages/dashboard";
import { useState } from "react";

function App() {
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const [isUILight, setUITheme] = useState(false);
  return (
    <div
      className={`${
        isUILight ? "bg-gray-100" : "bg-gray-900"
      } flex min-h-screen`}
    >
      {/* <div
      className={`flex min-h-screen ${
        isUILight ? "bg-gray-100 text-gray-800" : "bg-gray-900 text-gray-100"
      }`}
    > */}
      <Sidebar
        isSidebarOpen={isSidebarOpen}
        setSidebarOpen={setSidebarOpen}
        isUILight={isUILight}
        setUITheme={setUITheme}
      />
      <main className="flex-1">
        <Dashboard />
      </main>
    </div>
  );
}

export default App;
