import styles from './index.module.css';

export default function Home() {
  const name = 'SB';

  let tickers = [
    {
      symbol: 'NVDA',
      logoUrl: 'https://cdn4.iconfinder.com/data/icons/logos-and-brands/512/235_Nvidia_logo-1024.png',
    },
    {
      symbol: 'INTEL',
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
      logoUrl: 'https://pngimg.com/uploads/tesla_logo/tesla_logo_PNG12.png',
    },
    {
      symbol: 'APPL',
      logoUrl: 'https://pngfre.com/wp-content/uploads/apple-logo-13-1024x1024.png',
    },
    {
      symbol: 'GOOGL',
      logoUrl: 'https://cdn1.iconfinder.com/data/icons/google-s-logo/150/Google_Icons-09-512.png',
    },
    {
      symbol: 'TM',
      logoUrl: 'https://i.pinimg.com/originals/39/25/63/392563e99c6282e81c4d3f094d6f87fd.png',
    },
    {
      symbol: 'VWAGY',
      logoUrl:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/Volkswagen_logo_2019.svg/1024px-Volkswagen_logo_2019.svg.png',
    },
    {
      symbol: 'META',
      logoUrl:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ab/Meta-Logo.png/1600px-Meta-Logo.png?20211104123859',
    },
    {
      symbol: 'MSFT',
      logoUrl: 'https://evergreenleadership.com/wp-content/uploads/2019/05/microsoft-logo-png-transparent-20.png',
    },
    {
      symbol: 'JNJ',
      logoUrl: 'https://seeklogo.com/images/J/johnson-johnson-logo-4ECAED3257-seeklogo.com.png',
    },
    {
      symbol: 'NVO',
      logoUrl: 'https://seeklogo.com/images/N/Novo_Nordisk-logo-364B7BFB50-seeklogo.com.png',
    },
    {
      symbol: 'JPM',
      logoUrl: 'https://media2.vault.com/14347007/jp-morgan.png',
    },
    {
      symbol: 'NFLX',
      logoUrl:
        'https://static.vecteezy.com/system/resources/previews/019/956/198/original/netflix-transparent-netflix-free-free-png.png',
    },
  ];

  return (
    <div>
      <div className={styles.cardContainer}>
        {tickers.map((ticker) => (
          <div className={styles.card} key={ticker.symbol}>
            <a href={`/stock-details/${ticker.symbol}`}>
              <img src={ticker.logoUrl} alt="Company Logo" className={styles.image} />

              <p className={styles.ticker} style={{ fontFamily: 'Arial, sans-serif' }}>
                {ticker.symbol}
              </p>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
