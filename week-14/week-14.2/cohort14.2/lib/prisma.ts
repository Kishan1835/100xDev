// lib/prisma.ts
import { PrismaClient } from "@/app/generated/prisma";

const globalForPrisma = globalThis as unknown as { prisma: PrismaClient };

if (!globalForPrisma.prisma) {
    console.log("🆕 Creating NEW Prisma Client");
} else {
    console.log("♻️ Reusing EXISTING Prisma Client");
}

export const prisma = globalForPrisma.prisma || new PrismaClient();

if (process.env.NODE_ENV !== "production") {
    globalForPrisma.prisma = prisma;
}
