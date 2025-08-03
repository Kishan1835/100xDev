import { NextRequest } from "next/server";
import { PrismaClient } from "@/app/generated/prisma";
const prisma = new PrismaClient();


export async function POST(req: NextRequest) {
    const body = await req.json()
    await prisma.user.create({
        data: {
            username: body.username,
            password: body.password
        }
    })

    return Response.json({
        message: "You are logged in"
    })

}