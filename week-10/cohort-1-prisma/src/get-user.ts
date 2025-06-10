import { PrismaClient } from '../generated/prisma'

const prisma = new PrismaClient({log:['info','query'],});//{log:['info','query'],} for crreateing info logs at run time 

async function main() {
    
    const userData = await prisma.user.findMany({});
    console.log(userData);

    const singleData = await prisma.user.findUnique({
        where: {
            id:1
        },
        include:
        {
            posts: true
        }
    })
    console.log(singleData)
}

main();