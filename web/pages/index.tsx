// React.JS
import React from "react";

// Next.JS
import { GetStaticProps } from "next";

// Models
import { User, userExample } from "../Models/User";

export const getStaticProps: GetStaticProps = async (context) => {
  const res = await fetch('http://127.0.0.1:8000/myusers/')
  const users: User[] = await res.json()
  // const users = await res.json()
  // const users: User[] = [];
  // for (let i = 0; i < 100; i++) {
  //   users.push(userExample);
  // }

  return {
    props: {
      users,
    },
    revalidate: 1,
  };
};

const Home: React.FC<{ users: User[] }> = ({ users }) => {
  return (
    <React.Fragment>
      <br />
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        {users.map((user) => {
          return (
            <div key={user.users_id} className="relative rounded-lg border border-gray-300 bg-white px-6 py-5 shadow-sm flex items-center space-x-3 hover:border-gray-400 focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500">
              <div className="flex-shrink-0">
                <img
                  className="h-10 w-10 rounded-full"
                  src={user.profilePicture}
                  alt=""
                />
              </div>
              <div className="flex-1 min-w-0">
                <a href="#" className="focus:outline-none">
                  <span className="absolute inset-0" aria-hidden="true" />
                  <p className="text-sm font-medium text-gray-900">
                    {user.username}
                  </p>
                  <p className="text-sm text-gray-500 truncate">
                    {user.emailAddress} / {user.favoriteCoin}
                  </p>
                </a>
              </div>
            </div>
          );
        })}
      </div>
    </React.Fragment>
  );
};

export default Home;
