import { prisma } from './prisma-client'
import { categories, news, products, types } from './constants'

async function up() {
  await prisma.category.createMany({
    data: categories
  })

  await prisma.type.createMany({
    data: types
  })

  await prisma.product.createMany({
    data: products
  })

  for (const item of news) {
    await prisma.newsItem.create({
      data: {
        title: item.title,
        imageUrl: item.imageUrl,
        paragraphs: {
          create: item.paragraphs.map(paragraph => ({
            subtitle: paragraph.subtitle,
            text: paragraph.text
          }))
        }
      }
    })
  }
}

async function down() {
  await prisma.$executeRaw`TRUNCATE TABLE "Category" RESTART IDENTITY CASCADE`
  await prisma.$executeRaw`TRUNCATE TABLE "Type" RESTART IDENTITY CASCADE`
  await prisma.$executeRaw`TRUNCATE TABLE "Product" RESTART IDENTITY CASCADE`
}

async function main() {
  try {
    await down()
    await up()
  } catch (e) {
    console.error(e)
  }
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async e => {
    await prisma.$disconnect()
    process.exit(1)
  })
