

export default function handler(req, res) {
  if (req.method === 'POST') {
    res.status(200).send('POST to /api/users/add')
  }
  else if(req.method === 'GET')
  {
    res.status(200).send('Not used')
  }
}