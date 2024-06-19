import axios from "axios";
async function getUserDetails() {
  try {
    const response = await axios.get("http://localhost:3000/api/user");
    return response.data; // axios automatically parses JSON response
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
      <h1>{userDetails.userName}</h1>
      <h2>{userDetails.email}</h2>
      <p>
        {userDetails.address.postalCode}-{userDetails.address.city},{" "}
        {userDetails.address.state}, {userDetails.address.country}
      </p>
    </div>
  );
}
