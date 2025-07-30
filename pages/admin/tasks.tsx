import { useEffect, useState } from "react";
import Layout from "../../components/Layout";

export default function AdminTasks() {
  const [tasks, setTasks] = useState<any[]>([]);

  useEffect(() => {
    fetchTasks();
  }, []);

  const fetchTasks = async () => {
    try {
      const res = await fetch("/api/tasks");
      const data = await res.json();
      setTasks(Array.isArray(data) ? data : []);
    } catch (err) {
      console.error("Error fetching tasks:", err);
      setTasks([]);
    }
  };

  return (
    <Layout>
      <h1 className="text-2xl font-bold mb-6 text-gray-800 dark:text-gray-100">
        Admin Tasks
      </h1>

      <div className="bg-white dark:bg-gray-800 shadow rounded-lg p-6">
        {tasks.length === 0 ? (
          <p className="text-gray-600 dark:text-gray-300">No tasks available.</p>
        ) : (
          <table className="w-full border-collapse">
            <thead>
              <tr className="border-b bg-gray-50 dark:bg-gray-700">
                <th className="p-3 text-left text-gray-700 dark:text-gray-200">
                  Task ID
                </th>
                <th className="p-3 text-left text-gray-700 dark:text-gray-200">
                  Status
                </th>
                <th className="p-3 text-left text-gray-700 dark:text-gray-200">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              {tasks.map((task) => (
                <tr
                  key={task.id}
                  className="border-b hover:bg-gray-50 dark:hover:bg-gray-600"
                >
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
        )}
      </div>
    </Layout>
  );
}
