const { PrismaClient } = require('@prisma/client')

const prisma = new PrismaClient()

export default async function handler(req, res) {
  if (req.method === 'POST') {

    const org = await prisma.organization.create({
      data: {
        id: req.body.id,
        name: req.body.name,
        description: req.body.description
      },
    })

    res.status(200).json(org)

  }

  else if(req.method === 'GET')
  {
    res.status(405).send('Not used')
  }
}