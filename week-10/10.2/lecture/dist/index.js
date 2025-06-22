"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const prisma_1 = require("../src/generated/prisma");
const prisma = new prisma_1.PrismaClient();
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
function getUserDetails(username) {
    return __awaiter(this, void 0, void 0, function* () {
        const findingUser = yield prisma.user.findFirst({
            where: { email: username }
        });
        console.log(findingUser);
    });
}
getUserDetails("RamKumar.20073@gmail.com");
