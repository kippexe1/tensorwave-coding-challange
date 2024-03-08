import { useRouter } from 'next/router';
import styles from './[ticker].module.css'


export async function getServerSideProps(context) {
  // Fetch data from external APIpmp

  console.log('sb', context.params.ticker);

  const companyResponse = await fetch(`https://www.alphavantage.co/query?function=OVERVIEW&symbol=IBM&apikey=demo`);
  const companyOverview = await companyResponse.json();

  const stockHistoryResponse = await fetch(
    `https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=IBM&outputsize=full&apikey=demo`,
  );
  const stockPriceHistory = await stockHistoryResponse.json();
  // ${context.params.ticker}

  // Pass data to the page via props

  return { props: { companyOverview, stockPriceHistory } };
}

export default function StockDetails({ companyOverview, stockPriceHistory }) {
  console.log(companyOverview);
  console.log(stockPriceHistory);

  const router = useRouter();
  const { ticker } = router.query;
  let timeSeriesData = stockPriceHistory['Time Series (Daily)'];
  timeSeriesData = Object.keys(timeSeriesData).map((date) => {
    return {
      date: date,
      close: timeSeriesData[date]['4. close'],
      volume: timeSeriesData[date]['5. volume'],
    
    };
  });



  //calculate, map through, time series data valueable, +1 , -1 = array

  for (let i = 0; i < timeSeriesData.length - 1; i++) {
    const currentClose = parseFloat(timeSeriesData[i].close);
    const previousClose = parseFloat(timeSeriesData[i + 1].close);
    const percentChangeClose = ((currentClose - previousClose) / previousClose) * 100;

  timeSeriesData[i].percentChangeClose=percentChangeClose  

    console.log(
      `Percent change in close price from ${timeSeriesData[i].date} to ${
        timeSeriesData[i + 1].date
      }: ${percentChangeClose.toFixed(2)}%`,
    );


  }

  return (
   <body>
    <div>
      <h1 className={styles.heading}>Stock Details for {ticker} </h1>
      <h2>Company Overview</h2>
      <p>Company Overview: {companyOverview.Description}</p>
      <h2>Symbol</h2>
      <p>{companyOverview.Symbol}</p>
      <p>{companyOverview.AssetType}</p>
      <p>{companyOverview.Exchange}</p>
      <p>{companyOverview.Sector}</p>
      <p>{companyOverview.Industry}</p>
      <p>{companyOverview.MarketCapitalization}</p>
      
      <h2>Stock Price History</h2>
      <pre>
  <table border="2" > 
    <caption>Stock Details</caption>
    <tbody>
   {timeSeriesData.map((data) => (
    <tr>
      <td>{data.data}</td>
      
      <td><th>Date</th>{data.date}</td>
      <th><td>Volume</td>{data.volume}</th>
      <td><th>% Change</th>{data.percentChangeClose}</td>
      <td><th>Close</th>{data.close}</td>
      

    </tr>
  ))}
    </tbody>
  </table>
</pre>
      
 
    </div>

    </body> 
)
}

// Show the company symbol, asset type, name, description, exchange,
// sector, industry and market capitalization. If any of this information is not
// available then display “N/A” instead
// For each historical price item show the following: date, close price, volume
// and percentage change in price from the previous day
