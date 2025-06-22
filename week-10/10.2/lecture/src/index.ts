import { PrismaClient } from "../src/generated/prisma";

const prisma = new PrismaClient();

// async function Creation(username: string, password: string, fristName: string, lastName: string) {
//     const newUser = await prisma.user.create({
//         data: {
//             email: username,
//             password,
//             fristName,
//             lastName
//         },
//         select: {
//             id: true,
//             password: true
//         }
//     })
//     console.log(newUser)
// }

// Creation("RamKumar.20073@gmail.com", "123@12", "Ram", "Kusmar");

interface UpdateParam {
    fristName: string;
    lastName: string;
}


// async function UpdateDriver(username: string, {
//     fristName,
//     lastName
// }: UpdateParam) {
//     const Updateuser = await prisma.user.findUnique({
//         where: {
//             email: username
//         },
//     })
//     console.log(Updateuser);
// }

// UpdateDriver("RamKumar.20073@gmail.com", {
//     fristName: "ram",
//     lastName: "Kusmar"
// })


async function getUserDetails(username: string) {
    const findingUser = await prisma.user.findFirst({
        where: { email: username }

    })
    console.log(findingUser)
}

getUserDetails("RamKumar.20073@gmail.com");