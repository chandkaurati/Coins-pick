import TrendingCoins from "./trendingCoinsCard";

function HeroSection({data, loading}:any) {
  return (
    <div
      className="md:h-[50vh] lg:h-screen flex flex-col gap-7 md:flex-row bg-cover bg-center md:px-5 "
      // style={{ backgroundImage: "url('/hero-bg2.jpg')" }}
    >
      <div
        className="flex flex-col items-center justify-center gap-3 md:w-1/2 text-3xl mt-6 text-center sm:text-5xl md:text-5xl
       md:text-left md:mt-0 lg:text-7xl"
      >
        <div className="flex flex-col gap-4">
          <h1 className="font-bold ">
            Trade <span className="text-[#7C3EFD]">Crypto</span>
          </h1>
          <h1 className="font-bold ">in few Steps</h1>
          <p className="text-sm md:text-xl">From a Regulated Exchange</p>
        </div>
      </div>
      <div className=" md:w-1/2 flex justify-center items-center">
        <TrendingCoins coinsdata={data} loading={loading} />
      </div>
    </div>
  );
}

export default HeroSection;
