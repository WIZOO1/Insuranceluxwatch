export default function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.send(`
    <table border="1" style="width:100%">
      <tr><th>Insurer</th><th>Premium/yr</th><th>Coverage</th></tr>
      <tr><td>BriteCo</td><td>$180</td><td>Worldwide</td></tr>
      <tr><td>GemShield</td><td>$195</td><td>Worldwide</td></tr>
    </table>`);
}
