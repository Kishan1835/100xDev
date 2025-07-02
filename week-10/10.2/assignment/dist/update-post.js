"use strict";
// import { PrismaClient } from "../generated/prisma";
// import { safeParseAsync, z } from "zod/v4"
// const prisma = new PrismaClient();
// const UpdateSchema = z.object({
//     title: z.string(),
//     desc: z.string(),
//     completed: z.string(),
//     authorId: z.number()
// })
// async function UpdateUser() {
//     const DataToBeUpdated = {
//         desc: "TS-TODO application build in typescrip",
//         completed: true,
//         // authorId: "2"
//     }
//     const ValdateSchema = await UpdateSchema.safeParseAsync(DataToBeUpdated);
//     if (!ValdateSchema.success) {
//         console.log("Error in updating the Data");
//     } else {
//         const query = await prisma.post.update({
//             where: {
//                 id:1
//             }, data: {
//                 posts:{}
//             }
//         })
//     }
// }
