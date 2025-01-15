/*
  Warnings:

  - Added the required column `typeId` to the `Sort` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Sort" ADD COLUMN     "typeId" INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE "Sort" ADD CONSTRAINT "Sort_typeId_fkey" FOREIGN KEY ("typeId") REFERENCES "Type"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
