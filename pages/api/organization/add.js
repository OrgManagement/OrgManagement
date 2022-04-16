const { PrismaClient } = require('@prisma/client')

const prisma = new PrismaClient()

export default async function handler(req, res) {
  if (req.method === 'POST') {

    const organization = await prisma.organization.create({
      data: {
        id: 3,
        name: req.body.name,
        members: [],
        modules: []
      },
    })
    res.status(200).send('POST to /api/organization/add')
  }
  else if(req.method === 'GET')
  {
    res.status(405).send('Not used')
  }
}