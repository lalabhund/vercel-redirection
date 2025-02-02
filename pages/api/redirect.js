export default function handler(req, res) {
  const { url } = req.query;
  
  if (!url) {
    return res.status(400).json({ error: "URL is required" });
  }

  res.writeHead(302, { Location: url });
  res.end();
}
