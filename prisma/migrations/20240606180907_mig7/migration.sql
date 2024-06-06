-- AlterTable
ALTER TABLE "book" ADD COLUMN     "borrowerId" TEXT;

-- AddForeignKey
ALTER TABLE "book" ADD CONSTRAINT "book_borrowerId_fkey" FOREIGN KEY ("borrowerId") REFERENCES "member"("id") ON DELETE SET NULL ON UPDATE CASCADE;
