import { PrismaClient } from '../generated/prisma'

const prisma = new PrismaClient()


async function main() {
 const user= await  prisma.user.create({
        data: {
            email: "kishan.2003@gmail.com",
            name: "Hayagriva Kishan"
    }
  })
    console.log(user)
}

main()
    .then(async () => {
      console.log("executed the users query")
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })