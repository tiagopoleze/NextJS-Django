// React.JS
import React from "react";

// SWR
import useSWR from "swr";

// Components
import Dimmer from "../components/Dimmer";
import CoinList from "../components/CoinList";

const fetcher = async (url: string) => {
  try {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  } catch (e) {
    throw new Error("Couldn't find data");
  }
};

const CoinView = () => {
  const { data, error } = useSWR("/api/getCoins", fetcher, {
    refreshInterval: 120000,
  });

  if (error) {
    alert(error.message);
  }

  if (!data) {
    return <Dimmer />;
  }

  return (
    <React.Fragment>
      <div className="flex flex-col py-4">
        <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
            <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
              <CoinList data={data} />
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default CoinView;
