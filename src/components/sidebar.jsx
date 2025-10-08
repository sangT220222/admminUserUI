import { Home, Users, Settings } from "lucide-react";

export default function Sidebar() {
  return (
    //aside is used normally for sidebars or call-out boxes
    <aside className="w-64 bg-gray-900 text-gray-100 h-screen flex flex-col">
      {/* //flex-col: makes flex items be arranged vertically, from top to bottom. */}
      <div className="p-6 text-2xl font-bold border-b border-gray-800">
        User<span className="text-blue-400">Panel</span>
      </div>

      <nav className="flex-1 p-4 space-y-3">
        <a
          href="#"
          className="flex items-center gap-3 text-gray-300 hover:text-white"
          //gap-3 -> gives gap from the left
        >
          <Home size={25} /> Dashboard
        </a>
        <a
          href="#"
          className="flex items-center gap-3 text-gray-300 hover:text-white"
        >
          <Users size={25} /> Users
        </a>
        <a
          href="#"
          className="flex items-center gap-3 text-gray-300 hover:text-white"
        >
          <Settings size={25} /> Settings
        </a>
      </nav>
    </aside>
  );
}
