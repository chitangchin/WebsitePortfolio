import { useSession } from 'next-auth/react';
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export default async function handler(
  req,
  res
) {
  if (req.method === 'GET') {
    const entries = await prisma.chat.findMany({
      orderBy: {
        createdAt: 'desc',
      }
    });

    return res.json(
      entries
    ).end()
  }

  if (req.method === 'POST') {
    const newEntry = await prisma.chat.create({
      data: {
        name: req.body.session.user.name,
        text: req.body.body,
      }
    });

    return res.status(200).end() 
  }

  return res.send('Method not allowed.').end()
}