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
      logoUrl:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Apple_logo_grey.svg/1200px-Apple_logo_grey.svg.png',
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
      logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/c/cd/Johnson_and_Johnson_Logo.svg',
    },
    {
      symbol: 'NVO',
      logoUrl: 'https://seeklogo.com/images/N/Novo_Nordisk-logo-364B7BFB50-seeklogo.com.png',
    },
    {
      symbol: 'JPM',
      logoUrl:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/a/af/J_P_Morgan_Logo_2008_1.svg/1200px-J_P_Morgan_Logo_2008_1.svg.png',
    },
    {
      symbol: 'NFLX',
      logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png',
    },
  ];

  return (
    <div>
      <div className={styles.cardContainer}>
        {tickers.map((ticker) => (
          <div className={styles.card} key={ticker.symbol}>
            <a href={`/stock-details/${ticker.symbol}`}>
              <img src={ticker.logoUrl} alt="Company Logo" />
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
