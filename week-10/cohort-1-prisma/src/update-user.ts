import { PrismaClient } from "../generated/prisma";

const prisma = new PrismaClient({ log: ["info", "query"], })


async function main() {
    
    const UpdateData = await prisma.user.update({
        where: {
            email:"kishan.2003@gmail.com"
        },
        data: {
            email:"kishan.2004@gmail.com"
        }
    })
    console.log(UpdateData)
}
main();