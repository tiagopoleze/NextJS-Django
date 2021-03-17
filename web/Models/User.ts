export interface User {
  users_id: string
  username: string;
  profilePicture: string;
  emailAddress: string;
  favoriteCoin: string;
}
export const userExample: User = {
  users_id: 'lkasndasn',
  username: "provisn",
  emailAddress: "provisn@provisn.com",
  favoriteCoin: "EUR",
  profilePicture:
    "https://pbs.twimg.com/profile_images/1272444226794598400/uwDSUyMh_400x400.jpg",
};
