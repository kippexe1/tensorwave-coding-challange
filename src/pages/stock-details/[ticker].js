import { useRouter } from "next/router"



export default function StockDetails() {

const router = useRouter()
console.log(router.query.ticker);

return(
    <p>{router.query.ticker}</p>
)


}