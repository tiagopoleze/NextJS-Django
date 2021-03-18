// Next.JS
import { NextApiRequest, NextApiResponse } from "next";

// Models
import { Nomics } from "../../Models/Nomics";
import { Coin } from "../../Models/Coin";

export default async function getCoins(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const response = await fetch(
      `https://api.nomics.com/v1/currencies/ticker?key=${process.env.NOMICS_API_KEY}&interval=1d`
    );
    let data: Nomics[] = await response.json();
    data = data.slice(0, 300);
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
    return res.status(200).json(coins);
  } catch (e) {
    console.log(e);
    return res.status(400).end();
  }
}
