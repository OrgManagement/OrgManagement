const { PrismaClient } = require('@prisma/client')

const prisma = new PrismaClient()

export default async function handler(req, res) {
  if (req.method === 'POST') {

    const org = await prisma.organization.create({
      data: {
        id: req.body.id,
        name: req.body.name
      },
    })
    res.status(200).send('POST to /api/organization/add')
  }
  else if(req.method === 'GET')
  {
    res.status(405).send('Not used')
  }
}