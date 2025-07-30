import { useEffect, useState } from "react";

export default function ClientDashboard() {
  const [stats, setStats] = useState<any>({
    sent: 0,
    open: 0,
    replies: 0,
    booked: 0,
  });

  useEffect(() => {
    // For now, just mock data
    setStats({
      sent: 1000,
      open: 600,
      replies: 200,
      booked: 50,
    });
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-xl font-bold mb-4">Client Dashboard</h1>
      <ul className="space-y-2">
        <li>Total Emails Sent: {stats.sent}</li>
        <li>Open Rate: {((stats.open / stats.sent) * 100).toFixed(1)}%</li>
        <li>Reply Rate: {((stats.replies / stats.sent) * 100).toFixed(1)}%</li>
        <li>Booked Calls: {stats.booked}</li>
      </ul>
    </div>
  );
}
