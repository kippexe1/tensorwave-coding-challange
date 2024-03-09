import { useRouter } from 'next/router';
import styles from './[ticker].module.css';

export async function getServerSideProps(context) {
  // Fetch data from external API

  const companyResponse = await fetch(`https://www.alphavantage.co/query?function=OVERVIEW&symbol=IBM&apikey=demo`);
  const companyOverview = await companyResponse.json();

  const stockHistoryResponse = await fetch(
    `https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=IBM&outputsize=full&apikey=demo`,
  );
  const stockPriceHistory = await stockHistoryResponse.json();

  let timeSeriesData = stockPriceHistory['Time Series (Daily)'];
  timeSeriesData = Object.keys(timeSeriesData).map((date) => ({
    date: date,
    close: timeSeriesData[date]['4. close'],
    volume: timeSeriesData[date]['5. volume'],
  }));

  for (let i = 0; i < timeSeriesData.length - 1; i++) {
    const currentClose = parseFloat(timeSeriesData[i].close);
    const previousClose = parseFloat(timeSeriesData[i + 1].close);
    const percentChangeClose = ((currentClose - previousClose) / previousClose) * 100;

    timeSeriesData[i].percentChangeClose = percentChangeClose.toFixed(2) + '%';
  }

  return { props: { companyOverview, timeSeriesData } };
}

export default function StockDetails({ companyOverview, timeSeriesData }) {
  const router = useRouter();
  const { ticker } = router.query;

  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>Stock Details for {ticker}</h1>

      <div className={styles.section}>
        <h2 className={styles.subheading}>Company Overview</h2>
        <p>{companyOverview?.Description || 'N/A'}</p>
        <p>
          <strong>Symbol:</strong> {companyOverview?.Symbol || 'N/A'}
        </p>
        <p>
          <strong>Asset Type:</strong> {companyOverview?.AssetType || 'N/A'}
        </p>
        <p>
          <strong>Exchange:</strong> {companyOverview?.Exchange || 'N/A'}
        </p>
        <p>
          <strong>Sector:</strong> {companyOverview?.Sector || 'N/A'}
        </p>
        <p>
          <strong>Industry:</strong> {companyOverview?.Industry || 'N/A'}
        </p>
        <p>
          <strong>Market Capitalization:</strong> {companyOverview?.MarketCapitalization || 'N/A'}
        </p>
      </div>

      <div className={styles.section}>
        <h2 className={styles.subheading}>Stock Price History</h2>
        <table className={styles.table}>
          <thead>
            <tr>
              <th>Date</th>
              <th>Volume</th>
              <th>% Change</th>
              <th>Close</th>
            </tr>
          </thead>
          <tbody>
            {timeSeriesData?.map((data, index) => (
              <tr key={index}>
                <td>{data.date}</td>
                <td>{data.volume}</td>
                <td>{data.percentChangeClose}</td>
                <td>{data.close}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
