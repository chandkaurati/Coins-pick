import { useEffect, useState } from "react";
import HeroSection from "../components/HeroSection";
import { TrendingCoin } from "../types/conins-type";
import Faq from "../components/Faq";
import axios from "axios";
function Home() {
  const [data, setData] = useState<TrendingCoin[]>([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    (async () => {
      setLoading(true);
      try {
        const trendingCoinsData: any = await axios.get(
          "https://api.coingecko.com/api/v3/search/trending",
          {
            headers: {
              "x-cg-demo-api-key": import.meta.env.VITE_COINGECKO_API_KEY,
            },
          }
        );
        setData(trendingCoinsData.data);
        console.log(trendingCoinsData);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  return (
    <div>
      <HeroSection data={data} loading={loading} />
      <div className="px-6 py-10">
        <section>{/* blog cards */}</section>
        <section className="py-10 container">
          <div className="text-center pb-10 text-2xl font-semibold">
            <span>FAQ </span>
            Frequently asked questions
          </div>
          <Faq />
        </section>
      </div>
    </div>
  );
}

export default Home;
