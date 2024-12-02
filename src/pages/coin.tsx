import { CartesianGrid, Line, LineChart, XAxis } from "recharts";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

type ChartData = {
  month: string;
  desktop: number;
}[];

const chartConfig = {
  desktop: {
    label: "Price",
    color: "hsl(var(--chart-1))",
  },
  date:{
    label:"date",
    color: "hsl(var(--chart-1))",
  }
};

function Coin() {
  const [coinPrices, setCoinPrices] = useState<ChartData>();
  const [coinData, setCoinData] = useState<any>();
  const [loading, setLoading] = useState(false);
  const { id } = useParams();

  const headers = {
    accept: "application/json",
    "x-cg-demo-api-key": "CG-GoihbSiGKyma1fZv8hxeeDeE",
  };
  const getCoinChartData = async () => {
    setLoading(true);
    try {
      const responce = await axios.get(
        `https://api.coingecko.com/api/v3/coins/${id}/market_chart`,
        {
          headers: headers,
          params: {
            id: "bitcoin",
            vs_currency: "usd",
            days: 365,
          },
        }
      );

      const coinResponce = await axios.get(
        `https://api.coingecko.com/api/v3/coins/${id}`,
        {
          headers: headers,
        }
      );
      console.log(coinResponce);
      const rawData = responce.data.prices; // API response: [timestamp, price][]
      const formattedData: ChartData = rawData.map(
        ([timestamp, price]: number[]) => {
          const date = new Date(timestamp);
          const month = date.toLocaleString("default", { month: "long" }); // Get month name
          return { month, desktop: price };
        }
      );

      setCoinData(coinResponce.data);
      setCoinPrices(formattedData);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getCoinChartData();
  }, []);

  if(loading){
    return (
      <div className="flex justify-center items-center w-full h-screen">
        <p>Loading</p>
      </div>
    )
  }

  return (
    <Card className="md:h-auto">
      <CardHeader>
        <CardTitle>{`${coinData?.name} $${coinData?.market_data?.current_price?.usd}`}</CardTitle>
        <CardDescription>coin Chart Data (max 1yr)</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <LineChart
            accessibilityLayer
            data={coinPrices}
            margin={{
              left: 12,
              right: 12,
            }}
          >
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="month"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              tickFormatter={(value) => value.slice(0, 3)}
            />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Line
              dataKey="desktop"
              type="linear"
              stroke="var(--color-desktop)"
              strokeWidth={2}
              dot={false}
            />
          </LineChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col items-start gap-2 text-sm">
       
       <div className="flex flex-col gap-7 justify-start borde w-full">
       <h1>{`${coinData?.name} stastics`}</h1>
       <div className="flex justify-between"><p>Market Cap</p> <p>${coinData?.market_data?.market_cap?.usd}</p></div>
       <hr />
       <div className="flex justify-between"><p>Max Supply</p> <p>${coinData?.market_data?.max_supply}</p></div>
       </div>
      </CardFooter>
    </Card>
  );
}

export default Coin;