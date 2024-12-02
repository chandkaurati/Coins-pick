import { useEffect, useState } from "react";
import axios from "axios";
import { CryptoData } from "../types/conins-type";
import { BarLoader } from "react-spinners";
import CoinCard from "../components/CoinCard";

function Dashboard() {
  const [coins, setCoins] = useState<CryptoData[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const getAllCoins = async () => {
    setLoading(true);
    try {
      const responce = await axios.get(
        "https://api.coingecko.com/api/v3/coins/markets",
        {
          headers: {
            "x-cg-demo-api-key": import.meta.env.VITE_COINGECKO_API_KEY,
          },
          params: {
            vs_currency: "usd",
          },
        }
      );
      console.log(responce);
      setCoins(responce.data);
    } catch (error) {
      console.log(error);
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getAllCoins();
  }, []);

  if (loading) {
    return (
      <div className="w-full h-screen">
        <div>
        <BarLoader color="blue" width={"100%"} className="mt-2" />
        </div>
      </div>
    );
  }

  if(error){
    
  }

  return (
    <div className="p-4">
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 py-4">
        {coins.map((coin: CryptoData) => (
          <CoinCard key={coin.id} coin={coin} />
        ))}
      </div>
    </div>
  );
}

export default Dashboard;
