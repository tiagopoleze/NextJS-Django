// React.JS
import React from "react";

// Next.JS
import { GetStaticProps } from "next";

// Models
import { User } from "../Models/User";

// Components
import ButtonCreateUsers from "../components/ButtonCreateUsers";
import UserCard from "../components/UserCard";

export const getStaticProps: GetStaticProps = async (context) => {
  const res = await fetch("http://127.0.0.1:8000/myusers/");
  const users: User[] = await res.json();

  return {
    props: {
      users,
    },
    revalidate: 1,
  };
};

const Home: React.FC<{ users: User[] }> = ({ users }) => {
  if (users.length === 0) {
    return <ButtonCreateUsers />;
  }

  return (
    <React.Fragment>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 py-4">
        {users.map((user) => {
          return <UserCard user={user} />;
        })}
      </div>
    </React.Fragment>
  );
};

export default Home;
