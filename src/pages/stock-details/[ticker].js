import { useRouter } from "next/router"

export async function getServerSideProps(context) {
    
    // Fetch data from external API

console.log("sb",context.params.ticker)
    
    const companyResponse = await fetch(`https://www.alphavantage.co/query?function=OVERVIEW&symbol=${context.params.ticker}&apikey=JTRQZDDNXAOLX046`)
    const companyOverview = await companyResponse.json()
    
    const stockHistoryResponse = await fetch(`https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=${context.params.ticker}&outputsize=full&apikey=JTRQZDDNXAOLX046`)
    const stockPriceHistory = await stockHistoryResponse.json()
    
    
    // Pass data to the page via props
    
    return { props: { companyOverview,stockPriceHistory } }
  }

export default function StockDetails({companyOverview,stockPriceHistory}) {
    console.log(companyOverview)
    console.log(stockPriceHistory);

const router = useRouter()
const {ticker} = router.query;

return (
  <div>
    <h1>Stock Details for {ticker} </h1>

    <h2>companyOverview</h2>
    <pre>{JSON.stringify(companyOverview, null, 2)}</pre>

    <h2>stockPriceHistory</h2>
    <pre>{JSON.stringify(stockPriceHistory, null, 2)}</pre>



  </div>
)




  return(
    <p>{router.query.ticker}</p>
)


}