import { PrismaClient } from "../generated/prisma";

const prisma = new PrismaClient({log:["info","query"]});

async function main() {
    try {
        const response = await prisma.user.findMany({
            where: {
                email: {
                    endsWith: "gmail.com"
                },
                posts: {
                    some: {
                        published: true
                    }
                }
             }, include: {
                posts: {
                    where: {
                        published: true
                    }
                }
            }
        })
        console.log(response)
    } catch (error) {
        console.error(error)
    } finally {
        await prisma.$disconnect()
    }
}

main()
   