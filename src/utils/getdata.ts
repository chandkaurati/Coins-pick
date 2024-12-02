import axios from "axios";

export const getCryptoNews = async () => {
  try {
    const responce = await axios.get("https://newsapi.org/v2/everything", {
      params: {
        apiKey: "f0b96590984c495ebe7b212f2bb759d1",
        q: "crypto",
        language: "en",
      },
    });

    return responce.data;
  } catch (error) {
    return error;
  }
};

export const getTrendingCoins = async () => {
  try {
    const responce = await axios.get(
      "https://api.coingecko.com/api/v3/search/trending",
      {
        headers: {
          "x-cg-demo-api-key": import.meta.env.VITE_COINGECKO_API_KEY,
        },
      }
    );

    return responce.data;
  } catch (error) {
    return error;
  }
};

export const getHeadLiens = async () => {
  try {
    const responce = await axios.get("https://newsapi.org/v2/top-headlines", {
      params: {
        country: "us",
        apiKey: "f0b96590984c495ebe7b212f2bb759d1",
      },
    });

    return responce.data;
  } catch (error) {
    return error;
  }
};
