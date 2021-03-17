// Next.JS
import { NextApiRequest, NextApiResponse } from "next";

// Models
import { User } from "../../Models/User";

export default async function createUsers(
  req: NextApiRequest,
  res: NextApiResponse
) {
  let users: User[] = [
    {
      username: "provisn",
      emailAddress: "provisn@provisn.com",
      favoriteCoin: "EUR",
      profilePicture:
        "https://pbs.twimg.com/profile_images/1272444226794598400/uwDSUyMh_400x400.jpg",
    },
    {
      username: "tiagopoleze",
      emailAddress: "tiagopoleze@gmail.com",
      favoriteCoin: "BRL",
      profilePicture:
        "https://tiagopoleze.io/_next/image?url=%2Fimages%2Flogo.png&w=128&q=75",
    },
  ];

  const url = "http://127.0.0.1:8000/myusers/";
  for (const user of users) {
    try {
      await fetch(url, {
        method: "POST",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify(user),
      });
    } catch (e) {
      console.log(e);
    }
  }
  return res.status(200).end();
}
