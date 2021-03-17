export interface Coin {
  coinPrice: number;
  marketCap: number;
  priceChange: boolean;
  name: string;
  symbol: string;
}

export const positiveCoin: Coin = {
  coinPrice: 100,
  marketCap: 99,
  priceChange: true,
  name: "Bitcoin",
  symbol: "BTC",
};

export const negativeCoin: Coin = {
  coinPrice: 99,
  marketCap: 100,
  priceChange: false,
  name: "Ethereum",
  symbol: "ETH",
};
