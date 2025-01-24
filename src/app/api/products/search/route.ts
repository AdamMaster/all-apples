import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '../../../../../prisma/prisma-client'

export async function GET(req: NextRequest) {
  const query = req.nextUrl.searchParams.get('query') || ''

  const products = await prisma.category.findMany({
    include: {
      products: {
        where: {
          name: {
            contains: query,
            mode: 'insensitive'
          }
        },
        // take: 5,
        include: {
          category: true,
          type: true
        }
      }
    }
  })

  return NextResponse.json(products)
}
