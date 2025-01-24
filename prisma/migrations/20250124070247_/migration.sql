/*
  Warnings:

  - Added the required column `title` to the `NewsItem` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "NewsItem" ADD COLUMN     "title" TEXT NOT NULL;
