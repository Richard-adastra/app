import { useEffect, useState } from "react";

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

  const approveTask = async (taskId: number) => {
    await fetch("/api/tasks", {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id: taskId, status: "approved" }),
    });

    await fetch("/api/trigger-workflow", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ taskId }),
    });

    fetchTasks();
  };

  return (
    <div className="p-6">
      <h1 className="text-xl font-bold mb-4">Admin Tasks</h1>
      <ul>
        {tasks.map((task) => (
          <li
            key={task.id}
            className="border p-2 mb-2 flex justify-between items-center"
          >
            <span>
              Task #{task.id} – {task.status}
            </span>
            {task.status === "pending" && (
              <button
                onClick={() => approveTask(task.id)}
                className="bg-green-600 text-white px-3 py-1 rounded"
              >
                Approve
              </button>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}
