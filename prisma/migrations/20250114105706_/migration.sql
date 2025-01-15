/*
  Warnings:

  - You are about to drop the column `sortId` on the `Product` table. All the data in the column will be lost.
  - You are about to drop the `Sort` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Product" DROP CONSTRAINT "Product_sortId_fkey";

-- DropForeignKey
ALTER TABLE "Sort" DROP CONSTRAINT "Sort_typeId_fkey";

-- AlterTable
ALTER TABLE "Product" DROP COLUMN "sortId";

-- DropTable
DROP TABLE "Sort";
