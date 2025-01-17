/*
  Warnings:

  - Made the column `ripeningPeriod` on table `Product` required. This step will fail if there are existing NULL values in that column.
  - Made the column `tastingEvaluation` on table `Product` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "Product" ALTER COLUMN "ripeningPeriod" SET NOT NULL,
ALTER COLUMN "tastingEvaluation" SET NOT NULL;
