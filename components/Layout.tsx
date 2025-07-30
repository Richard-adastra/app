import Link from "next/link";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className="w-64 bg-white shadow-md p-6">
        <h1 className="text-xl font-bold mb-6">Leadgen App</h1>
        <nav className="flex flex-col gap-3">
          <Link href="/employee/dashboard" className="text-blue-600 hover:underline">Employee</Link>
          <Link href="/admin/tasks" className="text-green-600 hover:underline">Admin</Link>
          <Link href="/client/dashboard" className="text-purple-600 hover:underline">Client</Link>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-8">{children}</main>
    </div>
  );
}
