const { PrismaClient } = require('@prisma/client')

const prisma = new PrismaClient()

export default async function handler(req, res) {
  if (req.method === 'POST') {

    const user = await prisma.user.create({
      data: {
        id: req.body.id,
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        email: req.body.email,
        rcsid: req.body.rcsid,
        joinedat: req.body.joinedat
      },
    })

    res.status(200).json(user)

  }

  else if(req.method === 'GET')
  {
    res.status(405).send('Not used')
  }
}