// React.JS
import React from "react";

// Next.JS
import { GetServerSideProps } from "next";

// Models
import { Coin } from "../Models/Coin";
import { Nomics } from "../Models/Nomics";

export const getServerSideProps: GetServerSideProps = async (context) => {
  const response = await fetch(
    `https://api.nomics.com/v1/currencies/ticker?key=${process.env.NOMICS_API_KEY}&interval=1d`
  );
  let data: Nomics[] = await response.json();
  data = data.slice(0, 300);
  if (!data) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }
  const coins: Coin[] = data.map((value) => {
    let changed = true;
    if (value["1d"]) {
      changed = Number(value["1d"].price_change) >= 0;
    }
    return {
      name: value.name,
      symbol: value.symbol,
      coinPrice: Number(value.price),
      priceChange: changed,
      marketCap: Number(value.market_cap),
    } as Coin;
  });
  return {
    props: {
      coins,
    },
  };
};

const CoinView: React.FC<{ coins: Coin[] }> = ({ coins }) => {
  const positive = "text-sm font-medium text-green-500";
  const negative = "text-sm font-medium text-red-500";
  return (
    <React.Fragment>
      <br />
      <div className="flex flex-col">
        <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
            <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Name
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Symbol
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Market Cap
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Price
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {coins.map((coin) => {
                    return (
                      <tr key={Math.random() * 1000000}>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="flex items-center">
                            <div className="ml-4">
                              <div className="text-sm font-medium text-gray-900">
                                {coin.name}
                              </div>
                            </div>
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="flex items-center">
                            <div className="ml-4">
                              <div className="text-sm font-medium text-gray-900">
                                {coin.symbol}
                              </div>
                            </div>
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="flex items-center">
                            <div className="ml-4">
                              <div className="text-sm font-medium text-gray-900">
                                {coin.marketCap.toLocaleString("nl-NL", {
                                  style: "currency",
                                  currency: "EUR",
                                })}
                              </div>
                            </div>
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          <div className="flex items-center">
                            <div className="ml-4">
                              <div
                                className={
                                  coin.priceChange ? positive : negative
                                }
                              >
                                {coin.coinPrice.toLocaleString("nl-NL", {
                                  style: "currency",
                                  currency: "EUR",
                                })}
                              </div>
                            </div>
                          </div>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default CoinView;
