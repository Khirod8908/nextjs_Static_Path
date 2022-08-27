import styles from '../styles/Home.module.css';
import Link from 'next/link';

export default function Home({ data }) {
  console.log(data.length);
  const style = {
    display: 'flex',
    alignItems: 'center',
    gap: '1.5rem',
  };
  return (
    <div className={styles.container}>
      <h1>Hello world!</h1>
      {data.map((e, i) => {
        return (
          <div style={style}>
            <p key={i}>{e.name}</p>
            <Link href={`/${e.id}`}>View More</Link>
          </div>
        );
      })}
    </div>
  );
}

export async function getStaticProps() {
  const res = await fetch('https://jsonplaceholder.typicode.com/users');
  const data = await res.json();
  return { props: { data } };
}
