import axios from "axios";

async function getUserDetails() {
  await new Promise((r) => setTimeout(r, 5000));
  const response = await axios.get("http://localhost:8080/todos")
  return response.data;
}

export default async function Home() {
  const userDetails = await getUserDetails(); 
  return (
    <div className=" flex flex-col justify-center h-screen">
      <div className="flex justify-center">

        <div className="border p-6 rounded">
          <div>
            Title :{userDetails[0]?.title}
          </div>
          Description : {userDetails[1]?.description}
        </div>
      </div>

    </div>
  );
}
