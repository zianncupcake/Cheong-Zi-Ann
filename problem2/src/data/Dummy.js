import blurLogo from "../assets/BLUR.svg";
import bneoLogo from "../assets/bNEO.svg";
import busdLogo from "../assets/BUSD.svg";
import ethLogo from "../assets/ETH.svg";
import usdLogo from "../assets/USD.svg";

export const prices = [
  {
    currency: "BLUR",
    date: "2023-08-29T07:10:40.000Z",
    price: 0.20811525423728813,
  },
  {
    currency: "bNEO",
    date: "2023-08-29T07:10:50.000Z",
    price: 7.1282679,
  },
  {
    currency: "BUSD",
    date: "2023-08-29T07:10:40.000Z",
    price: 0.999183113,
  },
  {
    currency: "USD",
    date: "2023-08-29T07:10:30.000Z",
    price: 1,
  },
  {
    currency: "ETH",
    date: "2023-08-29T07:10:52.000Z",
    price: 1645.9337373737374,
  },
];

export const wallets = [
  {
    name: "BLUR Wallet",
    balance: 1111,
    currency: "BLUR",
    id: "1",
  },
  {
    name: "bNEO Wallet",
    balance: 2222,
    currency: "bNEO",
    id: "2",
  },
  {
    name: "BUSD Wallet",
    balance: 3333,
    currency: "BUSD",
    id: "3",
  },
  {
    name: "USD Wallet",
    balance: 4444,
    currency: "USD",
    id: "4",
  },
  {
    name: "ETH Wallet",
    balance: 5555,
    currency: "ETH",
    id: "5",
  },
];

export const logos = {
  BLUR: blurLogo,
  bNEO: bneoLogo,
  BUSD: busdLogo,
  USD: usdLogo,
  ETH: ethLogo,
};
