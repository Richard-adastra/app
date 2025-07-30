import { useEffect, useState } from "react";
import Layout from "../../components/Layout";

export default function AdminTasks() {
  const [tasks, setTasks] = useState<any[]>([]);

  useEffect(() => {
    fetchTasks();
  }, []);

  const fetchTasks = async () => {
    const res = await fetch("/api/tasks");
    const data = await res.json();
    setTasks(data);
  };

  return (
    <Layout>
      <h1 className="text-2xl font-bold mb-6">Admin Tasks</h1>
      <div className="bg-white shadow rounded-lg p-6">
        <table className="w-full border-collapse">
          <thead>
            <tr className="border-b bg-gray-50">
              <th className="p-3 text-left">Task ID</th>
              <th className="p-3 text-left">Status</th>
              <th className="p-3 text-left">Action</th>
            </tr>
          </thead>
          <tbody>
            {tasks.map((task) => (
              <tr key={task.id} className="border-b hover:bg-gray-50">
                <td className="p-3">{task.id}</td>
                <td className="p-3">{task.status}</td>
                <td className="p-3">
                  {task.status === "pending" && (
                    <button className="px-3 py-1 bg-green-600 text-white rounded hover:bg-green-700">
                      Approve
                    </button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Layout>
  );
}
