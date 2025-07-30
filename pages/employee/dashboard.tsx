import { useEffect, useState } from "react";
import { createClient } from "@supabase/supabase-js";
import Layout from "../../components/Layout";

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

export default function EmployeeDashboard() {
  const [leads, setLeads] = useState<any[]>([]);

  useEffect(() => {
    fetchLeads();
  }, []);

  const fetchLeads = async () => {
    const { data } = await supabase.from("Lead Enrichment - Input").select("*").limit(10);
    setLeads(data || []);
  };

  return (
    <Layout>
      <h1 className="text-2xl font-bold mb-6">Employee Dashboard</h1>
      <div className="bg-white shadow rounded-lg p-6">
        <table className="w-full border-collapse">
          <thead>
            <tr className="border-b bg-gray-50">
              <th className="p-3 text-left">Name</th>
              <th className="p-3 text-left">Company</th>
              <th className="p-3 text-left">Action</th>
            </tr>
          </thead>
          <tbody>
            {leads.map((lead) => (
              <tr key={lead.id} className="border-b hover:bg-gray-50">
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
      </div>
    </Layout>
  );
}
