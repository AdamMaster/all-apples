/*
  Warnings:

  - The `sort` column on the `Product` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- AlterTable
ALTER TABLE "Product" DROP COLUMN "sort",
ADD COLUMN     "sort" INTEGER;
