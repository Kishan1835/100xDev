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
const prisma_1 = require("../generated/prisma");
const v4_1 = require("zod/v4");
const prisma = new prisma_1.PrismaClient();
const PostSchema = v4_1.z.object({
    title: v4_1.z.string(),
    desc: v4_1.z.string(),
    compeleted: v4_1.z.boolean(),
    authorId: v4_1.z.number()
});
function InsertPost() {
    return __awaiter(this, void 0, void 0, function* () {
        const PostDetails = {
            title: "GYM Time",
            desc: "Upper Body Day",
            compeleted: true,
            authorId: 1
        };
        const ValidData = yield PostSchema.safeParseAsync(PostDetails);
        if (!ValidData.success) {
            console.log("Incorrect format of data");
        }
        else {
            const query = yield prisma.post.create({
                data: ValidData.data
            });
            console.log(query);
        }
    });
}
InsertPost();
