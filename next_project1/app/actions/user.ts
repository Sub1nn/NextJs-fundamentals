"use server";

import client from "@/db";

export async function signUp(username: string, password: string) {
  try {
    const user = await client.user.create({
      data: {
        username: username,
        password: password,
      },
    });
    return "signup successful";
  } catch (error) {
    console.log(error);
    return null; // Return null if there is an error
  }
}
