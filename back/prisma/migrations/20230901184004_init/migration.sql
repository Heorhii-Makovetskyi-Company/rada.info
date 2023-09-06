-- CreateTable
CREATE TABLE "Step" (
    "id" SERIAL NOT NULL,
    "date" TIMESTAMP(3) NOT NULL,
    "name" TEXT NOT NULL,
    "billId" INTEGER NOT NULL,

    CONSTRAINT "Step_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Doc" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "url" TEXT NOT NULL,
    "billId" INTEGER NOT NULL,

    CONSTRAINT "Doc_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Bill" (
    "id" SERIAL NOT NULL,
    "originId" TEXT NOT NULL,
    "registration" TIMESTAMP(3) NOT NULL,
    "url" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "shortTitle" TEXT NOT NULL,
    "veryShortTitle" TEXT NOT NULL,
    "shortContent" TEXT NOT NULL,
    "veryShortContent" TEXT NOT NULL,
    "content" TEXT NOT NULL,
    "initiators" TEXT[],
    "session" TEXT NOT NULL,
    "rubric" TEXT NOT NULL,
    "main_committee" TEXT NOT NULL,
    "other_committees" TEXT[],
    "likesCount" INTEGER NOT NULL DEFAULT 0,
    "dislikesCount" INTEGER NOT NULL DEFAULT 0,

    CONSTRAINT "Bill_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Bill_originId_key" ON "Bill"("originId");

-- CreateIndex
CREATE UNIQUE INDEX "Bill_url_key" ON "Bill"("url");

-- AddForeignKey
ALTER TABLE "Step" ADD CONSTRAINT "Step_billId_fkey" FOREIGN KEY ("billId") REFERENCES "Bill"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Doc" ADD CONSTRAINT "Doc_billId_fkey" FOREIGN KEY ("billId") REFERENCES "Bill"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
