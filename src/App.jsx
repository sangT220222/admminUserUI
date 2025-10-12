import Sidebar from "./components/sidebar";
import Dashboard from "./pages/dashboard";
import { useState } from "react";

function App() {
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  return (
    <div className="flex min-h-screen bg-gray-100 text-gray-800">
      <Sidebar isSidebarOpen={isSidebarOpen} setSidebarOpen={setSidebarOpen} />
      <main className="flex-1">
        <Dashboard />
      </main>
    </div>
  );
}

export default App;
