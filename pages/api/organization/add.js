

export default function handler(req, res) {
  if (req.method === 'POST') {

    const organization = await prisma.organization.create({
      data: {
        name: req.body.name,
      },
    })
    res.status(200).send('POST to /api/organization/add')
  }
  else if(req.method === 'GET')
  {
    res.status(405).send('Not used')
  }
}