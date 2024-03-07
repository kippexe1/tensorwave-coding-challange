import styles from './index.module.css';

export default function Home() {
  const name = 'SB';

  //let tickers = ['NVDA','IGTX','NIO','AMZN','TSLA','AAPL','GOOG','TM','VWAGY','META','MSFT','JNJ','NVO','JPM','NFLX']

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
      logoUrl: 'https://cdn4.iconfinder.com/data/icons/logos-and-brands/512/235_Nvidia_logo-1024.png',
    },
    {
      symbol: 'TSLA',
      logoUrl: 'https://cdn4.iconfinder.com/data/icons/logos-and-brands/512/235_Nvidia_logo-1024.png',
    },
    {
      symbol: 'AAPL',
      logoUrl: 'https://cdn4.iconfinder.com/data/icons/logos-and-brands/512/235_Nvidia_logo-1024.png',
    },
    {
      symbol: 'GOOG',
      logoUrl: 'https://cdn4.iconfinder.com/data/icons/logos-and-brands/512/235_Nvidia_logo-1024.png',
    },
    {
      symbol: 'TM',
      logoUrl: 'https://cdn4.iconfinder.com/data/icons/logos-and-brands/512/235_Nvidia_logo-1024.png',
    },
    {
      symbol: 'VWAGY',
      logoUrl: 'https://cdn4.iconfinder.com/data/icons/logos-and-brands/512/235_Nvidia_logo-1024.png',
    },
    {
      symbol: 'META',
      logoUrl: 'https://cdn4.iconfinder.com/data/icons/logos-and-brands/512/235_Nvidia_logo-1024.png',
    },
    {
      symbol: 'MSFT',
      logoUrl: 'https://cdn4.iconfinder.com/data/icons/logos-and-brands/512/235_Nvidia_logo-1024.png',
    },
    {
      symbol: 'JNJ',
      logoUrl: 'https://cdn4.iconfinder.com/data/icons/logos-and-brands/512/235_Nvidia_logo-1024.png',
    },
    {
      symbol: 'NVO',
      logoUrl: 'https://cdn4.iconfinder.com/data/icons/logos-and-brands/512/235_Nvidia_logo-1024.png',
    },
    {
      symbol: 'JPM',
      logoUrl: 'https://cdn4.iconfinder.com/data/icons/logos-and-brands/512/235_Nvidia_logo-1024.png',
    },
    {
      symbol: 'NFLX',
      logoUrl: 'https://cdn4.iconfinder.com/data/icons/logos-and-brands/512/235_Nvidia_logo-1024.png',
    },
    /*'IGTX',
    'NIO',
    'AMZN',
    'TSLA',
    'AAPL',
    'GOOG',
    'TM',
    'VWAGY',
    'META',
    'MSFT',
    'JNJ',
    'NVO',
    'JPM',
    'NFLX', */
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
