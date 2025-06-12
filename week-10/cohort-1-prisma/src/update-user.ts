import { PrismaClient } from "../generated/prisma";

const prisma = new PrismaClient({ log: ["info", "query"], })


async function main() {
    
    const UpdateData = await prisma.user.update({
        where: {
            id: 1
        },
        data: {
            posts: {
                deleteMany: {
                    published: false
                }
            }
        }
    })
    console.log(UpdateData)
}
main();