import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { CryptoData } from "../types/conins-type";
import { TrendingDownIcon, TrendingUp } from "lucide-react";
import { Link } from "react-router-dom";

interface CoinCardProps {
  coin: CryptoData;
}

function CoinCard({ coin }: CoinCardProps) {
  return (
    <Link to={`/dashboard/coin/${coin.id}`}>
     <div
      key={coin.name}
      className="transform transition-all duration-300 ease-in-out hover:shadow-2xl
       hover:shadow-gray-800
       hover:scale-105 hover:-rotate-1"
    >
      <Card>
        <CardHeader>
          <CardTitle>
            <div className="flex gap-4 items-center">
              <img src={coin.image} className="w-10 object-contain" alt="" />
              <div className="flex flex-col gap-2">
                <p className="uppercase text-[1.2rem]">{coin.symbol}</p>
                <p className="text-sm text-gray-400">{coin.name}</p>
              </div>
            </div>
          </CardTitle>
          <CardDescription>
            <div className="flex justify-between mt-3 text-center items-center">
              <div
                className={`py-1 px-3 rounded-full border ${
                  coin.price_change_24h < 0
                    ? "text-red-600 border-red-600"
                    : "text-green-600 border-green-600"
                }`}
              >
                {coin.price_change_24h.toFixed(3)}
              </div>
              <div
                className={`py-1 px-3 rounded-full border ${
                  coin.price_change_24h < 0
                    ? "text-red-600 border-red-600"
                    : "text-green-600 border-green-600"
                }`}
              >
                {coin.price_change_24h < 0 ? (
                  <div className="flex items-center gap-2">
                    <p>{coin.price_change_percentage_24h.toFixed(3)}%</p>{" "}
                    <TrendingDownIcon />
                  </div>
                ) : (
                  <div className="flex items-center gap-2">
                    <p>{coin.price_change_percentage_24h.toFixed(3)}%</p>{" "}
                    <TrendingUp />
                  </div>
                )}
              </div>
            </div>
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col gap-3">
            <p className="text-gray-400"><span className="pr-3">Marketp Cap</span>{coin.market_cap}</p>
            <p className="text-gray-400"><span className="pr-3">Current Price</span>{coin.current_price}</p>
          </div>
        </CardContent>
        <CardFooter>
          <p>Card Footer</p>
        </CardFooter>
      </Card>
    </div>
    </Link>
  );
}

export default CoinCard;
