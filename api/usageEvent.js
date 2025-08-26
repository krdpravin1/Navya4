import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_KEY
);

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { user_id, event, details } = req.body;

  if (!user_id || !event) {
    return res.status(400).json({ error: "Missing fields" });
  }

  const { data, error } = await supabase
    .from("usage_events")
    .insert([{ user_id, event, details }])
    .select();

  if (error) return res.status(500).json({ error: error.message });

  res.status(200).json({ success: true, data });
}
