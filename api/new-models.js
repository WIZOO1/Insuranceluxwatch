export default function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.send(`<p>No new drops at this moment.</p>`);
}
