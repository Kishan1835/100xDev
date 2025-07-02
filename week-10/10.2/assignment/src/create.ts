import { PrismaClient } from "../generated/prisma"
import { z } from "zod/v4"

const prisma = new PrismaClient();
const UserSchema = z.object({
    name: z.string(),
    email: z.email()
})

async function InsertTodo() {

    const UserData = ({
        name: "rama",
        email: "ramana.2024@gmail.com"
    })

    const ValidData = await UserSchema.safeParseAsync(UserData)

    if (!ValidData.success) {
        console.log("Incorrect format of data")
    } else {
        const query = await prisma.user.create({
            data: ValidData.data
        })
        console.log(query)
    }
}

InsertTodo()