/*
  Warnings:

  - Added the required column `checked` to the `Build` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Build" ADD COLUMN     "checked" BOOLEAN NOT NULL;
