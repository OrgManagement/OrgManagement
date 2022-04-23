const { PrismaClient } = require('@prisma/client')

const prisma = new PrismaClient()

export default async function handler(req, res) {
  if (req.method === 'POST') {

    const user = await prisma.user.create({
      data: {
        id: req.body.id,
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        rcsID: req.body.rcsID,
        joinedAt: req.body.joinedAt
      },
    })

    res.status(200).json(user)

  }

  else if (req.method === 'GET') {
    res.status(405).send('Not used')
  }
}