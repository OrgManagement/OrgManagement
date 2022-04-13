

export default function handler(req, res) {
  if (req.method === 'POST') {
    res.status(405).send('Not used')
  }
  else if(req.method === 'GET')
  {
    res.status(200).send('GET to /api/organization/[id]')
  }
}