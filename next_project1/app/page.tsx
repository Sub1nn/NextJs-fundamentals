import { PrismaClient } from "@prisma/client";
import client from "@/db";

async function getUserDetails() {
  try {
    const users = await client.user.findMany({
      orderBy: {
        id: "desc",
      },
      take: 1,
    });

    const user = users[0];
    return {
      username: user?.username,
      password: user?.password,
    };
  } catch (error) {
    console.log(error);
    return null; // Return null if there is an error
  }
}
export default async function Home() {
  const userDetails = await getUserDetails();

  if (!userDetails) {
    return <div>Error fetching user details</div>;
  }

  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <h1>Name: {userDetails.username}</h1>
      <h1>Password: {userDetails.password}</h1>
    </div>
  );
}
