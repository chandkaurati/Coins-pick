
interface CoinExchangeData {
   market_cap : string,
   market_cap_btc : string,
   price : number,
   price_btc? : string,
   total_volume : string,
   total_volume_btc? : string
}

export interface TrendingCoin {
    coin_id : number,
    id : string,
    name  : string,
    price_btc?: number,
    data : CoinExchangeData,
    small ?  : string,
    large ? : string,
    thumb ? : string
}

export interface CryptoData {
    ath: number;
    ath_change_percentage: number;
    ath_date: string;
    atl: number;
    atl_change_percentage: number;
    atl_date: string;
    circulating_supply ?: number;
    current_price: number;
    fully_diluted_valuation ?: number;
    high_24h: number;
    id: string;
    image: string;
    last_updated: string;
    low_24h: number;
    market_cap: number;
    market_cap_change_24h ?: number;
    market_cap_change_percentage_24h ? : number;
    market_cap_rank ? : number;
    max_supply ?: number;
    name: string;
    price_change_24h: number;
    price_change_percentage_24h: number;
    roi ?: null | {
      times: number;
      currency: string;
      percentage: number;
    };
    symbol ?: string;
    total_supply ?: number;
    total_volume ?: number;
  }
  
