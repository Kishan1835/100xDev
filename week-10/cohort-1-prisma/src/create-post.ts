import { Prisma, PrismaClient } from "../generated/prisma";

const prisma = new PrismaClient(); //{log:['info','query'],} for crreateing info logs at run time 

async function main() {
   const post= await  prisma.post.create({
       data:{
           title: "webDev of the post",
           content: "backend notes",
           published: true,
           authorId:1
       }
  })
    console.log(post)
}

main();