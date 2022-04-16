const { PrismaClient } = require('@prisma/client')

const prisma = new PrismaClient()

export default async function handler(req, res) {
  if (req.method === 'POST') {

    const organization = await prisma.organization.create({
      data: {
        id: req.body.id,
        name: req.body.name,
        location: req.body.location,
        description: req.body.description,
        start: req.body.start,
        end: req.body.end
      },
    })

    res.status(200).send('POST to /api/event/add')
  }
  else if(req.method === 'GET')
  {
    res.status(405).send('Not used')
  }
}