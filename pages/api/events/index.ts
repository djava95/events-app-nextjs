// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { events } from './data.json'
import type { NextApiRequest, NextApiResponse } from 'next'

export default function handler( req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    res.status(200).json(events)
  } else {
    res.setHeader('Allow', ['GET'])
    res.status(405).json(`The ${req.method} method is not allowed`)
  }
}
