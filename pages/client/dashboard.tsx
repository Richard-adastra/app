import Layout from "../../components/Layout";

export default function ClientDashboard() {
  const stats = { sent: 1200, open: 800, replies: 200, booked: 50 };

  const cards = [
    { label: "Emails Sent", value: stats.sent },
    {
      label: "Open Rate",
      value: ((stats.open / stats.sent) * 100).toFixed(1) + "%",
    },
    {
      label: "Reply Rate",
      value: ((stats.replies / stats.sent) * 100).toFixed(1) + "%",
    },
    { label: "Booked Calls", value: stats.booked },
  ];

  return (
    <Layout>
      <h1 className="text-2xl font-bold mb-6 text-gray-800 dark:text-gray-100">
        Client Dashboard
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {cards.map((c, i) => (
          <div
            key={i}
            className="bg-white dark:bg-gray-800 shadow rounded-lg p-6"
          >
            <h2 className="text-lg font-semibold text-gray-700 dark:text-gray-200">
              {c.label}
            </h2>
            <p className="text-3xl font-bold text-gray-900 dark:text-gray-100">
              {c.value}
            </p>
          </div>
        ))}
      </div>
    </Layout>
  );
}
