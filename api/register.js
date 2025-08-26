export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { deviceId } = req.body;
  if (!deviceId) return res.status(400).json({ error: "Device ID required" });

  // TODO: Insert into Supabase
  res.status(200).json({ message: "User registered", deviceId });
}
