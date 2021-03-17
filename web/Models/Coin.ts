export interface Coin {
  name: string;
  symbol: string;
  coinPrice: number;
  marketCap: number;
  priceChange: boolean;
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
