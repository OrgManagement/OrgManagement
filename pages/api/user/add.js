const { PrismaClient } = require('@prisma/client')

const prisma = new PrismaClient()

export default async function handler(req, res) {
  if (req.method === 'POST') {

    const org = await prisma.user.create({
      data: {
        id: req.body.id,
        firstName: req.body.firstname,
        lastName: req.body.lastname,
        email: req.body.email
      },
    })
    res.status(200).send('POST to /api/user/add')
  }
  else if(req.method === 'GET')
  {
    res.status(405).send('Not used')
  }
}