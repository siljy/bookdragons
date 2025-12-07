import config from '@payload-config'
import { NextResponse } from 'next/server'
import { getPayload } from 'payload'

//Sende ordre til Payload
export async function POST(req: Request) {
  const payload = await getPayload({ config })
  const data = await req.json()

  try {
    const order = await payload.create({
      collection: 'orders',
      data,
    })
    return NextResponse.json(order)
  } catch (error) {
    console.error('Klarte ikke lagre ordre', error)
  }
}
