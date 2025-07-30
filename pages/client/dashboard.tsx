import Layout from "../../components/Layout";

export default function ClientDashboard() {
  const stats = { sent: 1200, open: 800, replies: 200, booked: 50 };

  return (
    <Layout>
      <h1 className="text-2xl font-bold mb-6">Client Dashboard</h1>
      <div className="grid grid-cols-2 gap-6">
        {[
          { label: "Emails Sent", value: stats.sent },
          { label: "Open Rate", value: ((stats.open / stats.sent) * 100).toFixed(1) + "%" },
          { label: "Reply Rate", value: ((stats.replies / stats.sent) * 100).toFixed(1) + "%" },
          { label: "Booked Calls", value: stats.booked },
        ].map((card, i) => (
          <div key={i} className="bg-white shadow rounded-lg p-6">
            <h2 className="text-lg font-semibold">{card.label}</h2>
            <p className="text-3xl font-bold">{card.value}</p>
          </div>
        ))}
      </div>
    </Layout>
  );
}
