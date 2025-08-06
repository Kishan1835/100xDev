"use server"

import { prisma } from "@/lib/prisma"

export async function signup(username: string, password: string) {

    try {
        await prisma.user.create({
            data: {
                username: username,
                password: password
            }
        })
        return true
    } catch (e) {
        return false
    }


}

