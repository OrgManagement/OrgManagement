const { PrismaClient } = require('@prisma/client')

const prisma = new PrismaClient()

export default async function handler(req, res) {
  if (req.method === 'POST') {

    const event = await prisma.event.create({
      data: {
        id: req.body.id,
        name: req.body.name,
        description: req.body.description,
        location: req.body.location,
        starttime: req.body.starttime,
        endtime: req.body.endtime
      },
    })

    res.status(200).json(event);
  }
  else if (req.method === 'GET') {
    res.status(405).send('Not used');
  }
}