import { PrismaClient } from "../generated/prisma";
import { z } from "zod/v4";



const prisma = new PrismaClient()
const PostSchema = z.object({
    title: z.string(),
    desc: z.string(),
    compeleted: z.boolean(),
    authorId: z.number()
})
async function InsertPost() {

    const PostDetails = {
        title: "GYM Time",
        desc: "Upper Body Day",
        compeleted: true,
        authorId: 1
    }

    const ValidData = await PostSchema.safeParseAsync(PostDetails)

    if (!ValidData.success) {
        console.log("Incorrect format of data")
    } else {
        const query = await prisma.post.create({
            data: ValidData.data
        })
        console.log(query)
    }
}

InsertPost()