import { useEffect, useState } from "react";
import supabase from "../../lib/supabaseClient";
import Layout from "../../components/Layout";

export default function EmployeeDashboard() {
  const [leads, setLeads] = useState<any[]>([]);

  useEffect(() => {
    fetchLeads();
  }, []);

  const fetchLeads = async () => {
    const { data, error } = await supabase
      .from("Lead Enrichment - Input")
      .select("*")
      .limit(10);

    if (error) console.error(error);
    setLeads(Array.isArray(data) ? data : []);
  };

  return (
    <Layout>
      <h1 className="text-2xl font-bold mb-6 text-gray-800 dark:text-gray-100">
        Employee Dashboard
      </h1>

      <div className="bg-white dark:bg-gray-800 shadow rounded-lg p-6">
        {leads.length === 0 ? (
          <p className="text-gray-600 dark:text-gray-300">No leads found.</p>
        ) : (
          <table className="w-full border-collapse">
            <thead>
              <tr className="border-b bg-gray-50 dark:bg-gray-700">
                <th className="p-3 text-left text-gray-700 dark:text-gray-200">
                  Name
                </th>
                <th className="p-3 text-left text-gray-700 dark:text-gray-200">
                  Company
                </th>
                <th className="p-3 text-left text-gray-700 dark:text-gray-200">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              {leads.map((lead) => (
                <tr
                  key={lead.id}
                  className="border-b hover:bg-gray-50 dark:hover:bg-gray-600"
                >
                  <td className="p-3">{lead.fullName || "Unknown"}</td>
                  <td className="p-3">{lead.companyName || "N/A"}</td>
                  <td className="p-3">
                    <button className="px-3 py-1 bg-blue-600 text-white rounded hover:bg-blue-700">
                      Send to Queue
                    </button>
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
