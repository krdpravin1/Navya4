import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_KEY
);

export default async function handler(req, res) {
  if (req.method !== "DELETE") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { user_id } = req.body;

  if (!user_id) {
    return res.status(400).json({ error: "Missing user_id" });
  }

  const { error } = await supabase
    .from("users")
    .delete()
    .eq("user_id", user_id);

  if (error) return res.status(500).json({ error: error.message });

  res.status(200).json({ success: true, message: "Profile deleted" });
}
