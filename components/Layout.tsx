import Link from "next/link";
import { useState } from "react";
import { Sun, Moon, Users, ClipboardList, BarChart } from "lucide-react";

export default function Layout({ children }: { children: React.ReactNode }) {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={darkMode ? "dark" : ""}>
      <div className="flex min-h-screen bg-gray-100 dark:bg-gray-900">
        {/* Sidebar */}
        <aside className="w-64 bg-white dark:bg-gray-800 shadow-md p-6">
          <div className="flex items-center gap-2 mb-8">
            <img src="/logo.png" alt="Logo" className="h-10 w-10" />
            <span className="text-lg font-bold text-gray-900 dark:text-gray-100">
              Ad Astra
            </span>
          </div>
          <nav className="flex flex-col gap-4">
            <Link
              href="/employee/dashboard"
              className="flex items-center gap-2 text-blue-600 hover:underline"
            >
              <Users size={18} /> Employee
            </Link>
            <Link
              href="/admin/tasks"
              className="flex items-center gap-2 text-green-600 hover:underline"
            >
              <ClipboardList size={18} /> Admin
            </Link>
            <Link
              href="/client/dashboard"
              className="flex items-center gap-2 text-purple-600 hover:underline"
            >
              <BarChart size={18} /> Client
            </Link>
          </nav>
        </aside>

        {/* Main Content */}
        <div className="flex-1 flex flex-col">
          {/* Top Bar */}
          <header className="bg-white dark:bg-gray-800 shadow p-4 flex justify-between items-center">
            <h1 className="text-xl font-semibold text-gray-800 dark:text-gray-100">
              Dashboard
            </h1>
            <div className="flex items-center gap-4">
              <button
                onClick={() => setDarkMode(!darkMode)}
                className="p-2 rounded-full bg-gray-200 dark:bg-gray-700"
              >
                {darkMode ? <Sun size={18} /> : <Moon size={18} />}
              </button>
              <img
                src="https://i.pravatar.cc/40"
                className="h-10 w-10 rounded-full"
                alt="avatar"
              />
            </div>
          </header>

          {/* Page Content */}
          <main className="flex-1 p-6">{children}</main>
        </div>
      </div>
    </div>
  );
}
