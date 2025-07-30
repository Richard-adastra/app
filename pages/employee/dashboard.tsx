import { useEffect, useState } from "react";
import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

export default function EmployeeDashboard() {
  const [leads, setLeads] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchLeads();
  }, []);

  const fetchLeads = async () => {
    setLoading(true);
    const { data, error } = await supabase
      .from("Lead Enrichment - Input")
      .select("*")
      .limit(20);

    if (!error) setLeads(data || []);
    setLoading(false);
  };

  const sendToQueue = async (lead: any) => {
    await fetch("/api/tasks", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ leadId: lead.id }),
    });
    alert("Task added to queue");
  };

  return (
    <div className="p-6">
      <h1 className="text-xl font-bold mb-4">Employee Dashboard</h1>
      {loading && <p>Loading...</p>}
      <ul>
        {leads.map((lead) => (
          <li
            key={lead.id}
            className="border p-2 mb-2 flex justify-between items-center"
          >
            <span>
              {lead.fullName || "Unknown"} – {lead.companyName || "No Company"}
            </span>
            <button
              onClick={() => sendToQueue(lead)}
              className="bg-blue-600 text-white px-3 py-1 rounded"
            >
              Send to Queue
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
