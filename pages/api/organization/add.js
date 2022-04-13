

export default function handler(req, res) {
  if (req.method === 'POST') {
    res.status(200).send('POST to /api/organization/add')
  }
  else if(req.method === 'GET')
  {
    res.status(405).send('Not used')
  }
}