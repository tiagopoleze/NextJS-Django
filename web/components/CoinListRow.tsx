// React.JS
import React from "react";

// Models
import { Coin } from "../Models/Coin";

const CoinLisRow: React.FC<{ coin: Coin }> = ({ coin }) => {
  const positive = "text-sm font-medium text-green-500";
  const negative = "text-sm font-medium text-red-500";
  return (
    <tr key={Math.random() * 1000000}>
      <td className="px-6 py-4 whitespace-nowrap">
        <div className="flex items-center">
          <div className="ml-4">
            <div className="text-sm font-medium text-gray-900">{coin.name}</div>
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
            <div className={coin.priceChange ? positive : negative}>
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
};

export default CoinLisRow;
