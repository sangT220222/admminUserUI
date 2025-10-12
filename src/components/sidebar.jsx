import { Home, Users, Settings } from "lucide-react";

export default function Sidebar({ isSidebarOpen, setSidebarOpen }) {
  return (
    //aside is used normally for sidebars or call-out boxes
    <aside
      className={`${
        isSidebarOpen ? "w-64" : "w-20"
      } bg-gray-900 text-gray-100 h-screen flex flex-col transition-all duration-300`}
    >
      {/* //flex-col: makes flex items be arranged vertically, from top to bottom. */}
      {/* Header / logo section */}
      <div
        className={`${
          isSidebarOpen ? "text-2xl p-6" : "text-sm p-2"
        } font-bold border-b border-gray-800`}
      >
        User<span className="text-blue-400">Panel</span>
      </div>
      {/* Navigation links */}
      <nav className="flex-1 p-4 space-y-3">
        <a
          href="#"
          className={`${
            isSidebarOpen ? "justify-start" : "justify-center"
          } flex items-center gap-3 text-gray-300 hover:text-white`}
          //gap-3 -> gives gap from the left
        >
          <Home size={25} /> {isSidebarOpen && <span>Dashboard</span>}
          {/* <Home size={25}/> <span className={isSidebarOpen ? "opacity-100" : "opacity-0 hidden"}>Dashboard</span> */}
        </a>
        <a
          href="#"
          className={`${
            isSidebarOpen ? "justify-start" : "justify-center"
          } flex items-center gap-3 text-gray-300 hover:text-white`}
        >
          <Users size={25} /> {isSidebarOpen && <span>Users</span>}
        </a>
        <a
          href="#"
          className={`${
            isSidebarOpen ? "justify-start" : "justify-center"
          } flex items-center gap-3 text-gray-300 hover:text-white`}
        >
          <Settings size={25} /> {isSidebarOpen && <span>Settings</span>}
        </a>
      </nav>
      <button
        onClick={() => setSidebarOpen(!isSidebarOpen)}
        className="p-4 border-t border-gray-800 text-gray-200 hover:text-white"
      >
        {isSidebarOpen ? "Collapse" : "Expand"}
      </button>
    </aside>
  );
}
