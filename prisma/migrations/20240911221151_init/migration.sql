-- CreateTable
CREATE TABLE "SentData" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "content" TEXT,

    CONSTRAINT "SentData_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL,
    "name" TEXT,
    "role" TEXT NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);
