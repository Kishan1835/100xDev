
import axios from "axios";
import { NextRequest } from "next/server";
import { prisma } from "@/lib/prisma"


async function fetchData() {
  const user = await prisma.user.findFirst();

  return {
    name: "kishan",
    user: user?.username
  }
}
export default async function User() {
  const data = await fetchData();

  return (
    <div className="flex flex-col justify-center h-screen ">
      <div className="flex justify-center ">
        {data.name}

        {data.user}
      </div>
    </div>
  );
}
