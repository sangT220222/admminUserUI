import Sidebar from "./components/sidebar";
import Dashboard from "./pages/dashboard";

function App() {
  return (
    <div className="flex min-h-screen bg-gray-100 text-gray-800">
      <Sidebar />
      <main className="flex-1">
        <Dashboard />
      </main>
    </div>
  );
}

export default App;
