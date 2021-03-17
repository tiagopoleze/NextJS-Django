// React.JS
import React from "react";

// Next.JS
import Link from "next/link";
import { useRouter } from "next/router";

const Heading = () => {
  const router = useRouter();
  const [selected, setSelected] = React.useState("1st tab");
  const notSelected =
    "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 w-1/2 py-2 px-1 text-center border-b-2 font-medium text-sm";
  const selectedClass =
    "border-indigo-500 text-indigo-600 w-1/2 py-2 px-1 text-center border-b-2 font-medium text-sm";
  return (
    <React.Fragment>
      <div>
        <div className="sm:hidden">
          <label htmlFor="tabs" className="sr-only">
            Select a tab
          </label>
          <select
            id="tabs"
            name="tabs"
            className="block w-full focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md"
          >
            <option
              selected={selected === "1st tab"}
              onClick={() => {
                setSelected("1st tab");
                router.replace("/");
              }}
            >
              1st tab
            </option>
            <option
              selected={selected === "2nd tab"}
              onClick={() => {
                setSelected("2nd tab");
                router.replace("/coinView");
              }}
            >
              2nd tab
            </option>
          </select>
        </div>
        <div className="hidden sm:block">
          <div className="border-b border-gray-200">
            <nav className="-mb-px flex" aria-label="Tabs">
              <Link href={"/"}>
                <a
                  className={
                    selected === "1st tab" ? selectedClass : notSelected
                  }
                  onClick={() => setSelected("1st tab")}
                >
                  1st tab
                </a>
              </Link>
              <Link href={"/coinView"}>
                <a
                  className={
                    selected === "2nd tab" ? selectedClass : notSelected
                  }
                  onClick={() => setSelected("2nd tab")}
                >
                  2nd tab
                </a>
              </Link>
            </nav>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Heading;
