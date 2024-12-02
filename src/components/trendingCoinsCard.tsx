import { FadeLoader} from "react-spinners";

function TrendingCoins({ coinsdata, loading }: any) {
  console.log(coinsdata.coins);
  return (
    <div
      className=" m-3 sm:m-0 w-[25rem] h-[25rem] md:w-[30rem] 
       md py-8 px-5 flex border border-gray-600 flex-col gap-4 bg-[#0d0f11]
    rounded-3xl box-border overflow-y-scroll scrollbar-hide"
    >
    <p className="text-[#8b55ff] font-bold">Trending Coins</p>
      {loading && (
        <div className=" flex items-center justify-center w-full h-full">
          <FadeLoader color={"#7C3EFD"} width={5} />
        </div>
      )}


      <div
        className="flex flex-col gap-5 overflow-auto hide-scrollbar overflow-y-auto"
        style={{
          overflowY: "scroll", // Enable vertical scrolling
          scrollbarWidth: "none", // For Firefox
          msOverflowStyle: "none", // For Internet Explorer and Edge
        }}
      >
        {coinsdata?.coins?.map((coin: any) => (
          <div
            key={coin?.item.id}
            className="flex  border-red-600 justify-between py-1 px-2"
          >
            <div className="flex items-center gap-2">
              <img
                className="rounded-full w-10"
                src={coin?.item.small}
                alt=""
              />{" "}
              <p>{coin.item.symbol}</p>{" "}
              <p className="text-gray-400">{coin?.item.name}</p>
            </div>
            <p>{`$ ${coin?.item.data.price?.toFixed(3)}`}</p>
            <p
              className={`text-lg ${
                coin?.item.data.price_change_percentage_24h.usd >= 0
                  ? "text-green-500"
                  : "text-red-500"
              }`}
            >
              {coin?.item.data.price_change_percentage_24h.usd.toFixed(3)}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TrendingCoins;
