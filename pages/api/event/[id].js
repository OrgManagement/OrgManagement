const { PrismaClient } = require('@prisma/client')

const prisma = new PrismaClient()

export default async function handler(req, res) {
  if (req.method === 'POST') {
    res.status(405).send('Not used')
  }
  else if (req.method === 'GET') {
    const event = await prisma.event.findUnique({
      where: {
        id: req.query.id
      },
    })

    res.status(200).json(event)
  }
}