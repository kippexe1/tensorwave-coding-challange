import styles from './index.module.css';

export default function Home() {
  const name = 'SB';

  let tickers = [
    {
      symbol: 'NVDA',
      logoUrl: 'https://cdn4.iconfinder.com/data/icons/logos-and-brands/512/235_Nvidia_logo-1024.png',
    },
    {
      symbol: 'IGTX',
      logoUrl:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7d/Intel_logo_%282006-2020%29.svg/1600px-Intel_logo_%282006-2020%29.svg.png',
    },
    {
      symbol: 'NIO',
      logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/c/ca/NIO_logo.svg',
    },
    {
      symbol: 'AMZN',
      logoUrl:
        'https://png2.cleanpng.com/sh/a18fb8d6ee12143bf4622e21566ad6c7/L0KzQYm3VcAyN6p8iZH0aYP2gLBuTfFuaat0hp9sb32wfLFuj71zbaVmgd42YoLkfrW0kQVjdJp4gNt3Zz3meLL7TgJwd54yhNHwbz24cbaBVshnPWQ9S6c8NT68SYS5V8M1P2I6Sqc6OEC5RoK5U8AzNqFzf3==/kisspng-amazon-com-logo-retail-brand-publishing-chat-room-logo-5ae868f5383535.9932734715251806612302.png',
    },
    {
      symbol: 'TSLA',
      logoUrl:
        'https://banner2.cleanpng.com/20190417/eoa/kisspng-logo-font-tesla-inc-typography-car-5cb7a2524c8954.3957115715555385143135.jpg',
    },
    {
      symbol: 'AAPL',
      logoUrl: 'https://banner2.cleanpng.com/20171218/f41/apple-logo-png-5a37e212dfda18.3311147015136117949169.jpg',
    },
    {
      symbol: 'GOOG',
      logoUrl:
        'https://banner2.cleanpng.com/20180723/btg/kisspng-google-logo-google-search-google-images-g-suite-google-adwords-5b5695e47fdc94.0743248315324011245237.jpg',
    },
    {
      symbol: 'TM',
      logoUrl:
        'https://banner2.cleanpng.com/20180820/tl/kisspng-toyota-86-car-logo-general-motors--5b7b8e3e0831e0.5485634815348239980336.jpg',
    },
    {
      symbol: 'VWAGY',
      logoUrl:
        'https://banner2.cleanpng.com/20180323/cbq/kisspng-volkswagen-group-car-volkswagen-beetle-volkswagen-cars-logo-brands-5ab51e3044c900.9677457215218191842818.jpg',
    },
    {
      symbol: 'META',
      logoUrl: 'https://i.pinimg.com/originals/50/de/9c/50de9c655bb90531b36c68f8f2ba3686.png',
    },
    {
      symbol: 'MSFT',
      logoUrl:
        'https://p7.hiclipart.com/preview/315/451/665/microsoft-dynamics-partnership-company-nasdaq-msft-lenovo-logo.jpg',
    },
    {
      symbol: 'JNJ',
      logoUrl:
        'https://banner2.cleanpng.com/20180202/thq/kisspng-johnson-johnson-company-medical-device-organizat-johnson-amp-johns-logo-5a73f100158700.9935580015175477760882.jpg',
    },
    {
      symbol: 'NVO',
      logoUrl: 'https://seeklogo.com/images/N/Novo_Nordisk-logo-364B7BFB50-seeklogo.com.png',
    },
    {
      symbol: 'JPM',
      logoUrl: 'https://cdn.freebiesupply.com/logos/large/2x/jpmorgan-logo-png-transparent.png',
    },
    {
      symbol: 'NFLX',
      logoUrl: 'https://cdn4.iconfinder.com/data/icons/logos-and-brands/512/235_Nvidia_logo-1024.png',
    },
  ];

  return tickers.map((ticker) => {
    return (
      <a href={`/stock-details/${ticker.symbol}`}>
        <p className={styles.ticker}>{ticker.symbol}</p>
        <img src={ticker.logoUrl} width="45px" />
      </a>
    );
  });
}
