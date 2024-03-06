


export default function Home() {
  const name = 'SB';
  let tickers = ['NVDA','IGTX','NIO','AMZN','TSLA','AAPL','GOOG','TM','VWAGY','META','MSFT','JNJ','NVO','JPM','NFLX']

return tickers.map((ticker)=>{
  return ( 
   <a href={`/stock-details/${ticker}`}> <p>{ticker}</p></a>
    );
})

}