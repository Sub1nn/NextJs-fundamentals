import { PrismaClient } from "@prisma/client";

const client = new PrismaClient();

async function getUserDetails() {
  try {
    const user = await client.user.findFirst({});
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
    </div>
  );
}
