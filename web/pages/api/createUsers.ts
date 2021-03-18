// Next.JS
import { NextApiRequest, NextApiResponse } from "next";

// Models
import { User } from "../../Models/User";

export default async function createUsers(
  req: NextApiRequest,
  res: NextApiResponse
) {
  let users: User[] = [];
  for (let i = 0; i < 10; i++) {
    const userName = randomElement(usernames);
    users.push({
      username: userName,
      emailAddress: `${userName.toLowerCase()}${randomElement(emails)}`,
      profilePicture: randomElement(profilePictures),
      favoriteCoin: randomElement(coins),
    });
  }

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

const usernames = [
  "provisn",
  "tiagopoleze",
  "Dortha",
  "Patsy",
  "Isabel",
  "Hortencia",
  "Missy",
  "Merissa",
  "Star",
  "Alanna",
  "Kecia",
  "Mayola",
];

const emails = ["@provisn.com", "@tiagopoleze.io"];
const coins = ["USD", "EUR", "BRL", "GBP"];
const profilePictures = [
  "https://pbs.twimg.com/profile_images/1272444226794598400/uwDSUyMh_400x400.jpg",
  "https://tiagopoleze.io/_next/image?url=%2Fimages%2Flogo.png&w=128&q=75",
  "https://randomuser.me/api/portraits/women/82.jpg",
  "https://randomuser.me/api/portraits/women/20.jpg",
  "https://randomuser.me/api/portraits/women/69.jpg",
  "https://randomuser.me/api/portraits/men/5.jpg",
  "https://randomuser.me/api/portraits/lego/8.jpg",
  "https://randomuser.me/api/portraits/lego/6.jpg",
  "https://randomuser.me/api/portraits/lego/5.jpg",
  "https://randomuser.me/api/portraits/lego/7.jpg",
];

function randomElement<T>(arr: T[]): T {
  return arr[Math.floor(Math.random() * arr.length)];
}
