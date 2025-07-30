import Layout from "../../components/Layout";

export default function ClientDashboard() {
  const stats = { sent: 1200, open: 800, replies: 200, booked: 50 };

  return (
    <Layout>
      <h1 className="text-2xl font-bold mb-6">Client Dashboard</h1>
      <div className="grid grid-cols-2 gap-6">
        <div className="bg-white shadow rounded-lg p-6">
          <h2 className="text-lg font-semibold">Emails Sent</h2>
          <p className="text-3xl font-bold">{stats.sent}</p>
        </div>
        <div className="bg-white shadow rounded-lg p-6">
          <h2 className="text-lg font-semibold">Open Rate</h2>
          <p className="text-3xl font-bold">{((stats.open / stats.sent) * 100).toFixed(1)}%</p>
        </div>
        <div className="bg-white shadow rounded-lg p-6">
          <h2 className="text-lg font-semibold">Reply Rate</h2>
          <p className="text-3xl font-bold">{((stats.replies / stats.sent) * 100).toFixed(1)}%</p>
        </div>
        <div className="bg-white shadow rounded-lg p-6">
          <h2 className="text-lg font-semibold">Booked Calls</h2>
          <p className="text-3xl font-bold">{stats.booked}</p>
        </div>
      </div>
    </Layout>
  );
}
