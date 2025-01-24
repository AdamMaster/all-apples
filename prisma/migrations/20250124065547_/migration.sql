/*
  Warnings:

  - You are about to drop the column `text` on the `NewsItem` table. All the data in the column will be lost.
  - You are about to drop the column `title` on the `NewsItem` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "NewsItem" DROP COLUMN "text",
DROP COLUMN "title";

-- CreateTable
CREATE TABLE "Paragraph" (
    "id" SERIAL NOT NULL,
    "subtitle" TEXT NOT NULL,
    "text" TEXT NOT NULL,
    "newsItemId" INTEGER NOT NULL,

    CONSTRAINT "Paragraph_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Paragraph" ADD CONSTRAINT "Paragraph_newsItemId_fkey" FOREIGN KEY ("newsItemId") REFERENCES "NewsItem"("id") ON DELETE CASCADE ON UPDATE CASCADE;
