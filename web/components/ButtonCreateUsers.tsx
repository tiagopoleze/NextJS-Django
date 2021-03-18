// React.JS
import React from "react";

// Next.JS
import { useRouter } from "next/router";

const ButtonCreateUsers = () => {
  const router = useRouter();
  return (
    <React.Fragment>
      <br />
      <button
        type="button"
        className="inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        onClick={async (e) => {
          await fetch("api/createUsers");
          router.reload();
        }}
      >
        Add users
      </button>
    </React.Fragment>
  );
};

export default ButtonCreateUsers;
