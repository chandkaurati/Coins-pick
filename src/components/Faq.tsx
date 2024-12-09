import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

function Faq() {
  return (
    <div>
      <Accordion type="single" collapsible>
        <AccordionItem value="item-1">
          <AccordionTrigger>
            What are the different types of cryptocurrency trading strategies
            and their risks?
          </AccordionTrigger>
          <AccordionContent className="text-slate-400">
            Common crypto trading strategies include day trading (24-hour
            trades), swing trading (days/weeks positions), position trading
            (long-term holds), and arbitrage (price differences). Key risks are
            market volatility, emotional decisions, leverage, and capital loss.
            Never invest more than you can afford to lose.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-2">
          <AccordionTrigger>
            What are the key technical analysis indicators used in
            cryptocurrency trading?
          </AccordionTrigger>
          <AccordionContent className="text-slate-400">
            Key technical indicators include Moving Averages (trend direction),
            RSI (overbought/oversold), MACD (momentum), Bollinger Bands
            (volatility), and Volume indicators. Use multiple indicators with
            fundamental analysis for better results as no single indicator is
            completely reliable.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-3">
          <AccordionTrigger>
            How do cryptocurrency exchanges work and what should you consider
            when choosing one?
          </AccordionTrigger>
          <AccordionContent className="text-slate-400">
            Crypto exchanges are trading platforms. Consider security features,
            fees, payment methods, available pairs, liquidity, regulations,
            interface, and support when choosing. Popular options include
            Binance, Coinbase Pro, and Kraken. Research thoroughly before
            selecting.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-4">
          <AccordionTrigger>
            What is a crypto wallet and how do you keep it secure?
          </AccordionTrigger>
          <AccordionContent className="text-slate-400">
            Crypto wallets store, send and receive cryptocurrencies. They can be
            hardware (physical) or software-based. Secure by protecting private
            keys, using strong passwords, 2FA, regular backups, and staying
            alert to phishing attempts. Consider hardware wallets for large
            amounts.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-5">
          <AccordionTrigger>
            What is DeFi and what are its main applications?
          </AccordionTrigger>
          <AccordionContent className="text-slate-400">
            DeFi provides financial services on blockchain without traditional
            intermediaries. Main uses include lending/borrowing, decentralized
            exchanges, yield farming, stablecoins, insurance protocols, and
            synthetic assets. It enables financial services without banks.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
}

export default Faq;
