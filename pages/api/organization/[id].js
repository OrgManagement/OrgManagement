const { PrismaClient } = require('@prisma/client')

const prisma = new PrismaClient()

export default async function handler(req, res) {
  if (req.method === 'POST') {
    res.status(405).send('Not used')
  }
  else if(req.method === 'GET')
  {
    const orgs = await prisma.organization.findMany()

    res.status(200).send('GET to /api/organization/[id]')
  }
}